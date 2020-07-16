import { Component, OnInit } from '@angular/core';
import { ServernaukaService } from '../../servernauka.service';
import { Help } from 'src/app/model/Mthods/Help';
import { update } from 'src/app/model/Mthods/Update';


@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  updateModel = new update();
  helpModel = new Help();
  done = true;
  id;
  public authors = [];
  constructor( private serverNaukaService:ServernaukaService) { }

  ngOnInit() {
    this.authors.push(this.serverNaukaService.getServeAll()
      .subscribe(res =>{ this.authors = res} ) )
  }
  onPutAuthor(){
    this.done = false;
    this.id = Object.values(this.helpModel);
     this.serverNaukaService.putSever(this.id, this.updateModel )
        .subscribe()
      this.updateModel = new update();
  }
}