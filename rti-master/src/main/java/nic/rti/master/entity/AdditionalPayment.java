package nic.rti.master.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import lombok.Data;

@Entity
@Table(name = "additionalpayment", schema = "rtimis")
@Data
public class AdditionalPayment {

    @Id
    @Column(name = "registration_no")
    private String registrationNo;

    @Column(name = "paid")
    private String paid;

}
