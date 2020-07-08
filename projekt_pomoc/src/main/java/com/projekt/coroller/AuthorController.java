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

@RequestMapping
@Controller

public class AuthorController {
    private final AuthorRepository authorRepository;
    private final BookRepository bookRepository;

    public AuthorController(AuthorRepository authorRepository, BookRepository bookRepository) {
        this.authorRepository = authorRepository;
        this.bookRepository = bookRepository;
    }
    @PostMapping("/create")
    public ResponseEntity post(@RequestBody AuthorTable authorTable, BookTable bookTable){
        return new ResponseEntity(this.authorRepository.save(authorTable),HttpStatus.ACCEPTED);
    }

    @PutMapping("/put")
    public ResponseEntity put(@RequestBody AuthorTable authorTable) {
        return new ResponseEntity(this.authorRepository.save(authorTable), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/delete/{id}")
    public Map<String, Boolean> delete(@PathVariable(value = "id") @RequestBody Long authorId) {
        AuthorTable authorTable = authorRepository.findById(authorId).orElse(null);

        authorRepository.deleteById(authorId);
        Map<String, Boolean> response = new HashMap<>();
        response.put("delete", Boolean.TRUE);

        return response;
    }

    @GetMapping("/getById/{id}")
    public Object getById(@PathVariable(value = "id") @RequestBody Long auhorId) {
        AuthorTable authorTable = authorRepository.findById(auhorId).orElse(null);
        return authorTable;
    }
    @GetMapping("/getAll")
    public List<AuthorTable> authors() {
        return authorRepository.findAll();
    }
}
