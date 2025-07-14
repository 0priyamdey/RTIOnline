package nic.rti.master.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import lombok.Data;

@Entity
@Table(name = "deemedpio", schema = "rtimis")
@Data
public class DeemedPIO {

    @Id
    @Column(name = "registration_no")
    private String registrationNo;

    @Column(name = "flag")
    private String flag;

}
