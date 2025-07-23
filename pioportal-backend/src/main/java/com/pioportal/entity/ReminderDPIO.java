package com.example.piodatech.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import lombok.Data;

@Entity
@Table(name = "reminderdpio", schema = "rtimis")
@Data
public class ReminderDPIO {

    @Id
    @Column(name = "registration_no")
    private String registrationNo;

    @Column(name = "dpio_id")
    private Integer dpioId;

    @Column(name = "pio_id")
    private Integer pioId;

    @Column(name = "reply")
    private String reply;

}
