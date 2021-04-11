import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ColorSketchModule } from 'ngx-color/sketch';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomizeMinionComponent } from './components/customize-minion/customize-minion.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { MinionComponent } from './components/minion/minion.component';
import { SignupComponent } from './components/signup/signup.component';
import { ClientService } from './services/client.service';
import { GuardTokenService } from './services/guard-token.service';
import { TokenService } from './services/token.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomizeMinionComponent,
    ErrorComponent,
    HeaderComponent,
    HomeComponent,
    MinionComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ColorSketchModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    ClientService,
    GuardTokenService,
    TokenService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
