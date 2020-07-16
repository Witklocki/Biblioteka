import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
//  to do general, to pewnie będziesz chciał wykorzystać w wielu miejsach apki nie tylko przy mainpagu ;)
export class PageNotFoundComponent implements OnInit {

  constructor() { }
  public error = "Page not found";
  public text = "Use MENU bar on top of page "
  ngOnInit() {
  }

}
