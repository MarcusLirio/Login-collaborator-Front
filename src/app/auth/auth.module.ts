import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
