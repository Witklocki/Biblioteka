package com.projekt.data;

import com.projekt.repo.AuthorRepository;
import com.projekt.repo.BookRepository;
import com.projekt.tables.AuthorTable;
import com.projekt.tables.BookTable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.StreamingHttpOutputMessage;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.StreamingHttpOutputMessage.*;

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
        authorTable.setName("jan");
        authorTable.setSurname("naj");
        authorRepository.save(authorTable);
        /* postarać się zamienić do while na .saveALL lecz ta meoda działa tylko jest słabo elastczna */
        /* z alikacji weźmie tablicę z wpisami i doda każdy pokolei */
        int i = 0;
        do {
            BookTable bookTable = new BookTable();
            String[] books={"jeden","dwa","trzy"};
            bookTable.setBookName(books[i]);
            bookTable.setAuthorTable(authorTable);
            bookRepository.save(bookTable);
            i++;
        }
        while(i<3);
        return bookRepository.findAll();
    }

    @PostMapping("/create")
    public ResponseEntity create(@RequestBody AuthorTable authorTable){
        return new ResponseEntity(this.authorRepository.save(authorTable), HttpStatus.ACCEPTED);
    }
    @PutMapping("/put")
    public ResponseEntity put (@RequestBody AuthorTable authorTable){
        return new ResponseEntity(this.authorRepository.save(authorTable),HttpStatus.ACCEPTED);
    }
}
