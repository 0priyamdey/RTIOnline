package nic.rti.master.controller;

import nic.rti.master.entity.ApplicantLogin;
import nic.rti.master.service.GetApplicantLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class  GetApplicantLoginController {

    @Autowired
    private GetApplicantLoginService applicantLoginService;

    @GetMapping(value = "/GetApplicantLogin",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getApplicantLogin(){

        List<ApplicantLogin> applicantLogin = applicantLoginService.getApplicantLogin();
        if(applicantLogin != null && !applicantLogin.isEmpty()){
            return new ResponseEntity<>(applicantLogin, HttpStatus.OK);
        }
        return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
