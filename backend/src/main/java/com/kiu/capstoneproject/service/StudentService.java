package com.kiu.capstoneproject.service;

import com.kiu.capstoneproject.dto.classroom.ClassroomNameDTO;
import com.kiu.capstoneproject.dto.student.StudentDto;
import com.kiu.capstoneproject.enums.EnrollmentStatus;
import com.kiu.capstoneproject.exception.AlreadyExistsException;
import com.kiu.capstoneproject.exception.NotFoundException;
import com.kiu.capstoneproject.model.entity.*;
import com.kiu.capstoneproject.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StudentService {
    private final UserRepository userRepository;
    private final TeacherRepository teacherRepository;
    private final StudentRepository studentRepository;
    private final ClassroomRepository classroomRepository;
    private final StudentClassroomRepository studentClassroomRepository;
    private final NotificationService notificationService;

    public void enrollStudent(ClassroomNameDTO classroomNameDTO
    ) {
        // get user from security context
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(((UserDetails) authentication.getPrincipal()).getUsername()).orElseThrow(() -> new NotFoundException("User not found"));

        Student student = studentRepository.findById(user.getUserId())
                .orElseThrow(() -> new NotFoundException("Student with ID " + user.getUserId() + " not found"));

        Classroom classroom = classroomRepository.findClassroomByName(classroomNameDTO.getName())
                .orElseThrow(() -> new NotFoundException("Classroom with name '" + classroomNameDTO.getName() + "' not found"));

        StudentClassroomId studentClassroomId = new StudentClassroomId(student.getUserId(), classroom.getClassroomId());
        Optional<StudentClassroom> studentClassroomOptional = studentClassroomRepository.findById(studentClassroomId);


        if (studentClassroomOptional.isPresent()) {
            if (studentClassroomOptional.get().getStatus() == EnrollmentStatus.APPROVED) {
                // throw error if student classroom object already exists with approved status
                throw new AlreadyExistsException("You are already enrolled");
            } else {
                // throw error if student classroom object already exists with pending status
                throw new AlreadyExistsException("Request already submitted");
            }
        }

        // create new StudentClassroom object
        StudentClassroom studentClassroom = new StudentClassroom();
        studentClassroom.setId(studentClassroomId);
        studentClassroom.setStudent(student);
        studentClassroom.setClassroom(classroom);
        studentClassroom.setStatus(EnrollmentStatus.PENDING);

        studentClassroomRepository.save(studentClassroom);

        // add notification for teacher
        notificationService.addNotifications(classroom.getTeacher(),
                "<b>"
                        + student.getFirstName().substring(0,1).toUpperCase() + student.getFirstName().substring(1).toLowerCase()
                        + " "
                        + student.getLastName().substring(0,1).toUpperCase() + student.getLastName().substring(1).toLowerCase()
                        + "</b> wants to enroll in classroom <b>"
                        + classroom.getName() + "</b>",
                LocalDateTime.now());
    }


    public void acceptStudent(
            Long classroomId,
            Long studentId
    ) {
        // get user(should be teacher) from security context
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(((UserDetails) authentication.getPrincipal()).getUsername()).
                orElseThrow(() -> new NotFoundException("User not found"));

        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new NotFoundException("Student with ID '" + studentId + "' not found"));

        Classroom classroom = classroomRepository.findById(classroomId)
                .orElseThrow(() -> new NotFoundException("Classroom with ID '" + classroomId + "' not found"));

        // if the classroom is associated with this teacher
        if (Objects.equals(classroom.getTeacher().getUserId(), user.getUserId())) {

            StudentClassroomId studentClassroomId = new StudentClassroomId(studentId, classroomId);
            StudentClassroom studentClassroom = studentClassroomRepository.findById(studentClassroomId)
                    .orElseThrow(() -> new NotFoundException("Request does not exists"));

            if (studentClassroom.getStatus() == EnrollmentStatus.APPROVED) {
                // throw error if student is already enrolled in this classroom
                throw new AlreadyExistsException("Request already approved");
            }

            studentClassroom.setStatus(EnrollmentStatus.APPROVED);
            studentClassroomRepository.save(studentClassroom);

            // add notification for student
            notificationService.addNotifications(student,
                    "Your request to join the classroom <b>"
                            + classroom.getName()
                            + "</b> has been accepted",
                    LocalDateTime.now()
            );
        } else {
            // throw error if the classroom is not associated with this teacher
            throw new NotFoundException("You are not associated with this classroom");
        }
    }


    public void rejectStudent(
            Long classroomId,
            Long studentId
    ) {
        // get user(should be teacher) from security context
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(((UserDetails) authentication.getPrincipal()).getUsername()).
                orElseThrow(() -> new NotFoundException("User not found"));

        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new NotFoundException("Student with ID '" + studentId + "' not found"));

        Classroom classroom = classroomRepository.findById(classroomId)
                .orElseThrow(() -> new NotFoundException("Classroom with ID '" + classroomId + "' not found"));

        // if the classroom is associated with this teacher
        if (Objects.equals(classroom.getTeacher().getUserId(), user.getUserId())) {

            StudentClassroomId studentClassroomId = new StudentClassroomId(studentId, classroomId);
            StudentClassroom studentClassroom = studentClassroomRepository.findById(studentClassroomId)
                    .orElseThrow(() -> new NotFoundException("Request does not exists"));

            if (studentClassroom.getStatus() == EnrollmentStatus.APPROVED) {
                // throw error if student is already enrolled in this classroom
                throw new AlreadyExistsException("Request already approved");
            }

            studentClassroomRepository.deleteById(studentClassroomId);

            // add notification for student
            notificationService.addNotifications(student,
                    "Your request to join the classroom <b>"
                            + classroom.getName()
                            + "</b> has been rejected",
                    LocalDateTime.now()
            );
        } else {
            // throw error if the classroom is not associated with this teacher
            throw new NotFoundException("You are not associated with this classroom");
        }
    }


    public void removeStudent(
            Long classroomId,
            Long studentId
    ) {
        // get user(should be teacher) from security context
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(((UserDetails) authentication.getPrincipal()).getUsername()).
                orElseThrow(() -> new NotFoundException("User not found"));

        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new NotFoundException("Student with ID: " + studentId + " not found"));

        Classroom classroom = classroomRepository.findById(classroomId)
                .orElseThrow(() -> new NotFoundException("Classroom with ID: " + classroomId + " not found"));

        // if the classroom is associated with this teacher
        if (Objects.equals(classroom.getTeacher().getUserId(), user.getUserId())) {
            StudentClassroomId studentClassroomId = new StudentClassroomId(studentId, classroomId);
            StudentClassroom studentClassroom = studentClassroomRepository.findById(studentClassroomId)
                    .orElseThrow(() -> new NotFoundException("Request does not exists"));

            studentClassroomRepository.deleteById(studentClassroomId);

            // add notification for student
            notificationService.addNotifications(student,
                    "You have been removed from classroom <b>"
                            + classroom.getName()
                            + "</b> by <b>"
                            + user.getFirstName().substring(0,1).toUpperCase() + user.getUsername().substring(1).toLowerCase()
                            + user.getLastName().substring(0,1).toUpperCase() + user.getLastName().substring(1).toLowerCase()
                            + "</b>"
                    ,

                    LocalDateTime.now()
            );
        } else {
            // throw error if the classroom is not associated with this teacher
            throw new NotFoundException("You are not associated with this classroom");
        }
    }


    public List<StudentDto> getStudents(Long classroomId) {
        // get user(should be teacher) from security context
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(((UserDetails) authentication.getPrincipal()).getUsername()).
                orElseThrow(() -> new NotFoundException("User not found"));

        Classroom classroom = classroomRepository.findById(classroomId).
                orElseThrow(() -> new NotFoundException("Classroom with ID '" + classroomId + "' not found"));

        // if the classroom is associated with this teacher
        if (Objects.equals(classroom.getTeacher().getUserId(), user.getUserId())) {
            List<StudentClassroom> studentClassrooms = studentClassroomRepository.findByClassroomId(classroomId);
            if (studentClassrooms.isEmpty()) throw new NotFoundException("The classroom is empty");

            return studentClassrooms.stream()
                    .map(studentClassroom -> {
                        Student student = studentClassroom.getStudent();
                        return new StudentDto(student.getUserId(), student.getFirstName(), student.getLastName(), student.getEmail(), studentClassroom.getStatus());
                    })
                    .toList();
        } else {
            // throw error if the classroom is not associated with this teacher
            throw new NotFoundException("You are not associated with this classroom");
        }

    }
}
