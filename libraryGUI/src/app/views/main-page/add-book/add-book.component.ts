import { Component, OnInit } from '@angular/core';
import { Book } from "src/app/model/Book";
import { Authors } from 'src/app/model/Author';
import { BookService } from 'src/app/service/book.service';
import { AuthorService } from 'src/app/service/author.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  private authors = [];
  private bookModel : Book = new Book()
  private id = new Authors().id;
  constructor( private bookService:BookService, private authorSevice: AuthorService) { }

  ngOnInit() {
    this.authors.push(this.authorSevice.getServeAll().subscribe(res =>{ this.authors = res}))
  }
  onBook(){
      this.bookService.postSeverBook(this.bookModel, this.id)
       .subscribe(data=> {alert("Book Added")})
       this.bookModel = new Book();
  }
}
