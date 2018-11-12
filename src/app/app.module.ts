import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, RootRenderer } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutes } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';


@NgModule({
   declarations: [
      AppComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      AppRoutes,
      MaterializeModule,
      ReactiveFormsModule
   ],
   providers: [
       AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
