package com.kiu.capstoneproject.service;

import com.kiu.capstoneproject.enums.FileType;
import com.kiu.capstoneproject.model.entity.File;
import com.kiu.capstoneproject.property.FileStorageProperty;
import com.kiu.capstoneproject.repository.FileRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class FileService {
    @Autowired
    private FileRepository fileRepository;
    private final Path docStorageLocation;

    @Autowired
    public FileService(FileStorageProperty fileStorageProperty) throws IOException {
        this.docStorageLocation = Paths.get(fileStorageProperty.getUploadDirectory()).toAbsolutePath().normalize();
        Files.createDirectories(this.docStorageLocation);
    }


    @Transactional
    public File[] addFile(MultipartFile[] multipartFiles, FileType fileType) throws NoSuchAlgorithmException, IOException {
        List<File> files = new ArrayList<>();  // Use List for dynamic addition

        for (MultipartFile multipartFile : multipartFiles) {
            files.add(create(multipartFile, fileType));
        }

        return files.toArray(new File[0]);
    }

    private File create(MultipartFile multipartFile, FileType fileType) throws NoSuchAlgorithmException, IOException {
        File file = new File();
        file.setName(multipartFile.getOriginalFilename());
        file.setMimeType(multipartFile.getContentType());
        file.setSize(multipartFile.getSize());
        file.setType(fileType);
        file.setHash();
        storeFile(multipartFile, file.getHash());

        return fileRepository.save(file);
    }

    private void storeFile(MultipartFile file, String hash) throws IOException {
        Path targetLocation = this.docStorageLocation.resolve(hash);
        Files.copy(file.getInputStream(), targetLocation);
    }
}
