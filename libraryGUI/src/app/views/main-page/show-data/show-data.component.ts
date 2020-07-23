import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/service/author.service';
import { MatDialog } from '@angular/material';
import { EditAuthorComponent } from '../edit-author/edit-author.component';
import { CheckComponent } from '../../general/check/check.component';
import { AddBookComponent } from '../add-book/add-book.component';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  private authors = [];
  private info;
  private do = false;
  private delete;
  constructor(private authorServer:AuthorService, private dialog:MatDialog) { }

  change(id){
    this.authors = this.authors.filter((element)=>{return element.id !== id})
  }
  comper(a,b){
    return a.id-b.id
  }
    

  ngOnInit() {
    this.authors.push(this.authorServer.getServeAll()
    .subscribe(res =>{ this.authors = res.sort(this.comper)}))
  }
  onDelete(id){
    this.delete = this.dialog.open(CheckComponent)
    this.delete.afterClosed().subscribe(data =>{
      if(data =="true"){
        this.authorServer.deleteServer(id).subscribe(data => {this.change(id)})
      }
    })
  }
  onChange(id){
    this.info = this.dialog.open(EditAuthorComponent,{data:id});
     this.info.afterClosed().subscribe(result => {
      this.authors.push(this.authorServer.getServeAll()
    .subscribe(res =>{ this.authors = res.sort(this.comper)}))
    })
  }
  addBook(id){
    this.info = this.dialog.open(AddBookComponent,{data:id});
     this.info.afterClosed().subscribe(result => {
      this.authors.push(this.authorServer.getServeAll()
    .subscribe(res =>{ this.authors = res.sort(this.comper)}))
    })
  }
}0

