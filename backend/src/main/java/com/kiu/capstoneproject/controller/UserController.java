package com.kiu.capstoneproject.controller;

import com.kiu.capstoneproject.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "api/v1/user")
public class UserController {
    private final UserService userService;


//    @PostMapping("/login")
//    public JwtResponseDTO AuthenticateAndGetToken(@RequestBody AuthRequestDTO authRequestDTO, HttpServletResponse response){
//        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequestDTO.getUsername(), authRequestDTO.getPassword()));
//        if(authentication.isAuthenticated()){
//            RefreshToken refreshToken = refreshTokenService.createRefreshToken(authRequestDTO.getUsername());
//            String accessToken = jwtService.GenerateToken(authRequestDTO.getUsername());
//            // set accessToken to cookie header
//            ResponseCookie cookie = ResponseCookie.from("accessToken", accessToken)
//                    .httpOnly(true)
//                    .secure(false)
//                    .path("/")
//                    .maxAge(cookieExpiry)
//                    .build();
//            response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
//            return JwtResponseDTO.builder()
//                    .accessToken(accessToken)
//                    .token(refreshToken.getToken()).build();
//
//        } else {
//            throw new UsernameNotFoundException("invalid user request..!!");
//        }
}
