package com.projekt.tables;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
public class BookTable {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String bookName;

    @ManyToOne
    @JsonBackReference
    private AuthorTable authorTable;

    public BookTable() {
    }

    public BookTable(Long id, String bookName, AuthorTable authorTable) {
        this.id = id;
        this.bookName = bookName;
        this.authorTable = authorTable;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public AuthorTable getAuthorTable(AuthorTable authorTable) {
        return this.authorTable;
    }

    public void setAuthorTable(AuthorTable authorTable) {
        this.authorTable = authorTable;
    }
}
