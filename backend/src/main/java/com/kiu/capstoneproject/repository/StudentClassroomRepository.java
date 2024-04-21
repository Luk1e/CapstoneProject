package com.kiu.capstoneproject.repository;

import com.kiu.capstoneproject.model.entity.Classroom;
import com.kiu.capstoneproject.model.entity.StudentClassroom;

import com.kiu.capstoneproject.model.entity.StudentClassroomId;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StudentClassroomRepository extends JpaRepository<StudentClassroom, StudentClassroomId> {
    @Query("SELECT sc FROM StudentClassroom sc WHERE sc.id.classroomId = ?1")
    List<StudentClassroom> findByClassroomId(Long classroomId);

    @Query("SELECT sc FROM StudentClassroom sc WHERE sc.id.userId = ?1")
    List<StudentClassroom> findByStudentId(Long studentId);
}
