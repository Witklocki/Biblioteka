import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/service/author.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  private authors = [];
  constructor(private authorServer:AuthorService) { }

  ngOnInit() {
    this.authors.push(this.authorServer.getServeAll()
    .subscribe(res =>{ this.authors = res}))
  }
}

