import { Injectable } from '@angular/core';
import { DadosDev } from '../models/users/dadosDev.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(
  ) { }

  async getUsers(): Promise<Array<DadosDev>>{
    try {
      const res = await fetch('http://localhost:4351/dadosdevs',
      {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
      });
      return await res.json();
    } catch (err) {
      throw new Error();
    }
  }
}
