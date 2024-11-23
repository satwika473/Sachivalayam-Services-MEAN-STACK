import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  message: string = '';
  messageClass: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    this.http.post<any>('http://localhost:8080/user/register', {
      username: this.username,
      email: this.email,
      password: this.password
    }).subscribe(
      response => {
        // Handle successful registration
        this.message = 'Registration successful!';
        this.messageClass = 'success';
        
        // Clear input fields
        this.username = '';
        this.email = '';
        this.password = '';
        
        // Navigate to login page after 2 seconds
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error => {
        // Handle error
        if (error.status === 400 && error.error.message === 'Username already taken') {
          this.message = 'Username already taken. Please choose a different username.';
        } else {
          this.message = 'Registration Successful';
        }
        this.messageClass = 'error';
      }
    );
  }
}
