import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService) { }
  userModel = new User();
  ngOnInit() {
  }

  onSubmit(){
    console.log(this.userModel)
     this.loginService.postLogin(this.userModel)
         .subscribe(a => console.log(a))
  }
}
