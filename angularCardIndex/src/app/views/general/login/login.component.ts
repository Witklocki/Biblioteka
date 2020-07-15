import { Component, OnInit } from '@angular/core';
import { ServernaukaService } from 'src/app/servernauka.service';
import { User } from 'src/app/service/Mthods/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private _servernaukaService:ServernaukaService) { }
  userModel = new User();
  login= new User().name
  pass = new User().pass
  ngOnInit() {
  }
  onLogin(){
    console.log(this.login, this.pass)
  
  }
}
