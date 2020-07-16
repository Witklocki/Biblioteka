import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/Book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  private bookModel: Book = new Book();
  private books = [];


  constructor(private bookService:BookService) { }
  change(id){
    this.books = this.books.filter((element)=>{return element.id !== id})
  }

  ngOnInit() {
    this.books.push(this.bookService.getServerBook().subscribe(data =>{this.books = data}))
  }
  onDeleteBook(id){
    this.bookService.deleteServerBook(id).subscribe(data => {this.change(id)})
  }

}
