import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/service/author.service';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private authors = [];
  constructor(private authorServer:AuthorService) { }

  change(id){
    this.authors = this.authors.filter((element)=>{return element.id !== id})
  }

  ngOnInit() {
    this.authors.push(this.authorServer.getServeAll()
    .subscribe(res =>{ this.authors = res}))
  }
  onDelete(id){
    this.authorServer.deleteServer(id).subscribe(data => {this.change(id)})
  }
  onChange(id){
    alert("change")
  }
}
