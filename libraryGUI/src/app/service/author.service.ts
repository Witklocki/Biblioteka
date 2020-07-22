import { Injectable } from '@angular/core';
import { Authors } from 'src/app/model/Author';
import { update } from 'src/app/model/Update';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  
  private url = "http://localhost:9090";
  private key = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJhdXRob3I6cmVhZCJ9LHsiYXV0aG9yaXR5IjoiYm9vazpyZWFkIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJib29rOndyaXRlIn0seyJhdXRob3JpdHkiOiJhdXRob3I6d3JpdGUifV0sImlhdCI6MTU5NTQyMjcyNCwiZXhwIjoxNTk1OTczNjAwfQ.dsa7DnsxzkE8e_CL8g76FvDyiNUr2hS9LRww_IUBmKW9CHpwzMrfofGG1gV4oo-CRdTin6DnKNAbaBa6PurI5A'

  constructor( private http:HttpClient) {  }
  getServeAll(){
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json',
      'Authorization':this.key
    })
    return this.http.get<Authors[]>(this.url,{headers: httpHeaders});
  }
  getAuthor(id){
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json',
      'Authorization':this.key
    })
    return this.http.get<Authors[]>(this.url+"/get/"+id,{headers: httpHeaders})
  }
  postServer(Author: Authors){
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json',
      'Authorization':this.key
    })
    return this.http.post<any>(this.url+"/create", Author,{headers: httpHeaders})
  }
  deleteServer(id){
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json',
      'Authorization':this.key
    })
    return this.http.delete(this.url+"/delete/"+id,{headers: httpHeaders})
  }
  putSever(id, Update:update){
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json',
      'Authorization':this.key
    })
    return this.http.put(this.url+"/put/"+id, Update,{headers: httpHeaders})
  }
}

