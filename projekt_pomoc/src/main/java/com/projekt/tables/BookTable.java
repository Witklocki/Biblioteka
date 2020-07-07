package com.projekt.tables;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

public class BookTable {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String bookName;

    @ManyToOne
    private AuthorTable authorTable;

    public BookTable() {
    }

    public AuthorTable getAuthorTable() {
        return authorTable;
    }

    public void setAuthorTable(AuthorTable authorTable) {
        this.authorTable = authorTable;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }
}
