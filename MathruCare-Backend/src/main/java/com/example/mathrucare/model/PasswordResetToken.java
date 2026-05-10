package com.example.mathrucare.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "password_reset_token")
public class PasswordResetToken {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String token; // The 4-digit OTP code

    private String email; // The user's login identifier (phone for mother, regNumber for midwife, email
                          // for admin)

    private LocalDateTime expiryTime;

    private boolean used;
}
