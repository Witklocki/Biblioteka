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

@RequestMapping()
@ResponseBody
@Controller
public class DataCreator {
    private final AuthorRepository authorRepository;
    private final BookRepository bookRepository;

    public DataCreator(AuthorRepository authorRepository, BookRepository bookRepository) {
        this.authorRepository = authorRepository;
        this.bookRepository = bookRepository;
    }
    @GetMapping("/test")
     public List<AuthorTable> hello(){
        AuthorTable authorTable = new AuthorTable();
        authorTable.setName("test");
        authorTable.setSurname("test");
        authorRepository.save(authorTable);

        BookTable bookTable = new BookTable();
        bookTable.setBookName("test");
        bookTable.setAuthorTable(authorTable);
        bookRepository.save(bookTable);
        return authorRepository.findAll();
    }

    @GetMapping("/testForBook")
    public List<BookTable> returnBooks(){
        AuthorTable authorTable = new AuthorTable();
        authorTable.setName("test");
        authorTable.setSurname("test");
        authorRepository.save(authorTable);

        BookTable bookTable = new BookTable();
        bookTable.setBookName("test");
        bookTable.setAuthorTable(authorTable);
        bookRepository.save(bookTable);
        return bookRepository.findAll();
    }


}
