import { AccountService } from '../shared/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
})
export class CreateAccountComponent implements OnInit {
  account = {
    username: '',
    password: ''
  };

  constructor(
    private accountService: AccountService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
   if(!this.account) {
    alert('Não cadastrou')
  }
  else {
    await this.accountService.createAccount(this.account);
    this.router.navigate(['/auth/login'])
   }
  }
}
