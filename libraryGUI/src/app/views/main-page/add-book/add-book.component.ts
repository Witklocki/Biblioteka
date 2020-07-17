import { Component, OnInit, Inject } from '@angular/core';
import { Book } from "src/app/model/Book";
import { Authors } from 'src/app/model/Author';
import { BookService } from 'src/app/service/book.service';
import { AuthorService } from 'src/app/service/author.service';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  private authors = [];
  private bookModel : Book = new Book()
  private id;
  constructor( private bookService:BookService,@Inject(MAT_DIALOG_DATA)public response:any) { }

  ngOnInit() {
  }
  onBook(){
      this.id = this.response
      this.bookService.postSeverBook(this.bookModel, this.id)
       .subscribe()
       this.bookModel = new Book();
  }
}
