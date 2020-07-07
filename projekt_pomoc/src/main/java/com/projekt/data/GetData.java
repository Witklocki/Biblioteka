package com.projekt.data;

import com.projekt.repo.AuthorRepository;
import com.projekt.repo.BookRepository;
import com.projekt.tables.BookTable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.List;

@org.springframework.stereotype.Service
@RequestMapping()
@ResponseBody
@Controller

public class GetData {
    private final AuthorRepository autorRepo;
    private final BookRepository bookRepo;

    public GetData(AuthorRepository autorRepo, BookRepository bookRepo) {
        this.autorRepo = autorRepo;
        this.bookRepo = bookRepo;
    }

    @GetMapping("/home")
//
//        public List<AuthorTable> findByName() {
//        return autorRepo.findByName("test1");
//    }
    public Object findALL(){
        List<BookTable> cos= bookRepo.findAll();
        return cos;
    }
}
