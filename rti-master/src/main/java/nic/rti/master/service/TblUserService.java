package nic.rti.master.service;

import nic.rti.master.entity.TblUser;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TblUserService {
    public List<TblUser> getAllUsers() {
        return java.util.Collections.emptyList();
    }
    public TblUser addUser(TblUser user) {
        return user;
    }
}