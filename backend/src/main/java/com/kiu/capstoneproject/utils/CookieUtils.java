package com.kiu.capstoneproject.utils;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;


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
                .secure(true)
                .domain(".bestproject.buzz")
                .path("/")
                .maxAge(expiration)
                .sameSite("Strict")
                .build();

        // Attach cookie to the response header
        response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());

    }

}