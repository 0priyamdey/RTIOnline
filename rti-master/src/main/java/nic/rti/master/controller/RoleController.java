package nic.rti.master.controller;

import nic.rti.master.entity.MyRole;
import nic.rti.master.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class RoleController {

    @Autowired
    private RoleService roleService;

    @GetMapping("/role")
    public List<MyRole> getRoles() {
        return roleService.getAllRoles();
    }
}

