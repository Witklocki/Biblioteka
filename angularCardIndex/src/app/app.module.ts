import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import {ServernaukaService} from './servernauka.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './views/main-page/main-page.component';
import { AddAuthorComponent } from './views/main-page/add-author/add-author.component';
import { AddBookComponent } from './views/main-page/add-book/add-book.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    MainPageComponent,
    AddAuthorComponent,
    AddBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ServernaukaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
