import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account.component';
import { CreateAccountRoutingModule } from './create-account-routing.module';



@NgModule({
  declarations: [CreateAccountComponent],
  imports: [
    CommonModule,
    CreateAccountRoutingModule
  ],
  exports:[CreateAccountComponent]
})
export class CreateAccountModule { }
