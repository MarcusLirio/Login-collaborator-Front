import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { httpInterceptorProviders } from './http-interceptors';
import { AuthGuard } from './auth/shared/auth.guard';
import { TableService } from './services/table.service';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { TableComponent } from './layout/components/table/table.component';
import { AdminComponent } from './layout/admin/admin.component';

import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    TableComponent,
    AdminComponent
  ],
  imports: [
    AppRoutingModule,
    MatTableModule,
    MatSidenavModule,
    BrowserAnimationsModule,
  ],  
  providers: [
    httpInterceptorProviders,
    AuthGuard,
    TableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
