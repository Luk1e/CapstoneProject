package com.kiu.capstoneproject.model.entity;

import lombok.*;
import jakarta.persistence.*;

import java.util.Set;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Table(name = "homework")
public class Homework {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long homeworkId;
    private String title;
    private String instruction;
    private Integer grade;

    @ManyToOne(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "classroom_id",
            referencedColumnName = "classroomId"
    )
    private Classroom classroom;

    @ManyToOne(
            cascade = CascadeType.ALL
    )
    private Student student;

    @ManyToMany(
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL
    )
    @JoinTable(
            name = "file_homework_map",
            joinColumns = @JoinColumn(
                    name = "homework_id",
                    referencedColumnName = "homeworkId"
            ),
            inverseJoinColumns = @JoinColumn(
                    name = "file_id",
                    referencedColumnName = "fileId"
            )
    )

    private Set<File> files;

}