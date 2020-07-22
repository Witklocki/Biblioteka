import { Injectable } from '@angular/core';
import { Book } from "src/app/model/Book";
import { Authors } from '../model/Author';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  private id = new Authors().id;
  private url = "http://localhost:9090";
  private key = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJhdXRob3I6cmVhZCJ9LHsiYXV0aG9yaXR5IjoiYm9vazpyZWFkIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJib29rOndyaXRlIn0seyJhdXRob3JpdHkiOiJhdXRob3I6d3JpdGUifV0sImlhdCI6MTU5NTQyMjcyNCwiZXhwIjoxNTk1OTczNjAwfQ.dsa7DnsxzkE8e_CL8g76FvDyiNUr2hS9LRww_IUBmKW9CHpwzMrfofGG1gV4oo-CRdTin6DnKNAbaBa6PurI5A';

  constructor(private http:HttpClient) { }
  getServerBook(){
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json',
      'Authorization':this.key
    })
    return this.http.get<Book[]>(this.url+"/getAllBooks",{headers: httpHeaders});
  }
  postSeverBook(Book: Book, id){
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json',
      'Authorization':this.key
    })
    return this.http.post<any>(this.url+"/createBook/"+id,Book,{headers: httpHeaders})
  }
  deleteServerBook(id){
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json',
      'Authorization':this.key
    })
    return this.http.delete(this.url+"/deleteBook/"+id,{headers: httpHeaders})
  }
  putSeverBook(id, Book:Book){
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json',
      'Authorization':this.key
    })
    return this.http.put(this.url+"putBook/"+id,Book,{headers: httpHeaders})
  }
  getServiceBookId(id){
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json',
      'Authorization':this.key
    })
    return this.http.get<Book[]>(this.url+"/getBook/"+id,{headers: httpHeaders})

  }
}
