package com.kiu.capstoneproject.model.entity;

import java.io.Serializable;

import jakarta.persistence.*;
import lombok.*;

@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserGameId implements Serializable {
    private Long userId;
    private Long gameId;

}