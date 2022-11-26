import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DadosDev } from '../../../models/users/dadosDev.model';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'table-devs',
  templateUrl: './table.component.html',

})
export class TableComponent implements AfterViewInit {

  dados!: DadosDev[];

  

  displayedColumns: string[] = ['id', 'name', 'email', 'cpf', 'cnpj', 'sexo', 'celular', 'datanascimento', 'skype', 'senha', 'dadosbancarios', 'ativo', 'datainicio', 'datadesligamento', 'datadesligamento', 'image', 'acoes'];

  constructor(
    private api: TableService
  ) { }
  
  
 async ngAfterViewInit(): Promise<void>
  {
    this.dados = await this.api.getUsers().then((x) => {
      return x
    })
    console.log(this.dados)
  }

  edit(){
    document.getElementById('')
  }
}


