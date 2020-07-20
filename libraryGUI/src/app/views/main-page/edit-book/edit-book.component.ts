import { Component, OnInit, Inject } from '@angular/core';
import { Authors } from 'src/app/model/Author';
import { Book } from 'src/app/model/Book';
import { BookService } from 'src/app/service/book.service';
import { AuthorService } from 'src/app/service/author.service';
import { MAT_DIALOG_DATA } from '@angular/material';

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
  private idBook =this.response


  constructor( private bookService:BookService, private authorService:AuthorService, @Inject(MAT_DIALOG_DATA)public response:any ) { }

  ngOnInit() {
    this.authors.push(this.authorService.getServeAll().subscribe(data => this.authors = data))
    this.books.push(this.bookService.getServerBook().subscribe(data => this.books = data))
  }
  onChange(){
    this.bookModel.id = this.idBook;
        this.bookService.postSeverBook(this.bookModel, this.id)
          .subscribe()
        this.bookModel = new Book();
        
  }

}
