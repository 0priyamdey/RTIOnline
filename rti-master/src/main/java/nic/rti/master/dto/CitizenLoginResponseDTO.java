package nic.rti.master.dto;

import lombok.Data;

@Data
public class CitizenLoginResponseDTO {
    private String result;
    private String resulttype;
    private String sessionuser; // user_code
    private String sessiontype; // user_type
    // TODO: Add any additional fields if needed for error messages or future extensibility.
} 