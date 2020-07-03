package com.projekt;

@org.springframework.stereotype.Service
public class wpelnianieTablicy {
    private final com.projekt.Repo repo;

    public wpelnianieTablicy(com.projekt.Repo repo) {
        this.repo = repo;
    }

    public void test(){
        DataBaseCreator datapoject = new DataBaseCreator();
        datapoject.setTsu("cos");
        repo.save(datapoject);

    }
}
