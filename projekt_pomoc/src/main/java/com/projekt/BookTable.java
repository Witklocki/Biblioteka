package com.projekt;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "Book")
public class BookTable {
    @GeneratedValue
    @Id
    private Long id;

    private String book;

    private Long idAuthor;
    @OneToOne
    private AuthorTable authorTable;

    public BookTable() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;}
    public String getBook() {
        return book;
    }
    public void setBook(String book) {
        this.book = book;
    }
    public Long getIdAuthor() {
        return idAuthor;
    }
    public void setIdAuthor(Long idAuthor) {
        this.idAuthor = idAuthor;
    }

    public AuthorTable getAuthorTable() {
        return authorTable;
    }
    public void setAuthorTable(AuthorTable authorTable) {
        this.authorTable = authorTable;
    }
}
