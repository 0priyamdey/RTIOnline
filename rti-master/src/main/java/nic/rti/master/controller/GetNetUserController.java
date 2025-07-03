package nic.rti.master.controller;

import lombok.RequiredArgsConstructor;
import nic.rti.master.entity.GetNetUser;
import nic.rti.master.service.GetNetUserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@RestController
@RequestMapping("/rti-master")
@RequiredArgsConstructor
public class GetNetUserController {

    private final GetNetUserService netUserService;

    @GetMapping("/GetApplicantlogin")
    public ResponseEntity<List<GetNetUser>> getAllApplicants() {
        List<GetNetUser> users = netUserService.getAllUsers();
        return users == null || users.isEmpty()
                ? ResponseEntity.noContent().build()
                : ResponseEntity.ok(users);
    }

    @GetMapping("/GetApplicantlogin/{userCode}")
    public ResponseEntity<GetNetUser> getUserById(@PathVariable String userCode) {
        return netUserService.getUserById(userCode)
                .map(ResponseEntity::ok)
                .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "User not found with code: " + userCode));
    }
}
