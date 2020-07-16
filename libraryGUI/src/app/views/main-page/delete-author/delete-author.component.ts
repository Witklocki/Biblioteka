import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/service/author.service';
import { element } from 'protractor';

@Component({
  selector: 'app-delete-author',
  templateUrl: './delete-author.component.html',
  styleUrls: ['./delete-author.component.css']
})
export class DeleteAuthorComponent implements OnInit {

  private authors = [];

  constructor( private authorService:AuthorService) {  }

  ngOnInit() {
    this.authors.push(this.authorService.getServeAll().subscribe(data=> this.authors = data))

  }
  onDelete(id){
    this.authorService.deleteServer(id).subscribe(data => {this.authors = this.authors.filter((element)=>{return element.id !== id})})
  }
}
