package nic.rti.master.service;

import nic.rti.master.dao.RoleRepository;
import nic.rti.master.entity.MyRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepository;

    public List<MyRole> getAllRoles() {
        return roleRepository.findAll();
    }
}

