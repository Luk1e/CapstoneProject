package com.kiu.capstoneproject.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfiguration implements WebMvcConfigurer {


    @Override
    public void addCorsMappings(CorsRegistry registry) {

        registry.addMapping("/**")
                .allowedMethods("*")
                .allowedHeaders("*")
                .allowedOrigins(["https://bestproject.buzz","https://cron-job.org"])
//                .allowedOrigins("http://localhost:5173")
                .allowCredentials(true)
                .maxAge(-1);
    }
}