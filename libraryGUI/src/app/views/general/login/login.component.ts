import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  userModel = new User();
  login= new User().name
  pass = new User().pass
  ngOnInit() {
  }
  onLogin(){    
  
  }
}
