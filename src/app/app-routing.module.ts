import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'', pathMatch:'full', loadComponent: () => import('./components/core/home/home.component').then ( (c) => c.HomeComponent ) },
  {path:'signup', loadComponent: () => import('./components/core/reactive-forms/signup/signup.component').then ( (c) => c.SignupComponent ) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
