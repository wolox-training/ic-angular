import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from '@screens/unauth/register/register.component';
import { UserService } from '@services/user.service';
import { LoginComponent } from './screens/unauth/login/login.component';
import { UnauthCardComponent } from './screens/unauth/components/unauth-card/unauth-card.component';
import { LocalStorageService } from '@services/local-storage.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BookListComponent } from './screens/auth/book-list/book-list.component';
import { AuthGuard } from 'guards/auth.guard';
import { UnauthGuard } from 'guards/unauth.guards';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UnauthCardComponent,
    NavBarComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    LocalStorageService,
    UnauthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
