import { Component, OnInit } from '@angular/core';
import { Authors } from "../../../model/Author";
import { AuthorService } from 'src/app/service/author.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  private authorModel: Authors = new Authors();
  private done = false;
  constructor( private authorService:AuthorService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.done=false;
    this.authorService.postServer(this.authorModel).subscribe()
    this.authorModel = new Authors();

  }

}
