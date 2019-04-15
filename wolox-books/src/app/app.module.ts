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
import { AuthComponent } from './screens/auth/auth.component';
import { LocalStorageService } from '@services/local-storage.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UnauthCardComponent,
    AuthComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LocalStorageService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
