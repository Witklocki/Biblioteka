import { Injectable } from '@angular/core';
import { Authors } from 'src/app/model/Author';
import { update } from 'src/app/model/Update';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  
  private url = "http://localhost:9090";

  constructor( private http:HttpClient) {  }
  getServeAll(){
    return this.http.get<Authors[]>(this.url);
  }
  postServer(Author: Authors){
    return this.http.post<any>(this.url+"/create", Author)
  }
  deleteServer(id){
    return this.http.delete(this.url+"/delete/"+id,id)
  }
  putSever(id, Update:update){
    return this.http.put(this.url+"/put/"+id, Update)
  }
}

