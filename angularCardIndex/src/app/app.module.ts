import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServernaukaService } from './servernauka.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './views/general/navigation/navigation.component';



/*
* Zrobie Ci jeszcze dodatkowo code review jak ogarniesz tutaj:
- Czyść kod zanim spushujesz - to że to nie jest kod produkcyjny to nie znaczy że nie ma mieć standardów
- Żadnych console.logów nie powinno być na masterze
- Poczytaj co to jest metoda a co to jest model
- Poświęć chwile i wejdz https://github.com/pjugowiec/cardIndexApp/tree/master/angularCardIndex/src, przejrzyj strukture, zobacz co gdzie jest umiejscowione
*/
@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,


  ],
  providers: [ServernaukaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
