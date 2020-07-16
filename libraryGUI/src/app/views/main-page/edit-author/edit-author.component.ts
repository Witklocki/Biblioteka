import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { Authors } from 'src/app/model/Author';
import { AuthorService } from 'src/app/service/author.service';


@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit{
  private authorModel: Authors = new Authors();
  private authors = [];
  private id = new Authors().id
  constructor( private authoService:AuthorService ) { }
  ngOnInit(){
    this.authors.push(this.authoService.getServeAll().subscribe(data =>{ this.authors = data }))
  }

  // ngDoCheck(){
  //   this.authors.push(this.authoService.getServeAll().subscribe(data =>{ 
  //     if(this.authors !== data){  
  //     this.authors = data }
  //     else{
  //       this.authors = this.authors;
  //     }
  //   }))
  // }
   onPutAuthor(){
      this.authoService.putSever(this.id, this.authorModel )
         .subscribe()
       this.authorModel = new Authors();
   }
}