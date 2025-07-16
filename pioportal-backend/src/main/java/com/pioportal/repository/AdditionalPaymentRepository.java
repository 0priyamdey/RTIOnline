package com.example.repository;

import com.example.entity.AdditionalPayment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AdditionalPaymentRepository extends JpaRepository<AdditionalPayment, Long> {
    List<AdditionalPayment> findByPaid(String paid);
}

