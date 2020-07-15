import { Component, OnInit } from '@angular/core';
import { ServernaukaService } from 'src/app/servernauka.service';
import { Book } from 'src/app/model/Mthods/Book';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  bookModel = new Book();
  books = [];


  constructor( private _servernaukaService:ServernaukaService) { }

  ngOnInit() {
    this.books.push(this._servernaukaService.getServerBook()
    .subscribe(res =>this.books = res))
  }
  onDeleteBook(id){
    this._servernaukaService.deleteServerBook(id)
        .subscribe(data => {this.books = this.books.filter((element) =>
         { return element.id !== id; })
       }
      )
 }

}
