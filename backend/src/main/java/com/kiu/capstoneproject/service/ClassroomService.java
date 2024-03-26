package com.kiu.capstoneproject.service;

import com.kiu.capstoneproject.dto.CreateClassroomDto;
import com.kiu.capstoneproject.exception.AlreadyExistsException;
import com.kiu.capstoneproject.exception.NotFoundException;
import com.kiu.capstoneproject.model.entity.*;
import com.kiu.capstoneproject.repository.ClassroomRepository;
import com.kiu.capstoneproject.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Optional;

@Service
public class ClassroomService {
    private final ClassroomRepository classroomRepository;
    private final TeacherRepository teacherRepository;

    @Autowired
    public ClassroomService(
            ClassroomRepository classroomRepository,
            TeacherRepository teacherRepository
    ) {
        this.classroomRepository = classroomRepository;
        this.teacherRepository = teacherRepository;
    }


    public String createClassroom(CreateClassroomDto createClassroomDto) {
        Teacher teacher = teacherRepository.findById(createClassroomDto.getTeacherId())
                .orElseThrow(() -> new NotFoundException("Teacher with ID " + createClassroomDto.getTeacherId() + " not found"));

        Optional<Classroom> classroomOptional = classroomRepository.
                findClassroomByName(createClassroomDto.getName());

        if (classroomOptional.isEmpty()) {
            // create new classroom if the name has is not taken
            Classroom classroom = new Classroom();
            classroom.setTeacher(teacher);
            classroom.setName(createClassroomDto.getName());

            classroomRepository.save(classroom);
        } else {
            // throw error if the classroom name has already been taken
            throw new AlreadyExistsException("The name has already been taken.");
        }
        return "Classroom created successfully.";
    }


    public void deleteClassroom(Long classroomId) {
        Optional<Classroom> classroomOptional = classroomRepository.
                findById(classroomId);

        if (classroomOptional.isEmpty()) {
            // throw error if the classroom does not exist
            throw new NotFoundException("Classroom with ID: " + classroomId + " not found.");
        } else {
            // delete classroom
            classroomRepository.deleteById(classroomId);
        }
    }
}
