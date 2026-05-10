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
@Table(name = "midwife")
public class Midwife {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String firstname;
    private String lastname;
    private String phone;
    private String email;
    @Column(unique = true)
    private String regNumber;
    private String mohDivision;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
}
