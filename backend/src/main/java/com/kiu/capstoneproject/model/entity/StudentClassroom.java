package com.kiu.capstoneproject.model.entity;

import com.kiu.capstoneproject.enums.EnrollmentStatus;
import lombok.*;
import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Table(name = "student_classroom")
public class StudentClassroom implements Serializable {
    @EmbeddedId
    private StudentClassroomId id;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("userId")
    @JoinColumn(name = "user_id")
    private Student student;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("classroomId")
    @JoinColumn(name = "classroom_id")
    private Classroom classroom;

    @Enumerated(EnumType.STRING)
    private EnrollmentStatus status;

}
