package com.kiu.capstoneproject.controller;

import com.kiu.capstoneproject.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "api/v1/user")
public class UserController {
    private final UserService userService;

}
