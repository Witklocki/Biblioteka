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
  private author;
  private id = this.response

  constructor( private authoService:AuthorService, @Inject(MAT_DIALOG_DATA)public response:any) { }
  ngOnInit(){
    this.author = this.authoService.getAuthor(this.id).subscribe(data => this.author = data)
  }
  
   onPutAuthor(){
      this.authoService.putSever(this.id, this.authorModel )
         .subscribe()
       this.authorModel = new Authors();
   }
}