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
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping
@RestController
public class auhorController {
    private BookRepository bookRepository;
    private AuthorRepository authorRepository;
    
    public auhorController(AuthorRepository authorRepository, BookRepository bookRepository) {
        this.authorRepository = authorRepository;
        this.bookRepository = bookRepository;
    }
/* Update record */
    @PostMapping("/create")
    public ResponseEntity post(@RequestBody AuthorTable authorTable, BookTable bookTable){
        bookTable.setAuthorTable(authorTable);
        return new ResponseEntity(this.authorRepository.save(authorTable), HttpStatus.ACCEPTED);
    }
/* Find record by id */
    @GetMapping("/get/{id}")
    public ResponseEntity getAuthors (@PathVariable(value = "id") @RequestBody Long authorId){

        System.out.print(authorId);
        return new ResponseEntity(this.authorRepository.findById(authorId),HttpStatus.ACCEPTED);
    }
/* Find all records */
    @GetMapping
    public List<AuthorTable> getAllAuthors(){
        return authorRepository.findAll();
    }
/* Delete records by id */
    @DeleteMapping("/delete/{id}")
    public ResponseEntity delete(@PathVariable(value = "id") @RequestBody Long authorId){
        Optional<AuthorTable> optionalAuthorTable = authorRepository.findById(authorId);

        if (optionalAuthorTable.isPresent()){
            authorRepository.deleteById(authorId);
            return ResponseEntity.noContent().build();
        }
        else {
            return ResponseEntity.noContent().build();
        }
    }
/* Update records */
    @PutMapping("/put")
    public ResponseEntity<AuthorTable> updateAuthor(@RequestBody AuthorTable authorTable){
        return ResponseEntity.ok(this.authorRepository.save(authorTable));
    }
}
