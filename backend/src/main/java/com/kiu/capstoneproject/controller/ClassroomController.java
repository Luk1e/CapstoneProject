package com.kiu.capstoneproject.controller;

import com.kiu.capstoneproject.dto.CreateClassroomDto;
import com.kiu.capstoneproject.dto.StudentDto;
import com.kiu.capstoneproject.model.entity.StudentClassroom;
import com.kiu.capstoneproject.service.ClassroomService;
import com.kiu.capstoneproject.service.StudentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/classroom")
public class ClassroomController {
    private final ClassroomService classroomService;
    private final StudentService studentService;


    @Autowired
    public ClassroomController(
            ClassroomService classroomService,
            StudentService studentService
    ) {
        this.classroomService = classroomService;
        this.studentService = studentService;
    }


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public String createClassroom(@Valid @RequestBody CreateClassroomDto createClassroomDto) {
        return classroomService.createClassroom(createClassroomDto);
    }


    @DeleteMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteClassroom(@PathVariable("id") Long classroomId) {
        classroomService.deleteClassroom(classroomId);
    }


    @PostMapping(path = "/{id}/enroll")
    @ResponseStatus(HttpStatus.CREATED)
    public String enrollStudent(
            @PathVariable("id") Long classroomId,
            @RequestParam(required = true) Long studentId
    ) {
        return studentService.enrollStudent(classroomId, studentId);
    }


    @PatchMapping(path = "/{id}/accept")
    @ResponseStatus(HttpStatus.OK)
    public String acceptStudent(
            @PathVariable("id") Long classroomId,
            @RequestParam(required = true) Long studentId
    ) {
        return studentService.acceptStudent(classroomId, studentId);
    }


    @PatchMapping(path = "/{id}/reject")
    @ResponseStatus(HttpStatus.OK)
    public String rejectStudent(
            @PathVariable("id") Long classroomId,
            @RequestParam(required = true) Long studentId
    ) {
        return studentService.rejectStudent(classroomId, studentId);
    }


    @DeleteMapping(path = "/{id}/remove")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public String removeStudent(
            @PathVariable("id") Long classroomId,
            @RequestParam(required = true) Long studentId
    ) {
        return studentService.removeStudent(classroomId, studentId);
    }


    @GetMapping(path = "/{id}")
    public List<StudentDto> getStudents(@PathVariable("id") Long classroomId) {
        return studentService.getStudents(classroomId);
    }


}
