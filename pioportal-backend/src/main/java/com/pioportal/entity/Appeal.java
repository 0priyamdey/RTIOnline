package com.example.piodatech.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import lombok.Data;
import java.time.LocalDate;

@Entity
@Table(name = "appeal", schema = "rtimis")
@Data
public class Appeal {

    @Id
    @Column(name = "registration_no")
    private String registrationNo;

    @Column(name = "request_no")
    private String requestNo;

    @Column(name = "cpio_app")
    private Integer cpioApp;

    @Column(name = "org_code")
    private String orgCode;

    @Column(name = "closing_date")
    private LocalDate closingDate;

}
