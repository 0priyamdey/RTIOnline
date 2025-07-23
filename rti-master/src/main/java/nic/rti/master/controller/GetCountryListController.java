package nic.rti.master.controller;

import lombok.RequiredArgsConstructor;
import nic.rti.master.entity.GetCountryList;
import nic.rti.master.service.GetCountryListService;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class GetCountryListController {

    private final GetCountryListService getCountryListService;

    @GetMapping(value = "/GetCountryList", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<GetCountryList>> getCountryList() {
        List<GetCountryList> countryList = getCountryListService.getCountryList();
        if (countryList == null || countryList.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(countryList);
    }
}
