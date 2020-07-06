package com.projekt;

@org.springframework.stereotype.Service

public class wpelnianieTablicy {
    private final BookRepo bookRepo;
    private final com.projekt.AutorRepo autorRepo;

    public wpelnianieTablicy(BookRepo bookRepo, AutorRepo autorRepo) {
        this.bookRepo = bookRepo;
        this.autorRepo = autorRepo;
    }

    public void test(){

        BookTable datapoject = new BookTable();
        AuthorTable datapoject1 = new AuthorTable();
        AuthorTable datapoject2 = new AuthorTable();

        datapoject.setBook("zmienna");
        datapoject.setAuthorTable(datapoject1);
        datapoject1.setName("test1");
        datapoject1.setSurname("tezt");

        autorRepo.save(datapoject1);
        bookRepo.save(datapoject);

        System.out.println(this.bookRepo.findAll());
        System.out.println(this.autorRepo.findAll());

    }
}
