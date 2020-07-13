import { Component, OnInit } from '@angular/core';
import {ServernaukaService} from '../../../servernauka.service';
import { Book } from "../../../service/Mthods/Book";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookModel = new Book();

  constructor( private _servernaukaService:ServernaukaService) { }

  ngOnInit() {
  }
  onBook(){
    this._servernaukaService.postSeverBook(this.bookModel)
    .subscribe( data => console.log("done"))
  }
}
