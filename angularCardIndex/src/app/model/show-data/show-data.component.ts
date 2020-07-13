import { Component, OnInit } from '@angular/core';
import {ServernaukaService} from '../../servernauka.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  public authors = [];
  constructor(private _servernaukaService:ServernaukaService) { }

  ngOnInit() {
    this.authors.push(this._servernaukaService.getServeAll()
    .subscribe(res =>{ this.authors = res; console.log(res) } ) )
     console.log(this.authors)
  }
}

