package com.projekt.Controller;

import com.projekt.repo.AuthorRepository;
import com.projekt.repo.BookRepository;
import com.projekt.tables.AuthorTable;
import com.projekt.tables.BookTable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping
@RestController
public class bookController {
    private BookRepository bookRepository;
    private AuthorRepository authorRepository;

    public bookController(AuthorRepository authorRepository, BookRepository bookRepository) {
        this.authorRepository = authorRepository;
        this.bookRepository = bookRepository;
    }
/* Create records */
    @PostMapping("/createBook")
    public ResponseEntity post(@RequestBody BookTable bookTable, AuthorTable authorTable){
        bookTable.getAuthorTable(authorTable);
        return new ResponseEntity(this.bookRepository.save(bookTable), HttpStatus.ACCEPTED);
    }
/* Find record by id */
    @GetMapping("/getBook/{id}")
    public ResponseEntity getBooks (@PathVariable(value = "id") @RequestBody Long bookId){
        return new ResponseEntity(this.bookRepository.findById(bookId),HttpStatus.ACCEPTED);
    }
/* Find all records */
    @GetMapping("/getAllBooks")
    public List<BookTable> getAllBooks(){
        return bookRepository.findAll();
    }
/* Delete records by id */
    @DeleteMapping("/deleteBook/{id}")
    public ResponseEntity delete(@PathVariable(value = "id") @RequestBody Long bookId){
        Optional<BookTable> optionalBookTable = bookRepository.findById(bookId);

        if (optionalBookTable.isPresent()){
            bookRepository.deleteById(bookId);
            return ResponseEntity.noContent().build();
        }
        else {
            return ResponseEntity.noContent().build();
        }
    }
/* Update records */
    @PutMapping("/putBook")
    public ResponseEntity<BookTable> updateAuthor(@RequestBody BookTable bookTable, AuthorTable authorTable){
        bookTable.getAuthorTable(authorTable);
        return ResponseEntity.ok(this.bookRepository.save(bookTable));
    }
}