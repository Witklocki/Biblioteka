import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowDataComponent } from './service/show-data/show-data.component';
import { AddAuthorComponent } from "./views/main-page/add-author/add-author.component";
import { AddBookComponent } from "./views/main-page/add-book/add-book.component";
import { MainPageComponent } from "./views/main-page/main-page.component";
import { EditAuthorComponent } from "./service/edit-author/edit-author.component";
import { EditBookComponent } from "./service/edit-book/edit-book.component";
import { DeleteAuthorComponent } from "./service/delete-author/delete-author.component";
import { PageNotFoundComponent } from "./views/main-page/page-not-found/page-not-found.component";
import { DeleteBookComponent } from './service/delete-book/delete-book.component';
import { LoginComponent } from "./views/general/login/login.component";

const routes: Routes = [
  { path: 'show-data', component: ShowDataComponent },
  { path: 'add-author', component: AddAuthorComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'edit-author', component: EditAuthorComponent },
  { path: 'edit-book', component: EditBookComponent },
  { path: 'delete-author', component: DeleteAuthorComponent },
  { path: 'delete-book', component: DeleteBookComponent },
  { path: 'login', component: LoginComponent },

  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export wszyskich elementów używanych przez rooting
export const routingComponent = [ShowDataComponent, AddAuthorComponent, AddBookComponent,
  MainPageComponent, EditAuthorComponent, EditBookComponent, DeleteAuthorComponent, PageNotFoundComponent, DeleteBookComponent, LoginComponent]
