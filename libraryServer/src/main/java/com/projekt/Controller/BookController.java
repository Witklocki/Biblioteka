package com.projekt.Controller;

import com.projekt.repo.AuthorRepository;
import com.projekt.repo.BookRepository;
import com.projekt.tables.AuthorTable;
import com.projekt.tables.BookTable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping
@RestController
public class BookController {
    private BookRepository bookRepository;
    private AuthorRepository authorRepository;

    public BookController(AuthorRepository authorRepository, BookRepository bookRepository) {
        this.authorRepository = authorRepository;
        this.bookRepository = bookRepository;
    }
/* Create records */
//    @PostMapping("/createBook")
//    public ResponseEntity post(@RequestBody BookTable bookTable, AuthorTable authorTable){
//        bookTable.getAuthorTable(authorTable);
//        return new ResponseEntity(this.bookRepository.save(bookTable), HttpStatus.ACCEPTED);
//    }
    @PostMapping("/createBook/{id}")
    @PreAuthorize("hasAuthority('book:write')")
    public ResponseEntity<BookTable> postBook(@PathVariable Long id, @RequestBody BookTable bookTable, AuthorTable authorTable ){
            bookTable.setAuthorTable(authorTable);

            return new ResponseEntity(bookRepository.save(bookTable), HttpStatus.OK);
    }

/* Find record by id */
    @GetMapping("/getBook/{id}")
    @PreAuthorize("hasAuthority('book:write')")
    public ResponseEntity getBooks (@PathVariable(value = "id") @RequestBody Long bookId){
        return new ResponseEntity(this.bookRepository.findById(bookId),HttpStatus.OK);
    }
/* Find all records */
    @GetMapping("/getAllBooks")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_STUDENT')")
    public List<BookTable> getAllBooks(){
        return bookRepository.findAll();
    }
/* Delete records by id */
    @DeleteMapping("/deleteBook/{id}")
    @PreAuthorize("hasAuthority('book:write')")
    public ResponseEntity<BookTable> delete(@PathVariable(value = "id") @RequestBody Long bookId){

            bookRepository.deleteById(bookId);
            return ResponseEntity.noContent().build();
    }
/* Update records */
    @PutMapping("/putBook/{id}")
    @PreAuthorize("hasAuthority('book:write')")
    public ResponseEntity<BookTable> updateAuthor(@PathVariable Long id, @RequestBody BookTable bookTable) {
        AuthorTable authorTable = authorRepository.findById(id).orElseThrow();
            bookTable.setAuthorTable(authorTable);
            return new ResponseEntity(bookRepository.save(bookTable), HttpStatus.OK);
    }
}