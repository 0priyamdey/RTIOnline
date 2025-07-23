package nic.rti.master.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.sql.Timestamp;

@Data
@Entity
@Table(name = "LoginHistory")
public class LoginHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Login_Date_Time")
    private Timestamp loginDateTime;

    @Column(name = "IP")
    private String ip;

    @Column(name = "Browser")
    private String browser;

    @Column(name = "OS")
    private String os;

    @Column(name = "PA")
    private String pa; // Additional parameter, clarify usage if needed

    @Column(name = "UCode")
    private String uCode;

    @Column(name = "UserName")
    private String userName;

    // TODO: Please review field types and names for alignment with your DB schema.
} 