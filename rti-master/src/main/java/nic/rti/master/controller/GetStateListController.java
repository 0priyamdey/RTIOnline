package nic.rti.master.controller;

import lombok.RequiredArgsConstructor;
import nic.rti.master.entity.GetStateList;
import nic.rti.master.service.GetStateListService;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class GetStateListController {

    private final GetStateListService getStateListService;

    @GetMapping(value = "/GetStateList", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<GetStateList>> getStates() {
        List<GetStateList> states = getStateListService.getAllStates();
        return states == null || states.isEmpty()
                ? ResponseEntity.noContent().build()
                : ResponseEntity.ok(states);
    }
}
