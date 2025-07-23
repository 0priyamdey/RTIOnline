package nic.rti.master.controller;

import lombok.RequiredArgsConstructor;
import nic.rti.master.entity.TransactionMode;
import nic.rti.master.service.GetTransactionModeService;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class GetTransactionModeController {

    private final GetTransactionModeService transactionModeService;

    @GetMapping(value = "/GetTransactionMode", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<TransactionMode>> getTransactionMode() {
        List<TransactionMode> modes = transactionModeService.getTransactionMode();
        return modes == null || modes.isEmpty()
                ? ResponseEntity.noContent().build()
                : ResponseEntity.ok(modes);
    }
}
