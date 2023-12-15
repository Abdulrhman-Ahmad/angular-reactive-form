import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // Lazy routing using loadComponent 
  {path:'signup', loadComponent: () => import('./components/core/reactive-forms/signup/signup.component').then ( (c) => c.SignupComponent ) },
  {path:'home', pathMatch:'full', loadComponent: () => import('./components/core/home/home.component').then ( (c) => c.HomeComponent ) },

  // In case navigating for non-existing page
  {path:'**', loadComponent: () => import('./components/core/not-found/not-found.component').then( (c) => c.NotFoundComponent )},

  // Automatically redirect to home page
  {path:'', redirectTo:'home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
