import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowDataComponent } from './views/main-page/show-data/show-data.component';
import { AddAuthorComponent } from "./views/main-page/add-author/add-author.component";
import { AddBookComponent } from "./views/main-page/add-book/add-book.component";
import { MainPageComponent } from "./views/main-page/main-page.component";
import { EditAuthorComponent } from "./views/main-page/edit-author/edit-author.component";
import { EditBookComponent } from "./views/main-page/edit-book/edit-book.component";
import { PageNotFoundComponent } from "./views/general/page-not-found/page-not-found.component";
import { DeleteBookComponent } from './views/main-page/delete-book/delete-book.component';
import { LoginComponent } from "./views/general/login/login.component";
import { CheckComponent } from './views/general/check/check.component';


const routes: Routes = [
  {path:'show-data', component: ShowDataComponent },
  {path: 'add-author', component: AddAuthorComponent },
  {path: 'add-book', component: AddBookComponent },
  {path:'', component: MainPageComponent },
  {path:'edit-author', component: EditAuthorComponent },
  {path:'edit-book', component: EditBookComponent },
  {path:'delete-book', component: DeleteBookComponent },
  {path: 'login', component: LoginComponent },
  {path: 'check', component: CheckComponent },

   { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export wszyskich elementów używanych przez rooting
export const routingComponent = [ ShowDataComponent, AddAuthorComponent, AddBookComponent, 
   MainPageComponent,EditAuthorComponent,EditBookComponent, PageNotFoundComponent,DeleteBookComponent, 
   LoginComponent,CheckComponent  ]
