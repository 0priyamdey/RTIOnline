package nic.rti.master.controller;

import lombok.RequiredArgsConstructor;
import nic.rti.master.dto.PioLoginRequest;
import nic.rti.master.dto.PioLoginResponse;
import nic.rti.master.service.PioLoginService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rti-pio")
@RequiredArgsConstructor
public class PioLoginController {

    private final PioLoginService loginService;

    @PostMapping("/login")
    public ResponseEntity<PioLoginResponse> login(@RequestBody PioLoginRequest loginRequest) {
        PioLoginResponse response = loginService.authenticate(loginRequest);

        return switch (response.getLogin_active()) {
            case "Active" -> ResponseEntity.ok(response);
            case "AlreadyActive", "ChangePass", "BlockUser", "BlockPass" -> ResponseEntity.status(403).body(response);
            case "InValidUser" -> ResponseEntity.status(401).body(response);
            default -> ResponseEntity.status(500).body(
                new PioLoginResponse(loginRequest.getUsername(), "SystemError", null, null));
        };
    }
}
