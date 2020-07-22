import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
 public user = "Gall Anonymous";
 public admin = "you have permition to admin tool"
 public permition = false;
  constructor() { }

  ngOnInit() {
  }

}
