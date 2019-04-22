import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@screens/unauth/login/login.component';
import { RegisterComponent } from '@screens/unauth/register/register.component';
import { BookListComponent } from '@screens/auth/book-list/book-list.component';
import { AuthGuard } from 'guards/auth.guard';
import { UnauthGuard } from 'guards/unauth.guards';

const routes: Routes = [
  {
    path: 'books',
    component: BookListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnauthGuard]
  },
  {
    path: 'sign-up',
    component: RegisterComponent,
    canActivate: [UnauthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
