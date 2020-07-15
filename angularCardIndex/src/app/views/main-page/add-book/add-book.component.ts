import { Component, OnInit } from '@angular/core';
import { ServernaukaService } from '../../../servernauka.service';
import { Book } from "../../../service/Mthods/Book";
import { Help } from 'src/app/service/Mthods/Help';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookModel = new Book();
  helpModel = new Help();
  id;
  public authors = [];
  constructor(private _servernaukaService: ServernaukaService) { }

  ngOnInit() {
    // co to
    this.authors.push(this._servernaukaService.getServeAll()
      .subscribe(res => { this.authors = res; console.log(res) }))
    console.log(this.authors)
  }
  onBook() {
    this.id = Object.values(this.helpModel);
    console.log(this.helpModel)
    console.log(this.id)
    this._servernaukaService.postSeverBook(this.bookModel, this.id)
      .subscribe(data => console.log(data))
    this.bookModel = new Book();
  }
}
