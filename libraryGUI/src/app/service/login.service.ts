import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = "http://localhost:9090";

  constructor(private http:HttpClient) { }
  postLogin(User: User){
    const httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': 'http://localhost:4200',
    })
    return this.http.post<any>(this.url+"/login",User,{headers:httpHeaders})
  }
}
