package nic.rti.master.controller;

import nic.rti.master.dto.CitizenLoginRequestDTO;
import nic.rti.master.dto.CitizenLoginResponseDTO;
import nic.rti.master.service.CitizenLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rti-citizen")
public class CitizenLoginController {
    @Autowired
    private CitizenLoginService citizenLoginService;

    @PostMapping("/login")
    public ResponseEntity<CitizenLoginResponseDTO> login(@RequestBody CitizenLoginRequestDTO request) {
        CitizenLoginResponseDTO response = citizenLoginService.login(request);
        // TODO: Adjust status codes as needed for each result/resulttype
        return ResponseEntity.ok(response);
    }
    // TODO: Please review endpoint and response handling for your requirements.
} 