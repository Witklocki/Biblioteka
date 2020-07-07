package com.projekt.data;
import com.projekt.repo.AuthorRepository;
import com.projekt.tables.AuthorTable;

@org.springframework.stereotype.Service

public class authorGenerator {
    private final AuthorRepository autorRepo;

    public authorGenerator(AuthorRepository autorRepo) {
        this.autorRepo = autorRepo;
    }

    public void author(){
        AuthorTable dataproject = new AuthorTable();
        dataproject.setName("imie");
        dataproject.setSurname("nazwisko");

        autorRepo.save(dataproject);


    }
}
