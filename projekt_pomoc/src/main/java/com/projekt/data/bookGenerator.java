package com.projekt.data;

import com.projekt.repo.BookRepository;
import com.projekt.tables.AuthorTable;
import com.projekt.tables.BookTable;


@org.springframework.stereotype.Service

public class bookGenerator {
    private final BookRepository bookRepo;

    public bookGenerator(BookRepository bookRepo) {
        this.bookRepo = bookRepo;

    }
//    public void book(){
//        for (int i = 0; i++; i<5) {
//            BookTable dataproject1 = new BookTable();
//            dataproject1.setBook("nazwa" + i);
//            dataproject1.setAuthorTable(AuthorTable);
//
//            bookRepo.save(dataproject1);
//        }
//    }
}
