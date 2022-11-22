import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';
import { AdminComponent } from './layout/home/admin/admin.component';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'create-account', component: CreateAccountComponent},
  {path:'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
