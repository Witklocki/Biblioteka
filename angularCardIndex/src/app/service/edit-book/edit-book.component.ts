import { Component, OnInit } from '@angular/core';
import { ServernaukaService } from 'src/app/servernauka.service';
import { Help } from 'src/app/model/Mthods/Help';
import { Authors } from 'src/app/model/Mthods/Author';
import { Book } from 'src/app/model/Mthods/Book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  
  public authors=[];
  public books=[];
  helpModel = new Help ();
  authorModel = new Authors();
  bookModel = new Book();
  id;
  done = false;


  constructor(private serverNaukaService:ServernaukaService ) { }

  ngOnInit() {
    this.authors.push(this.serverNaukaService.getServeAll()
    .subscribe(res =>{ this.authors = res } ) )
     this.books.push(this.serverNaukaService.getServerBook()
      .subscribe(rep => {this.books=rep}))
  }
  onChange(){
    this.id = Object.values(this.helpModel);
       this.serverNaukaService.postSeverBook(this.bookModel, this.id)
         .subscribe();
        this.done=true;
       this.bookModel = new Book();
  }

}