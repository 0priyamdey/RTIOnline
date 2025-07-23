package nic.rti.master.dto;

import lombok.Data;

@Data
public class CitizenLoginRequestDTO {
    private String username; // loginusername
    private String password; // loginuserpassword (mobile)
    private String ipAddress; // loginipaddress
    private String browser; // loginbrowser
    private String system; // loginsystem
    // TODO: Please review field names for alignment with frontend/client request.
} 