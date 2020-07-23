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
import java.util.Optional;

//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping
@RestController

public class AuthorController {
    private BookRepository bookRepository;
    private AuthorRepository authorRepository;


    public AuthorController(AuthorRepository authorRepository, BookRepository bookRepository) {
        this.authorRepository = authorRepository;
        this.bookRepository = bookRepository;
    }
    /* Create record */
    @PostMapping("/create")
    @PreAuthorize("hasAuthority('author:write')")
    public ResponseEntity<AuthorTable> post(@RequestBody AuthorTable authorTable, BookTable bookTable){
        bookTable.setAuthorTable(authorTable);
        return new ResponseEntity(this.authorRepository.save(authorTable), HttpStatus.OK);
    }
    /* Find record by id */
    @GetMapping("/get/{id}")
    @PreAuthorize("hasAuthority('author:write')")
    public ResponseEntity getAuthors (@PathVariable(value = "id") @RequestBody Long authorId){
        return new ResponseEntity(this.authorRepository.findById(authorId),HttpStatus.OK);
    }
    /* Find all records */
    @GetMapping
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_STUDENT')")
    public List<AuthorTable> getAllAuthors(){
        return authorRepository.findAll();
    }
    /* Delete records by id */
    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasAuthority('author:write')")
    public ResponseEntity<AuthorTable> delete(@PathVariable(value = "id") @RequestBody Long authorId){
            authorRepository.deleteById(authorId);
            return ResponseEntity.noContent().build();
    }
    /* Update records by id */
    @PutMapping("/put/{id}")
    @PreAuthorize("hasAuthority('author:write')")
    public ResponseEntity<AuthorTable> updateAuthor(@PathVariable Long id, @RequestBody AuthorTable authorTable ){
            authorTable.setId(id);
            return new ResponseEntity(authorRepository.save(authorTable),HttpStatus.ACCEPTED);
    }
}