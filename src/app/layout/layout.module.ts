import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { TablesComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    TablesComponent,
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
  ]
})
export class LayoutModule { }
