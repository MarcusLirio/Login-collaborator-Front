import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account.component';
import { CreateAccountRoutingModule } from './create-account-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations:[
    CreateAccountComponent,
  ],
  imports: [
    CommonModule,
    CreateAccountRoutingModule,
    FormsModule
  ]
})
export class CreateAccountModule { }
