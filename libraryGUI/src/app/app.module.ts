import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './views/general/navigation/navigation.component';
import { AuthorService } from './service/author.service';
import { BookService } from './service/book.service';
import { EditComponent } from './views/main-page/edit/edit.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    NavigationComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
    
  ],
  providers: [AuthorService, BookService],
  bootstrap: [AppComponent]
})

export class AppModule { }
