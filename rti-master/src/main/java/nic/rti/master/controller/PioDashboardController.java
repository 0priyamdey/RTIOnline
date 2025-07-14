package nic.rti.master.controller;

import nic.rti.master.dto.PioDashboardSummary;
import nic.rti.master.service.PioDashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rti-pio")
public class PioDashboardController {

    @Autowired
    private PioDashboardService pioDashboardService;

    @GetMapping("/pio-dashboard-summary")
    public ResponseEntity<PioDashboardSummary> getPioDashboardSummary(
            @RequestHeader(name = "Authorization") String authorizationHeader,
            @RequestParam(name = "pio_id") Integer pioId,
            @RequestParam(name = "org_code", required = false) String orgCode) {

        if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED); // 401
        }
        String token = authorizationHeader.substring(7); // "Bearer ".length() is 7
        if (!isValidPioToken(token)) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN); // 403
        }

        PioDashboardSummary summary = pioDashboardService.getPioDashboardSummary(pioId, orgCode);

        return new ResponseEntity<>(summary, HttpStatus.OK); // 200 OK
    }

    private boolean isValidPioToken(String token) {
        return token != null && !token.isEmpty();
    }
}
