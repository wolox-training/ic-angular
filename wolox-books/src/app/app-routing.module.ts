import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@screens/unauth/login/login.component';
import { RegisterComponent } from '@screens/unauth/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sig-up', component: RegisterComponent },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
