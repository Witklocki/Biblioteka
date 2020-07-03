package com.projekt;

@org.springframework.stereotype.Service

public class wpelnianieTablicy {
    private final com.projekt.Repo repo;
    private final com.projekt.AutorRepo autorRepo;

    public wpelnianieTablicy(Repo repo, AutorRepo autorRepo) {
        this.repo = repo;
        this.autorRepo = autorRepo;
    }

    public void test(){

        BookTable datapoject = new BookTable();
        AuthorTable datapoject1 = new AuthorTable();
        AuthorTable datapoject2 = new AuthorTable();

        datapoject.setBook("zmienna");
        datapoject1.setName("test");
        datapoject2.setSurname("tezd");

        autorRepo.save(datapoject1);
        autorRepo.save(datapoject2);
        repo.save(datapoject);

        System.out.println(this.repo.findAll());
        System.out.println(this.autorRepo.findAll());

    }
}
