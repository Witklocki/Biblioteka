import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ShowDataComponent } from './model/show-data/show-data.component';
import { AddAuthorComponent } from "./views/main-page/add-author/add-author.component";
import { AddBookComponent } from "./views/main-page/add-book/add-book.component";
import { MainPageComponent } from "./views/main-page/main-page.component";
import {EditAuthorComponent} from "./model/edit-author/edit-author.component";
import {EditBookComponent} from "./model/edit-book/edit-book.component";
import {DeleteAuthorComponent} from "./model/delete-author/delete-author.component";

const routes: Routes = [
  {path:'test', component: TestComponent },
  {path:'show-data', component: ShowDataComponent },
  {path: 'add-author', component: AddAuthorComponent},
  {path: 'add-book', component: AddBookComponent},
  {path:'main-page', component: MainPageComponent},
  {path:'edit-author', component: EditAuthorComponent},
  {path:'edit-book', component: EditBookComponent},
  {path:'delete-author', component: DeleteAuthorComponent},


  // { path: '**', component:  },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [TestComponent, ShowDataComponent, AddAuthorComponent, AddBookComponent,
   MainPageComponent,EditAuthorComponent,EditBookComponent,DeleteAuthorComponent  ]
