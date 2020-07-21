import { Component, OnInit, Inject } from '@angular/core';
import { Authors } from 'src/app/model/Author';
import { Book } from 'src/app/model/Book';
import { BookService } from 'src/app/service/book.service';
import { AuthorService } from 'src/app/service/author.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { doesNotThrow } from 'assert';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  private authorModel = new Authors();
  private bookModel: Book = new Book();
  private id = this.response.authorId;

  private authors=[];
  private books=[];
  private authorsBooks= [];

  private idBook =this.response.value;
  private title;
  private name = this.response.name;
  private surname = this.response.surname;


  constructor( private bookService:BookService, private authorService:AuthorService, @Inject(MAT_DIALOG_DATA)public response:any ) { }

  ngOnInit() {
    this.authors.push(this.authorService.getServeAll().subscribe(data => this.authors = data, ))
    this.books.push(this.bookService.getServerBook().subscribe(data => this.books = data ))
    this.title = this.bookService.getServiceBookId(this.idBook).subscribe(data => this.title = data)

  }
  onChange(){
    this.bookModel.id = this.idBook;
    
        this.bookService.postSeverBook(this.bookModel, this.id)
           .subscribe()
         this.bookModel = new Book();
        
  }

}
