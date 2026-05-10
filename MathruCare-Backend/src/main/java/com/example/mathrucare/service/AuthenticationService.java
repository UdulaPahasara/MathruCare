package com.example.mathrucare.service;

import com.example.mathrucare.dto.AuthenticationRequest;
import com.example.mathrucare.dto.AuthenticationResponse;
import com.example.mathrucare.dto.RegisterRequest;
import com.example.mathrucare.model.Midwife;
import com.example.mathrucare.model.Mother;
import com.example.mathrucare.model.Role;
import com.example.mathrucare.model.User;
import com.example.mathrucare.repository.MidwifeRepository;
import com.example.mathrucare.repository.MotherRepository;
import com.example.mathrucare.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

        private final UserRepository repository;
        private final MotherRepository motherRepository;
        private final MidwifeRepository midwifeRepository;
        private final PasswordEncoder passwordEncoder;
        private final JwtService jwtService;
        private final AuthenticationManager authenticationManager;

        @Transactional
        public AuthenticationResponse register(RegisterRequest request) {
                // Check for duplicate email across Mother and Midwife tables
                if (request.getEmail() != null) {
                        boolean emailTaken = motherRepository.findByEmail(request.getEmail()).isPresent()
                                        || midwifeRepository.findByEmail(request.getEmail()).isPresent();
                        if (emailTaken) {
                                throw new RuntimeException("An account with this email address already exists.");
                        }
                }

                // Check for duplicate phone number across both Mother and Midwife tables
                if (request.getPhone() != null) {
                        boolean phoneTaken = motherRepository.findByPhone(request.getPhone()).isPresent()
                                        || midwifeRepository.findByPhone(request.getPhone()).isPresent();
                        if (phoneTaken) {
                                throw new RuntimeException("An account with this phone number already exists.");
                        }
                }

                // For MIDWIFE: check regNumber is not already registered
                if (request.getRole() == Role.MIDWIFE && request.getRegNumber() != null) {
                        boolean regTaken = midwifeRepository.findByRegNumber(request.getRegNumber()).isPresent();
                        if (regTaken) {
                                throw new RuntimeException("An account with this registration number already exists.");
                        }
                }

                // For MOTHER: use phone as the login identifier
                // For MIDWIFE: use regNumber as the login identifier
                // For ADMIN: use email as the login identifier
                String identifier;
                if (request.getRole() == Role.MOTHER) {
                        identifier = request.getPhone();
                } else if (request.getRole() == Role.MIDWIFE) {
                        identifier = request.getRegNumber();
                } else {
                        identifier = request.getEmail();
                }

                var user = User.builder()
                                .email(identifier)
                                .password(passwordEncoder.encode(request.getPassword()))
                                .role(request.getRole())
                                .build();
                var savedUser = repository.save(user);

                if (request.getRole() == Role.MOTHER) {
                        var mother = Mother.builder()
                                        .firstname(request.getFirstname())
                                        .lastname(request.getLastname())
                                        .phone(request.getPhone())
                                        .email(request.getEmail())
                                        .mohDivision(request.getMohDivision())
                                        .lmpDate(request.getLmpDate())
                                        .height(request.getHeight())
                                        .weight(request.getWeight())
                                        .hasDiabetes(request.getHasDiabetes())
                                        .user(savedUser)
                                        .build();
                        motherRepository.save(mother);
                } else if (request.getRole() == Role.MIDWIFE) {
                        var midwife = Midwife.builder()
                                        .firstname(request.getFirstname())
                                        .lastname(request.getLastname())
                                        .phone(request.getPhone())
                                        .email(request.getEmail())
                                        .regNumber(request.getRegNumber())
                                        .mohDivision(request.getMohDivision())
                                        .user(savedUser)
                                        .build();
                        midwifeRepository.save(midwife);
                }

                var jwtToken = jwtService.generateToken(savedUser);
                return AuthenticationResponse.builder()
                                .token(jwtToken)
                                .build();
        }

        public AuthenticationResponse authenticate(AuthenticationRequest request) {
                // Hardcoded Admin Check
                if ("admin@mathrucare.com".equals(request.getEmail()) && "Admin@123".equals(request.getPassword())) {
                        var adminUser = User.builder()
                                        .email("admin@mathrucare.com")
                                        .role(Role.ADMIN)
                                        .build();
                        var jwtToken = jwtService.generateToken(adminUser);
                        return AuthenticationResponse.builder()
                                        .token(jwtToken)
                                        .build();
                }

                authenticationManager.authenticate(
                                new UsernamePasswordAuthenticationToken(
                                                request.getEmail(),
                                                request.getPassword()));

                var user = repository.findByEmail(request.getEmail())
                                .orElseThrow();

                var jwtToken = jwtService.generateToken(user);
                return AuthenticationResponse.builder()
                                .token(jwtToken)
                                .build();
        }
}
