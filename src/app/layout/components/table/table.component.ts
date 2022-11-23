import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DadosDev } from '../../../models/users/dadosDev.model';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']

})
export class TablesComponent implements AfterViewInit {

  dados!: DadosDev[];

  displayedColumns: string[] = ['id', 'name', 'email', 'cpf', 'cnpj', 'sexo', 'celular', 'datanascimento', 'skype', 'senha', 'dadosbancarios', 'ativo', 'datainicio', 'datadesligamento', 'datadesligamento', 'image'];

  constructor(
    private api: TableService
  ) { }
  
  
 async ngAfterViewInit(): Promise<void>
  {
    this.dados = await this.api.getUsers().then((x) => {
      return x
    })
  }
}


