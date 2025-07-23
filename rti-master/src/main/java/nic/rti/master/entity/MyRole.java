package nic.rti.master.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tblrole")
public class MyRole {
    @Id
    private String code;
    private String description;
    private String active_idle;
    private String folder;
    private String detailtable;

    public String getCode() {
        return code;
    }
    public void setCode(String code) {
        this.code = code;
    }

    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    public String getActive_idle() {
        return active_idle;
    }
    public void setActive_idle(String active_idle) {
        this.active_idle = active_idle;
    }

    public String getFolder() {
        return folder;
    }
    public void setFolder(String folder) {
        this.folder = folder;
    }

    public String getDetailtable() {
        return detailtable;
    }
    public void setDetailtable(String detailtable) {
        this.detailtable = detailtable;
    }
}
