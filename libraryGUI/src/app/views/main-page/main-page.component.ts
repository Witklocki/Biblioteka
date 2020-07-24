import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/service/author.service';
import { MatDialog } from '@angular/material';
import { CheckComponent } from '../general/check/check.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { AddBookComponent } from './add-book/add-book.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
 public user = "Gall Anonymous";
 public admin = "you have permition to admin tool"
 public permition = false;
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

}
