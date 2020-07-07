package com.projekt.tables;

import javax.persistence.*;
import java.util.List;

@Entity
public class AuthorTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String surname;

    @OneToMany
    private List<BookTable> bookTable;

    public AuthorTable() {
    }

    public List<BookTable> getBookTable() {
        return bookTable;
    }

    public void setBookTable(List<BookTable> bookTable) {
        this.bookTable = bookTable;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }
}
