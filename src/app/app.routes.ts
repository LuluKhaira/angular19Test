import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './menu/login/login.component';
import { SignupComponent } from './menu/signup/signup.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,  
  },
  {
    path: 'signup',
    component: SignupComponent,  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}