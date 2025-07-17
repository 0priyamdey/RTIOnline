package nic.rti.master.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import jakarta.persistence.*;
import lombok.Data;

import java.time.ZonedDateTime;

@Data
@Entity
@Table(name = "tbluser", schema = "RTIMIS")
public class UserNodal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String username;

    private String password;

    private String role;

    @Column(name = "active_idle")
    private String activeIdle;

    @Column(name = "date_created")
    private ZonedDateTime dateCreated;

    @Column(name = "date_updated")
    private ZonedDateTime dateUpdated;

    @Column(name = "password_change")
    private String passwordChange;

    @Column(name = "password_updated_date")
    private ZonedDateTime passwordUpdatedDate;

    @Column(name = "ucode")
    private Integer uncode;

    @Column(name = "flage")
    private Integer flage;

    @Column(name = "Last_Visited_Time")
    private ZonedDateTime lastVisitedTime;

    @Column(name = "\"Flage_Time\"")
    private ZonedDateTime flageTime;
}
