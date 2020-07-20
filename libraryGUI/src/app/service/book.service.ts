import { Injectable } from '@angular/core';
import { Book } from "src/app/model/Book";
import { Authors } from '../model/Author';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  private id = new Authors().id;
  private url = "http://localhost:9090";

  constructor(private http:HttpClient) { }
  getServerBook(){
    return this.http.get<Book[]>(this.url+"/getAllBooks");
  }
  postSeverBook(Book: Book, id){
    return this.http.post<any>(this.url+"/createBook/"+id,Book)
  }
  deleteServerBook(id){
    return this.http.delete(this.url+"/deleteBook/"+id,id)
  }
  putSeverBook(id, Book:Book){
    return this.http.put(this.url+"putBook/"+id,Book)
  }
  getServiceBookId(id){
    return this.http.get<Book[]>(this.url+"/getBook/"+id)

  }
}
