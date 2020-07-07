package com.projekt.data;


import com.projekt.repo.AuthorRepository;
import com.projekt.repo.BookRepository;
import com.projekt.tables.AuthorTable;
import com.projekt.tables.BookTable;

@org.springframework.stereotype.Service

public class wpelnianieTablicy {
    private final BookRepository bookRepo;
    private final AuthorRepository autorRepo;

    public wpelnianieTablicy(BookRepository bookRepo, AuthorRepository autorRepo) {
        this.bookRepo = bookRepo;
        this.autorRepo = autorRepo;
    }

    public void test(){

        BookTable datapoject = new BookTable();
        AuthorTable datapoject1 = new AuthorTable();
        AuthorTable datapoject2 = new AuthorTable();

        datapoject.setBookName("zmienna");
        datapoject.setAuthorTable(datapoject1);
        datapoject1.setName("test1");
        datapoject1.setSurname("tezt");

        autorRepo.save(datapoject1);
        bookRepo.save(datapoject);

        System.out.println(this.bookRepo.findAll());
        System.out.println(this.autorRepo.findAll());

    }
}
