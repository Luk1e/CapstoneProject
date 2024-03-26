package com.kiu.capstoneproject.model.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "game")
public class Game {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long gameId;

    @Column(
            unique = true,
            nullable = false
    )
    private String name;
}