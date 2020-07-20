import { Component, OnInit } from '@angular/core';
import { Authors } from "../../../model/Author";
import { AuthorService } from 'src/app/service/author.service';
import { MatDialog } from '@angular/material';
import { Book } from 'src/app/model/Book';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  private authorModel: Authors = new Authors();
  private book: Book = new Book()
  private done = false;
  constructor( private authorService:AuthorService, private dialog:MatDialog) { }

  ngOnInit() {
  }
  onSubmit() {
    if(this.book.bookName){
      this.authorModel.bookTable = Object.assign([this.book])
      this.authorService.postServer(this.authorModel).subscribe( data => {this.done = true})
      this.book = new Book();
      this.done = false;
    }
    else{
      this.authorService.postServer(this.authorModel).subscribe( data => {this.done = true})
      this.book = new Book();
      this.done = false;

    }
    
   
  }
}
