import { Component, OnInit } from '@angular/core';
import { ServernaukaService } from '../../../servernauka.service';
import { Authors } from "../../../model/Mthods/Author";

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  authorModel = new Authors();
  done = true;
  constructor(private serverNaukaService:ServernaukaService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.done = false;
    this.serverNaukaService.postServer(this.authorModel)
      .subscribe(data=> {alert("Book Added")})
    this.authorModel = new Authors()
  }

}
