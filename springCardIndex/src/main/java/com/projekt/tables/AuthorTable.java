package com.projekt.tables;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.List;

// Proponuje poczytać o Lomboku, skróci ilość kodu
@Entity
public class AuthorTable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String surname;

//    Doczytać o kaskadowości
    @OneToMany(mappedBy ="authorTable", cascade = CascadeType.ALL)
    @JsonManagedReference
    @OnDelete(action = OnDeleteAction.CASCADE)
    private List<BookTable> bookTable;

    public AuthorTable() {
    }

    public AuthorTable(Long id, String name, String surname, List<BookTable> bookTable) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.bookTable = bookTable;
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

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public List<BookTable> getBookTable() {
        return bookTable;
    }

    public void setBookTable(List<BookTable> bookTable) {
        this.bookTable = bookTable;
    }
}
