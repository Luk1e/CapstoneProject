package com.kiu.capstoneproject.property;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Setter
@Getter
@Component
@ConfigurationProperties(prefix = "document")
public class FileStorageProperty {
    private String uploadDirectory;
}
