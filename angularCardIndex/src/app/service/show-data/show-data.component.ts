import { Component, OnInit } from '@angular/core';
import { ServernaukaService } from '../../servernauka.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  public authors = [];
  constructor(private serverNaukaService:ServernaukaService) { }

  ngOnInit() {
    this.authors.push(this.serverNaukaService.getServeAll()
    .subscribe(res =>{ this.authors = res}))
  }
}

