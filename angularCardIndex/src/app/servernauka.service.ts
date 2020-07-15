import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Authors } from './service/Mthods/Author';
import { Observable } from 'rxjs';
import { update } from './service/Mthods/Update';
import { Book } from './service/Mthods/Book';


@Injectable({
  providedIn: 'root'
})
export class ServernaukaService {
  _url = "http://localhost:9090";
  
  

  constructor(private _http:HttpClient) 
  { /*this._http.post("http://localhost:9090/create",this. Data)*/}
  
  getServeAll(){
    return this._http.get<Authors[]>(this._url);
  }
  postServer(Author: Authors){
    return this._http.post<any>(this._url+"/create", Author)
  }
  deleteServer(id){
    return this._http.delete(this._url+"/delete/"+id,id)
  }
  putSever(id, Update:update){
    console.log(id)
    return this._http.put(this._url+"/put/"+id, Update)
  }
  getServerBook(){
    return this._http.get<Book[]>(this._url+"/getAllBooks");
  }
  postSeverBook(Book: Book, id){
    console.log(Book)
    return this._http.post<any>(this._url+"/createBook/"+id,Book)
  }
  deleteServerBook(id){
    return this._http.delete(this._url+"/deleteBook/"+id,id)
  }
}
