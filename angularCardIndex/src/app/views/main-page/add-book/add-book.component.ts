import { Component, OnInit } from '@angular/core';
import { ServernaukaService } from '../../../servernauka.service';
import { Book } from "src/app//model/Mthods/Book";
import { Help } from 'src/app/model/Mthods/Help';


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
  constructor(private serverNaukaService: ServernaukaService) { }

  ngOnInit() {
    this.authors.push(this.serverNaukaService.getServeAll()
      .subscribe(res => { this.authors = res }))
  }
  onBook() {
    this.id = Object.values(this.helpModel);
    this.serverNaukaService.postSeverBook(this.bookModel, this.id)
      .subscribe(data => { alert("Book Added") })
    this.bookModel = new Book();
  }
}
