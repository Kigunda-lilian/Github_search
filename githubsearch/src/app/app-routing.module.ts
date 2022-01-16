import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from "./search/search.component";
import {HomeComponent} from "./home/home.component";
import {RepositoriesComponent} from "./repositories/repositories.component";

const routes: Routes = [
  { path: 'search', component: SearchComponent},
  { path: 'home', component: HomeComponent},
  { path: 'repositories', component: RepositoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
