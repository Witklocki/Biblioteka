import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/Book';
import { BookService } from 'src/app/service/book.service';
import { MatDialog } from '@angular/material';
import { CheckComponent } from '../../general/check/check.component';
import { EditBookComponent } from './../edit-book/edit-book.component'

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  private bookModel: Book = new Book();
  private books = [];
  private delete;
  private id;
  private info;


  constructor(private bookService:BookService, private dialog:MatDialog) { }
  change(id){
    this.books = this.books.filter((element)=>{return element.id !== id})
  }

  ngOnInit() {
    this.books.push(this.bookService.getServerBook().subscribe(data =>{this.books = data}))
  }
  onDeleteBook(id){
    this.delete = this.dialog.open(CheckComponent)
    this.delete.afterClosed().subscribe(data =>{
      if(data =="true"){
        this.bookService.deleteServerBook(id).subscribe(data => {this.change(id)})
      }
    })
  }
  onChange(id){
    this.info = this.dialog.open(EditBookComponent,{data:id});
     this.info.afterClosed().subscribe(result => {
      this.books.push(this.bookService.getServerBook()
    .subscribe(res =>{ this.books = res}))
    })
}

}
