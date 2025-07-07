package com.example.TitleApi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/title")
public class TitleController {

    @Autowired
    private TitleService titleService;

    @GetMapping
    public List<Title> getAllTitles() {
        return titleService.getAllTitles();
    }
}
