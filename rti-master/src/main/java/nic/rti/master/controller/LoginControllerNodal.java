package nic.rti.master.controller;

import nic.rti.master.dto.LoginRequestDTONodal;
import nic.rti.master.dto.LoginResponseDTONodal;
import nic.rti.master.service.LoginServiceNodal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rti-nodal")
public class LoginControllerNodal {

    @Autowired
    private LoginServiceNodal loginService;

    @PostMapping(value = "/login", produces = "application/json")
    public ResponseEntity<LoginResponseDTONodal> login(@RequestBody LoginRequestDTONodal request) {
        LoginResponseDTONodal response = loginService.authenticate(request.getUsername(), request.getPassword());
        return ResponseEntity.ok(response);
    }

}
