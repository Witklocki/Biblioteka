package com.projekt;

@org.springframework.stereotype.Service
public class wpelnianieTablicy {
    private final com.projekt.Repo repo;

    public wpelnianieTablicy(com.projekt.Repo repo) {
        this.repo = repo;
    }

    public void test(){
        String zmienna = "Tadek";
        String imie = "Adaś";
        String nazwisko = "Adaś";

        BookTable datapoject = new BookTable();

        datapoject.setBook(zmienna);

        repo.save(datapoject);
        System.out.println(zmienna);

    }
}
