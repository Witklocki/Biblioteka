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
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CheckComponent } from './views/general/check/check.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    NavigationComponent,
    CheckComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    MatDialogModule, 
    MatButtonModule,
  ],
  providers: [AuthorService, BookService],
  bootstrap: [AppComponent]
})

export class AppModule { }
