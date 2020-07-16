package com.projekt.tables;

import javax.annotation.processing.Generated;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UserTable {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String pass;
    private String role;

    public UserTable(){}
    public UserTable (Long id, String name, String pass, String role) {
        this.id = id;
        this.name = name;
        this.pass = pass;
        this.role = role;
    }


    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getPass() {
        return pass;
    }
    public void setPass(String pass) {
        this.pass = pass;
    }

    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }
}
