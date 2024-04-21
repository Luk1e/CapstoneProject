package com.kiu.capstoneproject.controller;

import com.kiu.capstoneproject.dto.classroom.ClassroomDTO;
import com.kiu.capstoneproject.dto.classroom.ClassroomNameDTO;
import com.kiu.capstoneproject.dto.StudentDto;
import com.kiu.capstoneproject.service.ClassroomService;
import com.kiu.capstoneproject.service.StudentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "api/v1/classroom")
public class ClassroomController {
    private final ClassroomService classroomService;
    private final StudentService studentService;


    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ClassroomDTO> getClassrooms() {
        return classroomService.getClassrooms();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Long> createClassroom(@Valid @RequestBody ClassroomNameDTO classroomNameDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(classroomService.createClassroom(classroomNameDTO));
    }


    @DeleteMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteClassroom(@PathVariable("id") Long classroomId) {
        classroomService.deleteClassroom(classroomId);
    }


    @PostMapping(path = "/enroll")
    @ResponseStatus(HttpStatus.CREATED)
    public void enrollStudent(@Valid @RequestBody ClassroomNameDTO classroomNameDTO
    ) {
        studentService.enrollStudent(classroomNameDTO);
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
