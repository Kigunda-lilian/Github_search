import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoComponent } from './repo/repo.component';
import { UserComponent } from './user/user.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [


  {path:'repo',component:RepoComponent},
  {path:'user',component:UserComponent},
  { path:'**', component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
