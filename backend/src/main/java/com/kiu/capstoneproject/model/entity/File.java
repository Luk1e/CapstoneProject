package com.kiu.capstoneproject.model.entity;

import com.kiu.capstoneproject.enums.FileType;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Table(name = "file")
public class File {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long fileId;

    @Lob
    @Column(nullable = false)
    private byte[] data;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private FileType type;
}
