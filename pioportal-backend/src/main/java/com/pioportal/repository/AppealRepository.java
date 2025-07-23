package com.example.repository;

import com.example.entity.Appeal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AppealRepository extends JpaRepository<Appeal, Long> {
    List<Appeal> findByCpioAppAndOrgCodeAndClosingDateIsNull(Integer cpioApp, String orgCode);
    List<Appeal> findByCpioApp(Integer cpioApp);
}
