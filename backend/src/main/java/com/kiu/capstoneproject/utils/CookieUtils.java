package com.kiu.capstoneproject.utils;

import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;

import java.util.Arrays;
import java.util.List;

public class CookieUtils {
    public static void addCookie(
            HttpServletResponse response,
            String cookieName,
            String value,
            long expiration,
            boolean httpOnly
    ) {
        // Create required cookies with appropriate settings
        ResponseCookie cookie = ResponseCookie.from(cookieName, value)
                .httpOnly(httpOnly)
                .secure(false)
                .maxAge(expiration)
                .path("/")
                .build();

        // Attach cookie to the response header
         response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
    }

}
