import { Component, OnInit } from '@angular/core';
import { ServernaukaService } from 'src/app/servernauka.service';
import { Book } from 'src/app/service/Mthods/Book';

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
        .subscribe(data => {console.log("Deleted"), 
         this.books = this.books.filter((element) =>
         { return element.id !== id; })
       },
        error => console.log("error",error),
      )
 }

}
