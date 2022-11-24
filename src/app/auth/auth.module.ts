import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { CreateAccountRoutingModule } from './create-account/create-account-routing.module';
import { AuthComponent } from './auth.component';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    CreateAccountRoutingModule,
    AuthRoutingModule,
  ],
  bootstrap: [AuthComponent],
  declarations: [
    AuthComponent
  ]
})
export class AuthModule { }
