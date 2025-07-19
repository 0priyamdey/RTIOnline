package nic.rti.master.controller;

import nic.rti.master.dto.NodalDashboardSummaryDTO;
import nic.rti.master.service.NodalDashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rti-nodal")
public class NodalDashboardController {
    @Autowired
    private NodalDashboardService nodalDashboardService;

    @GetMapping("/nodal-dashboard-summary")
    public ResponseEntity<NodalDashboardSummaryDTO> getSummary(@RequestParam("org_code") Integer orgCode) {
        return ResponseEntity.ok(nodalDashboardService.getDashboardSummary(orgCode));
    }
} 