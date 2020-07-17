import { Component, OnInit } from '@angular/core';
import { Authors } from "../../../model/Author";
import { AuthorService } from 'src/app/service/author.service';
import { MatDialog } from '@angular/material';
import { AddBookComponent } from '../add-book/add-book.component';
import { Book } from 'src/app/model/Book';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  private authorModel: Authors = new Authors();
  private book: Book = new Book()
  private done;
  constructor( private authorService:AuthorService, private dialog:MatDialog) { }

  ngOnInit() {
  }
  //  -Ustalić dlaczego nie przyjmuje żadnych warości
  //  -Naprawić dodawanie autora z książką bo książki to null zawsze
  //  -Dodać przyciski do dodawanie autora w Library
  //  -Dodać przycisk do menu edycji książek ?? to zapytać się Patryka czy nie będzie przesada
  onSubmit() {
    if(this.book.bookName){
      this.authorModel.bookTable = Object.assign([{}],this.book)
      this.authorService.postServer(this.authorModel).subscribe( data => {this.done = data.id})
      this.book = new Book();
    }
    else{
      this.authorService.postServer(this.authorModel).subscribe( data => {this.done = data.id})
      this.book = new Book();
    }
    
   
  }
}
