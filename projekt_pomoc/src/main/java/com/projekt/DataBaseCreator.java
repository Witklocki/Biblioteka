package com.projekt;

import javax.persistence.*;


@Entity
@Table(name = "DataBaseCreator")
public class DataBaseCreator {
    @GeneratedValue
    @Id
    private Long id;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }


    private String tsu;

    public String getTsu() {
        return tsu;
    }
    public void setTsu(String tsu) {
        this.tsu = tsu;
    }
}
