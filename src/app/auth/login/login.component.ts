import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';
import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  login: Login = new Login();

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    try {
      if(this.login.username == 'admin'){
        const result = await this.accountService.login(this.login);
        console.log(`Login efetuado: ${result}`);
        this.router.navigate(['/admin']);
        
      }else{
        const result = await this.accountService.login(this.login);
        console.log(`Login efetuado: ${result}`);
        this.router.navigate(['/page']);
      }
    } catch (error) {
      console.error(error);
    }
  }
}
