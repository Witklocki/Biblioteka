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
    return this.http.post(this.url+"/login",User)
  }
}
