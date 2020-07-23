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
  private keyA = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJib29rOnJlYWQifSx7ImF1dGhvcml0eSI6ImF1dGhvcjpyZWFkIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJib29rOndyaXRlIn0seyJhdXRob3JpdHkiOiJhdXRob3I6d3JpdGUifV0sImlhdCI6MTU5NTQ5OTg1NiwiZXhwIjoxNTk1NTQxNjAwfQ.HyPP4Vl-e4rGJG5C0UZknp8QMMNuR14ZpH5ngWhIAvuleF25ugbilHjRy1XSSI4lII5AF3hzwn-IYrUm8JUgMQ';
  private keyU = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfU1RVREVOVCJ9LHsiYXV0aG9yaXR5IjoiYXV0aG9yOnJlYWQifSx7ImF1dGhvcml0eSI6ImJvb2s6cmVhZCJ9XSwiaWF0IjoxNTk1NDg4NDQ4LCJleHAiOjE1OTU1NDE2MDB9.vIvWbPHAZ1Ltm2L2EuN-vhBgjU36COj_1KKcMpo_7JqyBFvMw3N0U9MXSur-M9TijvlLE98vH4fqYaEqvUgfuA'
  constructor(private http:HttpClient) { }
  getServerBook(){
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json',
      'Authorization':this.keyA
    })
    return this.http.get<Book[]>(this.url+"/getAllBooks",{headers: httpHeaders});
  }
  postSeverBook(Book: Book, id){
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json',
      'Authorization':this.keyA
    })
    return this.http.post<any>(this.url+"/createBook/"+id,Book,{headers: httpHeaders})
  }
  deleteServerBook(id){
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json',
      'Authorization':this.keyA
    })
    return this.http.delete(this.url+"/deleteBook/"+id,{headers: httpHeaders})
  }
  putSeverBook(id, Book:Book){
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json',
      'Authorization':this.keyA
    })
    return this.http.put(this.url+"putBook/"+id,Book,{headers: httpHeaders})
  }
  getServiceBookId(id){
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json',
      'Authorization':this.keyA
    })
    return this.http.get<Book[]>(this.url+"/getBook/"+id,{headers: httpHeaders})

  }
}
