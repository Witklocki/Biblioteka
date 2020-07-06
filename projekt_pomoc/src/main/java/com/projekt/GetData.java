package com.projekt;

import org.hibernate.loader.custom.Return;
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
    private final AutorRepo autorRepo;
    private final BookRepo bookRepo;

    public GetData(AutorRepo autorRepo, BookRepo bookRepo) {
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
