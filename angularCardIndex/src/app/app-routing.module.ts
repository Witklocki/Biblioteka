import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ShowDataComponent } from './model/show-data/show-data.component';
import { AddAuthorComponent } from "./views/main-page/add-author/add-author.component";
import { AddBookComponent } from "./views/main-page/add-book/add-book.component";
import { MainPageComponent } from "./views/main-page/main-page.component";

const routes: Routes = [
  {path:'test', component: TestComponent },
  {path:'show-data', component: ShowDataComponent },
  {path: 'add-author', component: AddAuthorComponent},
  {path: 'add-book', component: AddBookComponent},
  {path:'main-page', component: MainPageComponent},


  // { path: '**', component:  },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [TestComponent, ShowDataComponent, AddAuthorComponent, AddBookComponent, MainPageComponent  ]
