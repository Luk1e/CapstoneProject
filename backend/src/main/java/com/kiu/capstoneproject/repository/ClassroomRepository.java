package com.kiu.capstoneproject.repository;

import com.kiu.capstoneproject.model.entity.Classroom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClassroomRepository  extends JpaRepository<Classroom,Long> {
    @Query("SELECT c From Classroom c WHERE c.name = ?1")
    Optional<Classroom> findClassroomByName(String name);
}
