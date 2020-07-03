package com.projekt;

@org.springframework.stereotype.Service
public class Service {
    private final com.projekt.Repo repo;

    public Service(com.projekt.Repo repo) {
        this.repo = repo;
    }

    public void test(){
        Test datapoject = new Test();
        datapoject.setTsu("cos");
        repo.save(datapoject);

    }
}
