package com.kiu.capstoneproject.service;

import com.kiu.capstoneproject.dto.homework.HomeworkDescriptionDTO;
import com.kiu.capstoneproject.dto.homework.HomeworkRequestDTO;
import com.kiu.capstoneproject.dto.homework.StudentHomeworkDTO;
import com.kiu.capstoneproject.dto.homework.StudentHomeworkListDTO;
import com.kiu.capstoneproject.enums.EnrollmentStatus;
import com.kiu.capstoneproject.enums.FileType;
import com.kiu.capstoneproject.enums.HomeworkStatus;
import com.kiu.capstoneproject.exception.NotFoundException;
import com.kiu.capstoneproject.model.entity.*;
import com.kiu.capstoneproject.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class HomeworkService {
    private final HomeworkRepository homeworkRepository;
    private final UserRepository userRepository;
    private final FileService fileService;
    private final ClassroomRepository classroomRepository;
    private final StudentClassroomRepository studentClassroomRepository;
    private final StudentHomeworkRepository studentHomeworkRepository;

    public Long createHomework(Long classroomId, HomeworkRequestDTO homeworkRequestDTO) throws NoSuchAlgorithmException, IOException {
        // get user from security context
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(((UserDetails) authentication.getPrincipal()).getUsername())
                .orElseThrow(() -> new NotFoundException("User not found"));

        Classroom classroom = classroomRepository.findById(classroomId)
                .orElseThrow(() -> new NotFoundException("Classroom with ID '" + classroomId + "' not found"));

        File file = null;
        if (homeworkRequestDTO.getFile() != null) {
            // save and return file
            MultipartFile[] files = new MultipartFile[]{homeworkRequestDTO.getFile()};
            // the method works for files array, so we need only homework file
            file = fileService.addFile(files, FileType.HOMEWORK)[0];
        }

        // if the classroom is associated with this teacher
        if (Objects.equals(classroom.getTeacher().getUserId(), user.getUserId())) {
            // create new homework
            Homework homework = Homework
                    .builder()
                    .title(homeworkRequestDTO.getTitle())
                    .instruction(homeworkRequestDTO.getInstruction())
                    .totalGrade(homeworkRequestDTO.getTotalGrade())
                    .submittedNumber(0)
                    .classroom(classroom)
                    .homeworkFile(file)
                    .build();
            homeworkRepository.save(homework);

            List<StudentClassroom> studentClassrooms = studentClassroomRepository.findByClassroomId(classroomId);

            // create studentHomeworks for each student of the classroom (if enrollment status is approved)
            for (StudentClassroom studentClassroom : studentClassrooms) {
                // check enrollment status
                if (studentClassroom.getStatus() == EnrollmentStatus.APPROVED) {
                    StudentHomeworkId studentHomeworkId = new StudentHomeworkId(user.getUserId(), classroomId);

                    StudentHomework studentHomework = StudentHomework
                            .builder()
                            .id(studentHomeworkId)
                            .grade(0)
                            .student(studentClassroom.getStudent())
                            .homework(homework)
                            .status(HomeworkStatus.ASSIGNED)
                            .solutionFile(null)
                            .build();

                    studentHomeworkRepository.save(studentHomework);
                }
            }

            return homework.getHomeworkId();
        } else {
            // throw error if the classroom is not associated with this teacher
            throw new NotFoundException("You are not associated with this classroom");
        }
    }

    public List<HomeworkDescriptionDTO> getHomeworks(Long classroomId) {
        // get user from security context
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(((UserDetails) authentication.getPrincipal()).getUsername())
                .orElseThrow(() -> new NotFoundException("User not found"));

        Classroom classroom = classroomRepository.findById(classroomId)
                .orElseThrow(() -> new NotFoundException("Classroom with ID '" + classroomId + "' not found"));

        // if the student is enrolled in this classroom
        if (studentClassroomRepository.findById(new StudentClassroomId(user.getUserId(), classroomId)).isPresent()) {

            return homeworkRepository.findAllByClassroom_ClassroomId(classroomId)
                    .stream()
                    .filter(homework -> studentHomeworkRepository
                            .findById(new StudentHomeworkId(user.getUserId(), homework.getHomeworkId()))
                            .isPresent())
                    .map(homework ->
                            HomeworkDescriptionDTO.builder()
                                    .homeworkId(homework.getHomeworkId())
                                    .title(homework.getTitle())
                                    .grade(studentHomeworkRepository
                                            .findById(new StudentHomeworkId(user.getUserId(), homework.getHomeworkId()))
                                            .get()
                                            .getGrade())
                                    .totalGrade(homework.getTotalGrade())
                                    .status(studentHomeworkRepository
                                            .findById(new StudentHomeworkId(user.getUserId(), homework.getHomeworkId()))
                                            .get()
                                            .getStatus())
                                    .build())
                    .collect(Collectors.toList());

        } else if (Objects.equals(classroom.getTeacher().getUserId(), user.getUserId())) {
            // if the classroom is associated with this teacher
            return homeworkRepository.findAllByClassroom_ClassroomId(classroomId)
                    .stream()
                    .map(homework -> HomeworkDescriptionDTO
                            .builder()
                            .homeworkId(homework.getHomeworkId())
                            .title(homework.getTitle())
                            .submittedNumber(homework.getSubmittedNumber())
                            .studentNumber(studentHomeworkRepository.findByHomeworkId(homework.getHomeworkId()).size())
                            .build())
                    .collect(Collectors.toList());
        } else {
            // throw error if the user is not associated with this classroom
            throw new NotFoundException("You are not associated with this classroom");
        }

    }


    public StudentHomeworkListDTO getStudentHomeworks(Long classroomId, Long homeworkId) {
        // get user from security context
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(((UserDetails) authentication.getPrincipal()).getUsername())
                .orElseThrow(() -> new NotFoundException("User not found"));

        Classroom classroom = classroomRepository.findById(classroomId)
                .orElseThrow(() -> new NotFoundException("Classroom with ID '" + classroomId + "' not found"));

        // if the classroom is associated with this teacher
        if (Objects.equals(classroom.getTeacher().getUserId(), user.getUserId())) {

            Homework homework = homeworkRepository.getReferenceById(homeworkId);
            List<StudentHomeworkDTO> studentHomeworkDTOS = studentHomeworkRepository.findByHomeworkId(homeworkId).stream()
                    .map(studentHomework -> StudentHomeworkDTO
                            .builder()
                            .firstName(studentHomework.getStudent().getFirstName())
                            .lastName(studentHomework.getStudent().getLastName())
                            .grade(studentHomework.getGrade())
                            .status(studentHomework.getStatus())
                            .build()
                    )
                    .toList();


            return StudentHomeworkListDTO
                    .builder()
                    .title(homework.getTitle())
                    .totalGrade(homework.getTotalGrade())
                    .studentHomeworkDTOS(studentHomeworkDTOS)
                    .build();
        } else {
            // throw error if the classroom is not associated with this teacher
            throw new NotFoundException("You are not associated with this classroom");
        }
    }

    public void deleteHomework(Long classroomId, Long homeworkId) {
        // get user from security context
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(((UserDetails) authentication.getPrincipal()).getUsername())
                .orElseThrow(() -> new NotFoundException("User not found"));

        Classroom classroom = classroomRepository.findById(classroomId)
                .orElseThrow(() -> new NotFoundException("Classroom with ID '" + classroomId + "' not found"));

        // if the classroom is associated with this teacher
        if (Objects.equals(classroom.getTeacher().getUserId(), user.getUserId())) {
            homeworkRepository.deleteById(homeworkId);
        } else {
            // throw error if the classroom is not associated with this teacher
            throw new NotFoundException("You are not associated with this classroom");
        }
    }

}
