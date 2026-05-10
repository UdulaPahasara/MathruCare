package com.example.mathrucare.repository;

import com.example.mathrucare.model.Midwife;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MidwifeRepository extends JpaRepository<Midwife, Integer> {
    Optional<Midwife> findByRegNumber(String regNumber);

    Optional<Midwife> findByEmail(String email);

    Optional<Midwife> findByPhone(String phone);
}
