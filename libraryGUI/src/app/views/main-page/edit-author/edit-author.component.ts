import { Component, OnInit, Inject } from '@angular/core';
import { Authors } from 'src/app/model/Author';
import { AuthorService } from 'src/app/service/author.service';
import { MAT_DIALOG_DATA } from '@angular/material'
 

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit{
  private authorModel: Authors = new Authors();
  private authors = [];
  private id;

  constructor( private authoService:AuthorService, @Inject(MAT_DIALOG_DATA)public response:any) { }
  ngOnInit(){
    this.authors.push(this.authoService.getServeAll().subscribe(data =>{ this.authors = data }))
  }
  
   onPutAuthor(){
     this.id = this.response
      this.authoService.putSever(this.id, this.authorModel )
         .subscribe()
       this.authorModel = new Authors();
   }
}