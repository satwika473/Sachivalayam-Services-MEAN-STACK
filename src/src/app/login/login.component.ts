// login.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  newUsername: string;
  email: string;
  newPassword: string;
  showRegisterForm = false;

  constructor() {
    this.username = '';
    this.password = '';
    this.newUsername = '';
    this.email = '';
    this.newPassword = '';
  }

  login() {
    console.log('Logging in with:', this.username, this.password);
  }

  register() {
    console.log('Registering with:', this.newUsername, this.email, this.newPassword);
  }

  showRegister() {
    this.showRegisterForm = true;
  }

  showLogin() {
    this.showRegisterForm = false;
  }
}
