import { Injectable } from '@angular/core';
import { Authors } from 'src/app/model/Author';
import { update } from 'src/app/model/Update';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  
  private url = "http://localhost:9090";
  private keyA = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJhdXRob3I6cmVhZCJ9LHsiYXV0aG9yaXR5IjoiYm9vazpyZWFkIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJib29rOndyaXRlIn0seyJhdXRob3JpdHkiOiJhdXRob3I6d3JpdGUifV0sImlhdCI6MTU5NTU5NTY4MywiZXhwIjoxNTk1NjI4MDAwfQ.zyQxuU5LUmAZNi-kpe6wMOstiIFiNQ51dclxaAGxZLVwmK6SjLzp2Z7mGUO-VczvNWLszEnuwi4kjCR0SCFoJg'
  private keyU = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfU1RVREVOVCJ9LHsiYXV0aG9yaXR5IjoiYXV0aG9yOnJlYWQifSx7ImF1dGhvcml0eSI6ImJvb2s6cmVhZCJ9XSwiaWF0IjoxNTk1NDg4NDQ4LCJleHAiOjE1OTU1NDE2MDB9.vIvWbPHAZ1Ltm2L2EuN-vhBgjU36COj_1KKcMpo_7JqyBFvMw3N0U9MXSur-M9TijvlLE98vH4fqYaEqvUgfuA'
  constructor( private http:HttpClient) {  }
  getServeAll(){
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json',
      'Authorization':this.keyA
    })
    return this.http.get<Authors[]>(this.url,{headers: httpHeaders});
  }
  getAuthor(id){
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json',
      'Authorization':this.keyA
    })
    return this.http.get<Authors[]>(this.url+"/get/"+id,{headers: httpHeaders})
  }
  postServer(Author: Authors){
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json',
      'Authorization':this.keyA
    })
    return this.http.post<any>(this.url+"/create", Author,{headers: httpHeaders})
  }
  deleteServer(id){
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json',
      'Authorization':this.keyA
    })
    return this.http.delete(this.url+"/delete/"+id,{headers: httpHeaders})
  }
  putSever(id, Update:update){
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json',
      'Authorization':this.keyA
    })
    return this.http.put(this.url+"/put/"+id, Update,{headers: httpHeaders})
  }
}

