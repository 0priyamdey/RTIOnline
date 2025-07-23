package com.example.repository;

import com.example.entity.CommentsCPIO;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentsCPIORepository extends JpaRepository<CommentsCPIO, Long> {
    List<CommentsCPIO> findByFlag(String flag);
}
