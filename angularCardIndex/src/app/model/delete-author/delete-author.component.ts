import { Component, OnInit } from '@angular/core';
import { ServernaukaService } from 'src/app/servernauka.service';
import { Authors } from 'src/app/service/Mthods/Author';
import { Book } from 'src/app/service/Mthods/Book';

@Component({
  selector: 'app-delete-author',
  templateUrl: './delete-author.component.html',
  styleUrls: ['./delete-author.component.css']
})
export class DeleteAuthorComponent implements OnInit {
  authorModel = new Authors();
  bookModel = new Book();

  public authors = [];
  public autho =[];

  constructor(private _servernaukaService:ServernaukaService) {  }

  ngOnInit() {

    this.authors.push(this._servernaukaService.getServeAll()
    .subscribe(res =>{ 
      console.log(res)
      this.authors = res}))
    
     
     console.log(this.authors);
  }

  onDelete(id){
     this._servernaukaService.deleteServer(id)
         .subscribe(data => {console.log("Deleted"), 
          this.authors = this.authors.filter((element) =>
          { return element.id !== id; })
        },
         error => console.log("error",error),
         )
  }

}
