package nic.rti.master.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponseDTONodal {
    private String username;
    private String role;
    private Integer ucode;
    private String login_active;
}
