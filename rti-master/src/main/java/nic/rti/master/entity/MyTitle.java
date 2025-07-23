package com.example.TitleApi;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "title")
public class MyTitle {
    @Id
    private String title_code;
    private String title_name;

    public String getTitle_code() {
        return title_code;
    }

    public void setTitle_code(String title_code) {
        this.title_code = title_code;
    }

    public String getTitle_name() {
        return title_name;
    }

    public void setTitle_name(String title_name) {
        this.title_name = title_name;
    }
}

