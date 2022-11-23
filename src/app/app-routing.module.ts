import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '', component: LayoutComponent,
      children: [
        {path: '', loadChildren: () => import('./layout/components/table/table.module').then((m) => m.TableModule)}
      ]
    },
    {path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
