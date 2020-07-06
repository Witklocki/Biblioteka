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

    @OneToMany(mappedBy = "idAuthor",cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private final List<BookTable> bookTables = new ArrayList<>();



    public void addBookTable(BookTable bookTable) {
        bookTables.add(bookTable);
    }
    public void removeBookTable(BookTable bookTable) {
        bookTables.remove(bookTable);
    }

    public Long getIdAuthor() {
        return idAuthor;
    }
    public void setIdAuthor(Long idAuthor) {
        this.idAuthor = idAuthor;
    }
    @Column(columnDefinition = "text")
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    @Column(columnDefinition = "text")
    public String getSurname() {
        return surname;
    }
    public void setSurname(String surname) {
        this.surname = surname;
    }


    public List<BookTable> getBookTables() {
        return bookTables;
    }
    }
