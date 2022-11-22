import { Component, OnInit } from '@angular/core';
import { TableService } from './service/table.service';


export interface DadosDev {
  id: number;
  name: string;
  email: string;
  cpf: number;
  cnpj: number;
  sexo: string;
  celular: number;
  datanascimento: string;
  skype: string;
  senha: string;
  dadosbancarios: string;
  ativo: string;
  datainicio: string;
  datadesligamento: string;
  image: ImageData;
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']

})
export class TablesComponent implements OnInit {

  dados: DadosDev[] = []

  constructor(
    public api: TableService
  ) { }

  ngOnInit(): void {
    console.log(this.api.getDev())
  }
  displayedColumns: string[] = ['id', 'name', 'email', 'cpf', 'cnpj', 'sexo', 'celular', 'datanascimento', 'skype', 'senha', 'dadosbancarios', 'ativo', 'datainicio', 'datadesligamento', 'datadesligamento', 'image'];
  dataSource = this.dados;



}
