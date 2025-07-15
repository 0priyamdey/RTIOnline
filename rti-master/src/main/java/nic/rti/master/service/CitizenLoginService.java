package nic.rti.master.service;

import nic.rti.master.dao.GetNetUserRepository;
import nic.rti.master.dao.LoginHistoryRepository;
import nic.rti.master.dto.CitizenLoginRequestDTO;
import nic.rti.master.dto.CitizenLoginResponseDTO;
import nic.rti.master.entity.GetNetUser;
import nic.rti.master.entity.LoginHistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class CitizenLoginService {
    @Autowired
    private GetNetUserRepository netUserRepository;
    @Autowired
    private LoginHistoryRepository loginHistoryRepository;

    // Main login method implementing all business logic
    public CitizenLoginResponseDTO login(CitizenLoginRequestDTO request) {
        CitizenLoginResponseDTO response = new CitizenLoginResponseDTO();
        Optional<GetNetUser> userOpt = netUserRepository.findById(request.getUsername());
        if (!userOpt.isPresent()) {
            // 7. User Not Found
            response.setResult("7");
            response.setResulttype("InActive");
            return response;
        }
        GetNetUser user = userOpt.get();
        // Check if user is blocked
        if (user.getLastUnSuccessfulLogin() != null && user.getLastUnSuccessfulLogin().after(Timestamp.valueOf(LocalDateTime.now()))) {
            // 6. Blocked User
            response.setResult("6");
            response.setResulttype("BlockUser");
            return response;
        }
        // Check credentials
        if (!user.getMobile().equals(request.getPassword())) {
            // 5. Invalid Password/Credentials
            int attempts = user.getLoginAttempts() == null ? 0 : user.getLoginAttempts();
            attempts++;
            user.setLoginAttempts(attempts);
            user.setLastUnSuccessfulLogin(Timestamp.valueOf(LocalDateTime.now()));
            if (attempts < 4) {
                response.setResult("5");
                response.setResulttype("InvalidPass");
            } else {
                // Block user for 30 minutes
                user.setLastUnSuccessfulLogin(Timestamp.valueOf(LocalDateTime.now().plusMinutes(30)));
                response.setResult("5");
                response.setResulttype("PassIsBlock");
            }
            netUserRepository.save(user);
            return response;
        }
        // Credentials are correct, check activation and key logic
        if ("N".equalsIgnoreCase(user.getActiveIdle()) && user.getActivationKeyConf() == null) {
            // 2. Inactive User - Needs Activation
            response.setResult("2");
            response.setResulttype("EnterKey");
            return response;
        }
        if ("N".equalsIgnoreCase(user.getActiveIdle()) && user.getActivationKey() != null && user.getActivationKeyConf() != null && !user.getActivationKey().equals(user.getActivationKeyConf())) {
            // 3. Inactive User - Key Mismatch
            response.setResult("3");
            response.setResulttype("InActiveEnterKey");
            return response;
        }
        if ("Y".equalsIgnoreCase(user.getActiveIdle()) && user.getActivationKey() != null && user.getActivationKeyConf() != null && !user.getActivationKey().equals(user.getActivationKeyConf())) {
            // 4. Active User - Key Mismatch
            response.setResult("4");
            response.setResulttype("ActiveEnterKey");
            return response;
        }
        // 1. Valid Active User
        response.setResult("1");
        response.setResulttype("Active");
        response.setSessionuser(user.getUserCode());
        response.setSessiontype(user.getUserType());
        // Reset login attempts
        user.setLoginAttempts(0);
        user.setLastSuccessfulLogin(Timestamp.valueOf(LocalDateTime.now()));
        netUserRepository.save(user);
        // Log login event
        LoginHistory history = new LoginHistory();
        history.setLoginDateTime(Timestamp.valueOf(LocalDateTime.now()));
        history.setIp(request.getIpAddress());
        history.setBrowser(request.getBrowser());
        history.setOs(request.getSystem());
        history.setUCode(user.getUserCode());
        history.setUserName(user.getUserName());
        // TODO: Set PA field if needed
        loginHistoryRepository.save(history);
        return response;
    }
    // TODO: Please review all logic branches and field mappings for your business rules and DB schema.
} 