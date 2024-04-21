package com.kiu.capstoneproject.service;

import com.kiu.capstoneproject.dto.StudentDto;
import com.kiu.capstoneproject.dto.classroom.ClassroomDTO;
import com.kiu.capstoneproject.dto.classroom.ClassroomNameDTO;
import com.kiu.capstoneproject.enums.EnrollmentStatus;
import com.kiu.capstoneproject.enums.Role;
import com.kiu.capstoneproject.exception.AlreadyExistsException;
import com.kiu.capstoneproject.exception.NotFoundException;
import com.kiu.capstoneproject.model.entity.*;
import com.kiu.capstoneproject.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ClassroomService {
    private final UserRepository userRepository;
    private final TeacherRepository teacherRepository;
    private final StudentRepository studentRepository;
    private final ClassroomRepository classroomRepository;
    private final StudentClassroomRepository studentClassroomRepository;

    public List<ClassroomDTO> getClassrooms() {
        // get user from security context
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(((UserDetails) authentication.getPrincipal()).getUsername()).orElseThrow(() -> new NotFoundException("User not found"));

        List<Classroom> classrooms = null;

        if (user.getRole() == Role.TEACHER) {
            // validate teacher
            Teacher teacher = teacherRepository.findById(user.getUserId())
                    .orElseThrow(() -> new NotFoundException("Teacher with ID '" + user.getUserId() + "' not found"));

            // find classrooms associated with this teacher
            classrooms = classroomRepository.findByTeacher(teacher);

            // throw error if there is no classroom associated with this teacher
            if (classrooms.isEmpty()) throw new NotFoundException("You haven't created any classrooms yet");
        } else {
            // validate student
            Student student = studentRepository.findById(user.getUserId())
                    .orElseThrow(() -> new NotFoundException("Student with ID '" + user.getUserId() + "' not found"));

            // find classrooms in which this student is enrolled
            List<StudentClassroom> studentClassrooms = studentClassroomRepository.findByStudentId(student.getUserId());

            // find classrooms which have enrollment status approved
            classrooms = studentClassrooms.stream()
                    .filter(sc -> sc.getStatus() == EnrollmentStatus.APPROVED)
                    .map(StudentClassroom::getClassroom)
                    .collect(Collectors.toList());

            // throw error if there is no classroom associated with this teacher
            if (classrooms.isEmpty()) throw new NotFoundException("The haven't joined any classroom yet");
        }

        // return list of classroomDTOs
        return classrooms.stream()
                .map(classroom -> {
                    return new ClassroomDTO(classroom.getClassroomId(), classroom.getName());
                })
                .toList();

    }

    public Long createClassroom(ClassroomNameDTO classroomNameDTO) {
        // get user from security context
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(((UserDetails) authentication.getPrincipal()).getUsername()).orElseThrow(() -> new NotFoundException("User not found"));

        // validate if user is teacher
        Teacher teacher = teacherRepository.findById(user.getUserId())
                .orElseThrow(() -> new NotFoundException("Teacher with ID '" + user.getUserId() + "' not found"));

        Optional<Classroom> classroomOptional = classroomRepository.
                findClassroomByName(classroomNameDTO.getName());

        if (classroomOptional.isEmpty()) {
            // create new classroom if the name has is not taken
            Classroom classroom = new Classroom();
            classroom.setTeacher(teacher);
            classroom.setName(classroomNameDTO.getName());

            classroomRepository.save(classroom);
            return classroom.getClassroomId();
        } else {
            // throw error if the classroom name has already been taken
            throw new AlreadyExistsException("The name has already been taken.");
        }
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
