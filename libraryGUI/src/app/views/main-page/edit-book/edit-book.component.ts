import { Component, OnInit } from '@angular/core';
import { Authors } from 'src/app/model/Author';
import { Book } from 'src/app/model/Book';
import { BookService } from 'src/app/service/book.service';
import { AuthorService } from 'src/app/service/author.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  
  private authors=[];
  private books=[];
  private bookModel: Book = new Book();
  private id = new Authors().id;
  private done = false;


  constructor( private bookService:BookService, private authorService:AuthorService ) { }

  ngOnInit() {
    this.authors.push(this.authorService.getServeAll().subscribe(data => this.authors = data))
    this.books.push(this.bookService.getServerBook().subscribe(data => this.books = data))
  }
  onChange(){
        this.bookService.postSeverBook(this.bookModel, this.id)
          .subscribe()
         this.done=true;
        this.bookModel = new Book();
        
  }

}
