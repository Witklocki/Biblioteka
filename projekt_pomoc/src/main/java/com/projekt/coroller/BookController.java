package com.projekt.coroller;

import com.projekt.repo.AuthorRepository;
import com.projekt.repo.BookRepository;
import com.projekt.tables.AuthorTable;
import com.projekt.tables.BookTable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@Controller
@RequestMapping

public class BookController {
    private final AuthorRepository authorRepository;
    private final BookRepository bookRepository;

    public BookController(AuthorRepository authorRepository, BookRepository bookRepository) {
        this.authorRepository = authorRepository;
        this.bookRepository = bookRepository;
    }
    @GetMapping("/getAllBook")
        public List<BookTable> books() {
            return bookRepository.findAll();
        }
    @GetMapping("/getByIdBook/{id}")
    public Object getById(@PathVariable(value = "id")@RequestBody Long bookId){
        BookTable bookTable = bookRepository.findById(bookId).orElse(null);
        return bookTable;
    }
    @DeleteMapping("/deleteBook/{id}")
    public Map<String, Boolean> delete(@PathVariable(value = "id") @RequestBody Long bookId){
        BookTable bookTable = bookRepository.findById(bookId).orElse(null);
        bookRepository.deleteById(bookId);
        Map<String,Boolean> response = new HashMap<>();
        response.put("delete",Boolean.TRUE);
        return response;
    }
    @PostMapping("/createBook")
    public ResponseEntity create (@RequestBody BookTable bookTable, AuthorTable authorTable){
        return new ResponseEntity (this.bookRepository.save(bookTable),HttpStatus.ACCEPTED);
    }
    @PutMapping("/putBook")
    public ResponseEntity put(@RequestBody BookTable bookTable){
        return new ResponseEntity(this.bookRepository.save(bookTable),HttpStatus.ACCEPTED);
    }
}
