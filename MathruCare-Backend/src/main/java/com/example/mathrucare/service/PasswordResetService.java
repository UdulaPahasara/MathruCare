package com.example.mathrucare.service;

import com.example.mathrucare.model.PasswordResetToken;
import com.example.mathrucare.model.Role;
import com.example.mathrucare.model.User;
import com.example.mathrucare.repository.MidwifeRepository;
import com.example.mathrucare.repository.MotherRepository;
import com.example.mathrucare.repository.PasswordResetTokenRepository;
import com.example.mathrucare.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.MailAuthenticationException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class PasswordResetService {

    private final PasswordResetTokenRepository tokenRepository;
    private final UserRepository userRepository;
    private final MotherRepository motherRepository;
    private final MidwifeRepository midwifeRepository;
    private final JavaMailSender mailSender;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public void sendResetOtp(String email) {
        if (email != null)
            email = email.trim();
        String identifier = null;

        // Try to find if this email belongs to a Mother
        identifier = motherRepository.findByEmail(email)
                .map(m -> m.getPhone())
                .orElse(null);

        // If not a mother, try to find if it belongs to a Midwife
        if (identifier == null) {
            identifier = midwifeRepository.findByEmail(email)
                    .map(m -> m.getRegNumber())
                    .orElse(null);
        }

        // If not found in either, it might be an Admin (where email is the identifier)
        if (identifier == null) {
            identifier = userRepository.findByEmail(email)
                    .filter(u -> u.getRole() == Role.ADMIN)
                    .map(u -> u.getEmail())
                    .orElse(null);
        }

        if (identifier == null) {
            throw new RuntimeException("No account found with that email address");
        }

        // Verify the identifier exists in _user table
        if (userRepository.findByEmail(identifier).isEmpty()) {
            throw new RuntimeException("User account record missing");
        }

        tokenRepository.deleteByEmail(email);

        // Generate 4-digit OTP
        String otp = String.format("%04d", new Random().nextInt(10000));

        // Save the token (expires in 10 minutes)
        PasswordResetToken token = PasswordResetToken.builder()
                .token(otp)
                .email(email)
                .expiryTime(LocalDateTime.now().plusMinutes(10))
                .used(false)
                .build();
        tokenRepository.save(token);

        // Send email
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("MathruCare - Password Reset Code");
        message.setText(
                "Your password reset code is: " + otp + "\n\n" +
                        "This code will expire in 10 minutes.\n\n" +
                        "If you did not request this, please ignore this email.\n\n" +
                        "- MathruCare Team");
        try {
            mailSender.send(message);
        } catch (MailAuthenticationException e) {
            throw new RuntimeException(
                    "SMTP Authentication failed. Please check the backend email configuration (username and app password) in application.properties.");
        } catch (Exception e) {
            throw new RuntimeException(
                    "Failed to send email. please check your internet connection or email configuration.");
        }
    }

    /**
     * Verify the OTP and reset the password.
     */
    @Transactional
    public void resetPassword(String identifier, String otp, String newPassword) {
        PasswordResetToken token = tokenRepository.findByToken(otp)
                .orElseThrow(() -> new RuntimeException("Invalid reset code"));

        if (!token.getEmail().equals(identifier)) {
            throw new RuntimeException("Invalid reset code");
        }
        if (token.isUsed()) {
            throw new RuntimeException("Reset code has already been used");
        }
        if (LocalDateTime.now().isAfter(token.getExpiryTime())) {
            throw new RuntimeException("Reset code has expired. Please request a new one.");
        }

        // Resolve the login identifier from the email address again
        String loginIdentifier = null;

        // Try as Mother
        loginIdentifier = motherRepository.findByEmail(identifier)
                .map(m -> m.getPhone())
                .orElse(null);

        // Try as Midwife
        if (loginIdentifier == null) {
            loginIdentifier = midwifeRepository.findByEmail(identifier)
                    .map(m -> m.getRegNumber())
                    .orElse(null);
        }

        // Try as Admin
        if (loginIdentifier == null) {
            loginIdentifier = userRepository.findByEmail(identifier)
                    .filter(u -> u.getRole() == Role.ADMIN)
                    .map(u -> u.getEmail())
                    .orElse(null);
        }

        if (loginIdentifier == null) {
            throw new RuntimeException("User account record missing");
        }

        // Update password in _user table using the resolved login identifier
        User user = userRepository.findByEmail(loginIdentifier)
                .orElseThrow(() -> new RuntimeException("User account record missing"));
        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);

        // Mark token as used
        token.setUsed(true);
        tokenRepository.save(token);
    }
}
