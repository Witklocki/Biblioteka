import { Component, OnInit } from '@angular/core';
import {ServernaukaService} from '../../../servernauka.service';
import { Authors } from "../../../service/Mthods/Author";

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  authorModel = new Authors();
  done = true;
  constructor(private _servernaukaService:ServernaukaService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.done = false;
    this._servernaukaService.postServer(this.authorModel)
    .subscribe(
    data =>{console.log("Success", data)},
    error => console.log("error",error)
    )
    this.authorModel = new Authors()
  }

}
