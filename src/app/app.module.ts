import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './auth/login/login.component';
import { CreateAccountComponent } from './auth/create-account/create-account.component';


import { httpInterceptorProviders } from './http-interceptors';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth/shared/auth.guard';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    

  ],
  imports: [
    AppRoutingModule,
    LayoutModule,

  ],
  providers: [
    httpInterceptorProviders,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
