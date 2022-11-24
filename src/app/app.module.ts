import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { httpInterceptorProviders } from './http-interceptors';
import { AuthGuard } from './auth/shared/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
  ],  
  providers: [
    httpInterceptorProviders,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
