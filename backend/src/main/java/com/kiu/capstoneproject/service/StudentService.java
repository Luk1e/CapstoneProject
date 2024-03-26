package com.kiu.capstoneproject.service;

import com.kiu.capstoneproject.dto.StudentDto;
import com.kiu.capstoneproject.enums.EnrollmentStatus;
import com.kiu.capstoneproject.exception.AlreadyExistsException;
import com.kiu.capstoneproject.exception.NotFoundException;
import com.kiu.capstoneproject.model.entity.Classroom;
import com.kiu.capstoneproject.model.entity.Student;
import com.kiu.capstoneproject.model.entity.StudentClassroom;
import com.kiu.capstoneproject.model.entity.StudentClassroomId;
import com.kiu.capstoneproject.repository.ClassroomRepository;
import com.kiu.capstoneproject.repository.StudentClassroomRepository;
import com.kiu.capstoneproject.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    private final StudentRepository studentRepository;
    private final ClassroomRepository classroomRepository;
    private final StudentClassroomRepository studentClassroomRepository;

    @Autowired
    public StudentService(
            StudentRepository studentRepository,
            ClassroomRepository classroomRepository,
            StudentClassroomRepository studentClassroomRepository
    ) {
        this.studentRepository = studentRepository;
        this.classroomRepository = classroomRepository;
        this.studentClassroomRepository = studentClassroomRepository;
    }


    public String enrollStudent(
            Long classroomId,
            Long studentId
    ) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new NotFoundException("Student with ID: " + studentId + " not found"));

        Classroom classroom = classroomRepository.findById(classroomId)
                .orElseThrow(() -> new NotFoundException("Classroom with ID: " + classroomId + " not found"));

        StudentClassroomId studentClassroomId = new StudentClassroomId(studentId, classroomId);
        Optional<StudentClassroom> studentClassroomOptional = studentClassroomRepository.findById(studentClassroomId);

        if (studentClassroomOptional.isPresent()) {
            if(studentClassroomOptional.get().getStatus() == EnrollmentStatus.APPROVED){
                // throw error if student classroom object already exists with approved status
                throw new AlreadyExistsException("You are already enrolled.");
            }else{
                // throw error if student classroom object already exists with pending status
                throw new AlreadyExistsException("Request already submitted.");
            }
        }

        // create new StudentClassroom object
        StudentClassroom studentClassroom = new StudentClassroom();
        studentClassroom.setId(studentClassroomId);
        studentClassroom.setStudent(student);
        studentClassroom.setClassroom(classroom);
        studentClassroom.setStatus(EnrollmentStatus.PENDING);

        studentClassroomRepository.save(studentClassroom);

        return "Enrollment request has been successfully submitted.";
    }


    public String acceptStudent(
            Long classroomId,
            Long studentId
    ) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new NotFoundException("Student with ID: " + studentId + " not found"));

        Classroom classroom = classroomRepository.findById(classroomId)
                .orElseThrow(() -> new NotFoundException("Classroom with ID: " + classroomId + " not found"));

        StudentClassroomId studentClassroomId = new StudentClassroomId(studentId, classroomId);
        StudentClassroom studentClassroom = studentClassroomRepository.findById(studentClassroomId)
                .orElseThrow(() -> new NotFoundException("Request does not exists."));

        if (studentClassroom.getStatus() == EnrollmentStatus.APPROVED) {
            // throw error if student is already enrolled in this classroom
            throw new AlreadyExistsException("Request already approved.");
        }

        studentClassroom.setStatus(EnrollmentStatus.APPROVED);
        studentClassroomRepository.save(studentClassroom);

        return "Request has been approved.";
    }


    public String rejectStudent(
            Long classroomId,
            Long studentId
    ) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new NotFoundException("Student with ID: " + studentId + " not found"));

        Classroom classroom = classroomRepository.findById(classroomId)
                .orElseThrow(() -> new NotFoundException("Classroom with ID: " + classroomId + " not found"));

        StudentClassroomId studentClassroomId = new StudentClassroomId(studentId, classroomId);
        StudentClassroom studentClassroom = studentClassroomRepository.findById(studentClassroomId)
                .orElseThrow(() -> new NotFoundException("Request does not exists."));

        if (studentClassroom.getStatus() == EnrollmentStatus.APPROVED) {
            // throw error if student is already enrolled in this classroom
            throw new AlreadyExistsException("Request already approved.");
        }

        studentClassroomRepository.deleteById(studentClassroomId);
        return "Request has been rejected.";
    }


    public String removeStudent(
            Long classroomId,
            Long studentId
    ) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new NotFoundException("Student with ID: " + studentId + " not found"));

        Classroom classroom = classroomRepository.findById(classroomId)
                .orElseThrow(() -> new NotFoundException("Classroom with ID: " + classroomId + " not found"));

        StudentClassroomId studentClassroomId = new StudentClassroomId(studentId, classroomId);
        StudentClassroom studentClassroom = studentClassroomRepository.findById(studentClassroomId)
                .orElseThrow(() -> new NotFoundException("Request does not exists."));

        studentClassroomRepository.deleteById(studentClassroomId);
        return "Student has been removed.";
    }


    public List<StudentDto> getStudents(Long classroomId) {
        List<StudentClassroom> studentClassrooms = studentClassroomRepository.findByClassroomId(classroomId);
        if (studentClassrooms.isEmpty()) throw new NotFoundException("The classroom is empty!");

        return studentClassrooms.stream()
                .map(studentClassroom -> {
                    Student student = studentClassroom.getStudent();
                    return new StudentDto(student.getUserId(), student.getFirstName(), student.getLastName(), student.getEmail(), studentClassroom.getStatus());
                })
                .toList();
    }
}
