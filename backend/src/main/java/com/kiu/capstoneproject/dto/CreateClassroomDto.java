package com.kiu.capstoneproject.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CreateClassroomDto {

    @NotNull(message = "teacher id is mandatory.")
    private Long teacherId;

    @NotBlank(message = "classroom name is mandatory.")
    private String name;
}
