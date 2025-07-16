package com.example.piodatech.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import lombok.Data;

@Entity
@Table(name = "dpiosdetails", schema = "rtimis")
@Data
public class DPIODetails {

    @Id
    @Column(name = "DPIOCode")
    private Integer dpioCode;

}
