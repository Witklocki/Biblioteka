import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/Book';
import { BookService } from 'src/app/service/book.service';
import { MatDialog } from '@angular/material';
import { CheckComponent } from '../../general/check/check.component';
import { EditBookComponent } from './../edit-book/edit-book.component'
import { AuthorService } from 'src/app/service/author.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  private bookModel: Book = new Book();
  private books = [];
  private authors= [];
  private delete;
  private info;
  private name;
  private surname;
  private idAuthor;


  constructor(private bookService:BookService, private dialog:MatDialog, private authorService:AuthorService) { }
  change(id){
    this.books = this.books.filter((element)=>{return element.id !== id})
  }
  comper(a,b){
    return a.id-b.id
  }


  ngOnInit() {
    this.authors.push(this.authorService.getServeAll().subscribe(data => this.authors = data))
    this.books.push(this.bookService.getServerBook().subscribe(data =>{this.books = data.sort(this.comper)}))
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
    this.authors.filter(x=>{
      for(let i = 0 ;i < x.bookTable.length;i++){
        if(x.bookTable[i].id == id){
        this.name = x.name, 
        this.surname = x.surname
        this.idAuthor = x.id
        }
      }
  })
    this.info = this.dialog.open(EditBookComponent,{data:{value:id ,name: this.name, surname: this.surname, authorId: this.idAuthor} });
     this.info.afterClosed().subscribe(result => {
      this.books.push(this.bookService.getServerBook()
    .subscribe(res =>{ this.books = res.sort(this.comper)}))
    })
}

}
