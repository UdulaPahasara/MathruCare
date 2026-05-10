package com.example.mathrucare.controller;

import com.example.mathrucare.service.PasswordResetService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class PasswordResetController {

    private final PasswordResetService passwordResetService;

    /**
     * Step 1: Request OTP
     * Body: { "identifier": "user@gmail.com" }
     * - identifier: the user's registered email address
     */
    @PostMapping("/forgot-password")
    public ResponseEntity<Map<String, String>> forgotPassword(@RequestBody Map<String, String> body) {
        String identifier = body.get("identifier");
        passwordResetService.sendResetOtp(identifier);
        return ResponseEntity.ok(Map.of("message", "OTP sent to your registered email"));
    }

    /**
     * Step 2: Verify OTP + Reset Password
     * Body: { "identifier": "0771234567", "otp": "123456", "newPassword":
     * "NewPass@123" }
     */
    @PostMapping("/reset-password")
    public ResponseEntity<Map<String, String>> resetPassword(@RequestBody Map<String, String> body) {
        String identifier = body.get("identifier");
        String otp = body.get("otp");
        String newPassword = body.get("newPassword");
        passwordResetService.resetPassword(identifier, otp, newPassword);
        return ResponseEntity.ok(Map.of("message", "Password reset successful"));
    }
}
