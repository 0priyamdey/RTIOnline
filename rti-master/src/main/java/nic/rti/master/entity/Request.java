package nic.rti.master.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import lombok.Data;
import java.time.LocalDate;

@Entity
@Table(name = "request", schema = "rtimis")
@Data
public class Request {

    @Id
    @Column(name = "registration_no")
    private String registrationNo;

    @Column(name = "pio_id")
    private Integer pioId;

    @Column(name = "closing_date")
    private LocalDate closingDate;

    @Column(name = "requestStatus")
    private String requestStatus;

    @Column(name = "currentActionStatus")
    private String currentActionStatus;

    @Column(name = "recvd_date")
    private LocalDate recvdDate;

    @Column(name = "org_code")
    private String orgCode;

    @Column(name = "request_no")
    private String requestNo;
}
