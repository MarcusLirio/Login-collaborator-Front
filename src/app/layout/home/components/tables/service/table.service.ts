import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(
    public http: HttpClient
  ) { }

  getDev(){
    this.http.get('http://localhost:3000/dadosdevs')
  }
}
