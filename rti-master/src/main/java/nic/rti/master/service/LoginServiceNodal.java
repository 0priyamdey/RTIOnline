package nic.rti.master.service;

import nic.rti.master.dao.UserRepository;
import nic.rti.master.dto.LoginResponseDTONodal;
import nic.rti.master.entity.UserNodal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginServiceNodal {

    @Autowired
    private UserRepository userRepository;

    public LoginResponseDTONodal authenticate(String username, String password) {
        Optional<UserNodal> optionalUser = userRepository.findByUsername(username);

        if (optionalUser.isEmpty()) {
            return new LoginResponseDTONodal(username, null, null, "InValidUser");
        }

        UserNodal user = optionalUser.get();


        if (!user.getPassword().equals(password)) {
            return new LoginResponseDTONodal(username, null, null, "InValidUser");
        }


        String status;

        if (user.getFlage() != null && user.getFlage() == 1) {
            status = "BlockUser";
        } else if ("N".equalsIgnoreCase(user.getActiveIdle())) {
            status = "BlockPass";
        } else if ("Y".equalsIgnoreCase(user.getPasswordChange())) {
            status = "ChangePass";
        } else if ("Y".equalsIgnoreCase(user.getActiveIdle())) {
            status = "Active";
        } else {
            status = "AlreadyActive";
        }

        return new LoginResponseDTONodal(user.getUsername(), user.getRole(), user.getUncode(), status);
    }
}
