package nic.rti.master.controller;

import lombok.RequiredArgsConstructor;
import nic.rti.master.entity.UserList;
import nic.rti.master.service.GetUserListService;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class GetUserListController {

    private final GetUserListService userListService;

    @GetMapping(value = "/GetUserList", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<UserList>> getUserList() {
        List<UserList> users = userListService.getUserList();
        return users == null || users.isEmpty()
                ? ResponseEntity.noContent().build()
                : ResponseEntity.ok(users);
    }
}
