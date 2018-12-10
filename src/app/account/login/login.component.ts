import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(
    private service: UsersService,
    private router: Router) {

  }

  ngOnInit() {
  }

  login() {
    this.service.login();
    this.router.navigate(['/home']);
  }

}
