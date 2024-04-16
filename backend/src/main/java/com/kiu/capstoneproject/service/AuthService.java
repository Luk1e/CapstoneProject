package com.kiu.capstoneproject.service;

import com.kiu.capstoneproject.dto.auth.AuthUserDto;
import com.kiu.capstoneproject.dto.auth.LoginUserDto;
import com.kiu.capstoneproject.dto.auth.RegisterUserDto;
import com.kiu.capstoneproject.enums.Role;
import com.kiu.capstoneproject.enums.TokenType;
import com.kiu.capstoneproject.exception.AlreadyExistsException;
import com.kiu.capstoneproject.exception.IncorrectCredentialsException;
import com.kiu.capstoneproject.exception.NotFoundException;
import com.kiu.capstoneproject.exception.TokenExpiredException;
import com.kiu.capstoneproject.model.entity.Student;
import com.kiu.capstoneproject.model.entity.Teacher;
import com.kiu.capstoneproject.model.entity.User;
import com.kiu.capstoneproject.repository.UserRepository;
import com.kiu.capstoneproject.model.entity.Token;
import com.kiu.capstoneproject.repository.TokenRepository;
import com.kiu.capstoneproject.utils.CookieUtils;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;
    private final TokenService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    @Value("${jwt.expiration}")
    private Long jwtExpiration;

    @Value("${jwt.refresh-expiration}")
    private long refreshExpiration;


    public AuthUserDto authenticateUser(
            HttpServletResponse response
    ) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication != null && authentication.isAuthenticated()) {
            Object userObject = authentication.getPrincipal();

            if (userObject instanceof UserDetails) {
                User user = userRepository.findByEmail(((UserDetails) userObject).getUsername())
                        .orElseThrow(() -> new IncorrectCredentialsException("Token not valid"));


                return AuthUserDto.builder()
                        .firstName(user.getFirstName())
                        .lastName(user.getLastName())
                        .email(user.getEmail())
                        .status(user.getRole())
                        .build();
            }
        }
        // throw error if token is not valid
        throw new IncorrectCredentialsException("Token not valid");
    }


    public void registerUser(
            RegisterUserDto registerUserDto,
            Integer status,
            HttpServletResponse response
    ) {
        Optional<User> userOptional = userRepository.
                findByEmail(registerUserDto.getEmail());

        // throw error if the email is taken
        if (userOptional.isPresent()) {
            throw new AlreadyExistsException("The email has already been taken");
        }

        // Create common User base class for shared fields
        User user;
        switch (status) {
            case 0:
                user = new Teacher();
                ((Teacher) user).setRole(Role.TEACHER); // Set role for Teacher
                break;
            case 1:
                user = new Student();
                ((Student) user).setRole(Role.STUDENT); // Set role for Student
                break;
            default:
                throw new IllegalStateException("Status code is incorrect");
        }

        // Populate common fields for all Users
        user.setFirstName(registerUserDto.getFirstName());
        user.setLastName(registerUserDto.getLastName());
        user.setEmail(registerUserDto.getEmail());
        user.setPassword(passwordEncoder.encode(registerUserDto.getPassword()));

        // Save user to database
        User savedUser = userRepository.save(user);

        // Generate tokens
        String accessToken = jwtService.generateToken(user);
        String refreshToken = jwtService.generateRefreshToken(user);
        // Save access token to database
        saveUserToken(savedUser, accessToken);


        // Create required cookies with appropriate settings
        CookieUtils.addCookie(response, "accessToken", accessToken, jwtExpiration / 1000, true);
        CookieUtils.addCookie(response, "refreshToken", refreshToken, refreshExpiration / 1000, true);
        CookieUtils.addCookie(response, "isUserLogged", "true", refreshExpiration / 1000, false);

    }

    public void loginUser(
            LoginUserDto loginUserDto,
            HttpServletResponse response
    ) {


        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginUserDto.getEmail(),
                        loginUserDto.getPassword()
                )
        );

        User user = userRepository.
                findByEmail(loginUserDto.getEmail())
                .orElseThrow(() -> new NotFoundException("User not found"));

        if (authentication.isAuthenticated()) {
            String accessToken = jwtService.generateToken(user);
            String refreshToken = jwtService.generateRefreshToken(user);

            // Revoke all tokens for this user
            revokeAllUserTokens(user);
            // Save access token to database
            saveUserToken(user, accessToken);

            // Create required cookies with appropriate settings
            CookieUtils.addCookie(response, "accessToken", accessToken, jwtExpiration / 1000, true);
            CookieUtils.addCookie(response, "refreshToken", refreshToken, refreshExpiration / 1000, true);
            CookieUtils.addCookie(response, "isUserLogged", "true", refreshExpiration / 1000, false);

        } else {
            throw new IncorrectCredentialsException("The email address or password is incorrect");
        }
    }

    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        // Get authorization token from cookie
        String refreshToken = null;
        String userEmail = null;

        if (request.getCookies() != null) {
            for (Cookie cookie : request.getCookies()) {
                if (cookie.getName().equals("refreshToken")) {
                    refreshToken = cookie.getValue();
                }
            }
        }

        if (refreshToken == null) {
            throw new NotFoundException("Token is not attached");
        }

        // Obtain email from token
        userEmail = jwtService.extractUsername(refreshToken);

        // If token contains username
        if (userEmail != null) {
            User user = userRepository.findByEmail(userEmail)
                    .orElseThrow(() -> new TokenExpiredException("Invalid refresh token"));

            // Validate refresh token
            if (jwtService.isTokenValid(refreshToken, user)) {
                String accessToken = jwtService.generateToken(user);
                revokeAllUserTokens(user);
                saveUserToken(user, accessToken);

                // Create required cookies with appropriate settings
                CookieUtils.addCookie(response, "accessToken", accessToken, jwtExpiration / 1000, true);
                return;
            }
        }

        throw new NotFoundException("Invalid refresh token");
    }


    // Save token to database
    private void saveUserToken(User user, String jwtToken) {
        var token = Token.builder()
                .user(user)
                .token(jwtToken)
                .tokenType(TokenType.BEARER)
                .expired(false)
                .revoked(false)
                .build();
        tokenRepository.save(token);
    }

    // Revoke all tokens of user
    private void revokeAllUserTokens(User user) {
        var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getUserId());
        if (validUserTokens.isEmpty())
            return;

        // Revoke all tokens
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }
}
