package com.projekt;

import javax.persistence.*;


@Entity
@Table(name = "Book")
public class BookTable {
    @GeneratedValue @Id Long id;

    private String book;

    private Long idAuthor;
    @ManyToOne
    @JoinColumn (name = "FK_idAuthor", nullable = false)
    private AuthorTable authorTable;



    public BookTable() {
    }


    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;}

    @Column(columnDefinition = "text")
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
