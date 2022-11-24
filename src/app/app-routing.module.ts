import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
    {
      path: '', component: LayoutComponent,
    },
    {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
