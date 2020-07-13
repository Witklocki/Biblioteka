import { Component, OnInit } from '@angular/core';
import {ServernaukaService} from '../servernauka.service';
import {FormGroup,FormControl} from '@angular/forms'
import { Authors } from '../service/Mthods/Author';
import { error } from 'console';
import { element } from 'protractor';
import { update } from '../service/Mthods/Update';
import { Book } from '../service/Mthods/Book';

 

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  authorModel = new Authors();
  updateModel = new update();
  bookModel = new Book();
  done = true;
  change = false;

  public authors = [];
  public autho =[];

  

  constructor(private _servernaukaService:ServernaukaService) { 
  }
  public test ='++++++++++++++++++++';
 

  ngOnInit() {

    this.authors.push(this._servernaukaService.getServeAll()
    .subscribe(res =>{ 
      console.log(res)
      this.authors = res}))
    
     
     console.log(this.authors);
  }

  onSubmit() {
    this.done = false;
    this._servernaukaService.postServer(this.authorModel)
    .subscribe(
    data =>{console.log("Success", data)},
    error => console.log("error",error)
    )
    this.authorModel = new Authors()
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
  changeOn(){
    this.change = true;
  }
  onPut(id){
    console.log("change", id, this.updateModel )
     this._servernaukaService.putSever(id ,this.updateModel).subscribe(
       data => console.log("Changed"),
       error => console.log("error", error)
       
     )
  }
 


}

