package com.example.mathrucare.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "mother")
public class Mother {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String firstname;
    private String lastname;
    @Column(unique = true)
    private String phone;
    private String email;
    private String mohDivision;
    private String lmpDate;
    private Double height;
    private Double weight;
    private Boolean hasDiabetes;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
}
