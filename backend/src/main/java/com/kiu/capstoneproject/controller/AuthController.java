package com.kiu.capstoneproject.controller;

import com.kiu.capstoneproject.dto.auth.AuthUserDto;
import com.kiu.capstoneproject.dto.auth.LoginUserDto;
import com.kiu.capstoneproject.dto.auth.RegisterUserDto;
import com.kiu.capstoneproject.service.AuthService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "api/v1/auth")
public class AuthController {
    private final AuthService authService;



    @GetMapping(path = "/authenticate")
    @ResponseStatus(HttpStatus.OK)
    public AuthUserDto authenticateUser(
            HttpServletResponse response
    ) {
        return authService.authenticateUser(response);
    }

    @PostMapping(path = "/register")
    @ResponseStatus(HttpStatus.CREATED)
    public void registerUser(
            @Valid @RequestBody RegisterUserDto registerUserDto,
            @RequestParam(required = true) Integer status,
            HttpServletResponse response
    ) {
         authService.registerUser(registerUserDto, status, response);
    }

    @PostMapping(path = "/login")
    @ResponseStatus(HttpStatus.OK)
    public void loginUser(
            @Valid @RequestBody LoginUserDto loginUserDto,
            HttpServletResponse response
    ) {
         authService.loginUser(loginUserDto, response);
    }

    @PostMapping("/refresh")
    @ResponseStatus(HttpStatus.OK)
    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
         authService.refreshToken(request, response);
    }
}
