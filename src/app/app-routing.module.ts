import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { TableComponent } from './layout/components/table/table.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
    {path: 'page', component: LayoutComponent},
    {path: 'admin', component: AdminComponent},
    {path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
