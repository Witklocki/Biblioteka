package com.projekt.data;


import com.projekt.repo.AuthorRepository;
import com.projekt.repo.BookRepository;
import com.projekt.tables.AuthorTable;
import com.projekt.tables.BookTable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@RequestMapping
@Controller
@ResponseBody

public class DataGetter {
    private final AuthorRepository authorRepository;
    private final BookRepository bookRepository;

    public DataGetter(AuthorRepository authorRepository, BookRepository bookRepository) {
        this.authorRepository = authorRepository;
        this.bookRepository = bookRepository;
    }
    /* przełączane przez menu na stronie type="radio" */
    @GetMapping("/authors")
    public List<AuthorTable> authors(){
        return authorRepository.findAll();
    }
    @GetMapping("/books")
    public List<BookTable> books(){
        return bookRepository.findAll();
    }
    @GetMapping("/author")
    public List<AuthorTable> author(){
        return authorRepository.findByName("test");
    }
    @GetMapping("/book")
    public List<BookTable> book(){
       return bookRepository.findBybookName("jeden");
    }
}
