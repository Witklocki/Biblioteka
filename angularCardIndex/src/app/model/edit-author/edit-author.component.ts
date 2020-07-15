import { Component, OnInit } from '@angular/core';
import {ServernaukaService} from '../../servernauka.service';
import { Help } from 'src/app/service/Mthods/Help';
import { update } from 'src/app/service/Mthods/Update';


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
  constructor( private _servernaukaService:ServernaukaService) { }

  ngOnInit() {
    this.authors.push(this._servernaukaService.getServeAll()
    .subscribe(res =>{ this.authors = res; console.log(res) } ) )
     console.log(this.authors)
  }
  onPutAuthor(){
    this.done = false;
    this.id = Object.values(this.helpModel);
    console.log(this.helpModel)
    console.log(this.id)
     this._servernaukaService.putSever(this.id, this.updateModel )
      .subscribe( data => console.log(data))
      this.updateModel = new update();
  }
}