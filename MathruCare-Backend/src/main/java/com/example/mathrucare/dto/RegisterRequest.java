package com.example.mathrucare.dto;

import com.example.mathrucare.model.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String firstname;
    private String lastname;
    private String email;
    private String phone;
    private String password;
    private Role role;
    private String mohDivision;
    private String lmpDate;
    private String regNumber;
    private Double height;
    private Double weight;
    private Boolean hasDiabetes;
}
