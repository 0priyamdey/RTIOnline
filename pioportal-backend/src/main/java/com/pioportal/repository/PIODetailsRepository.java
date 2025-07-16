package com.example.repository;

import com.example.entity.PIODetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PIODetailsRepository extends JpaRepository<PIODetails, Integer> {
    PIODetails findByPioIdAndActiveIdle(Integer pioId, String activeIdle);
}
