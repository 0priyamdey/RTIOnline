package com.example.repository;

import com.example.entity.Request;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RequestRepository extends JpaRepository<Request, Long> {
    List<Request> findByPioIdAndClosingDateIsNull(Integer pioId);
    List<Request> findByPioIdAndClosingDateIsNotNull(Integer pioId);
    Long countByPioIdAndClosingDateIsNull(Integer pioId);
}
