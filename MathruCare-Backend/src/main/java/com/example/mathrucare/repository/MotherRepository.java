package com.example.mathrucare.repository;

import com.example.mathrucare.model.Mother;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MotherRepository extends JpaRepository<Mother, Integer> {
    Optional<Mother> findByPhone(String phone);

    Optional<Mother> findByEmail(String email);
}
