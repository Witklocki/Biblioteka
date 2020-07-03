package com.projekt;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "Author")
public class AuthorTable {
    @GeneratedValue @Id Long idAuthor;

    private String name;
    private String surname;
    @OneToMany
    private BookTable bookTable;
    private final List<BookTable> showings = new ArrayList<>();

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
    public Long getIdAuthor() {
        return idAuthor;
    }
    public void setIdAuthor(Long idAuthor) {
        this.idAuthor = idAuthor;
    }

}
