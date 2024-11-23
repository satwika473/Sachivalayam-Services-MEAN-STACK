import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    stocks: [
      { ticker: 'AAPL', quantity: 50, price: 150 },
      { ticker: 'GOOGL', quantity: 10, price: 2800 },
      { ticker: 'MSFT', quantity: 20, price: 300 }
    ]
  };

  constructor() { }

  ngOnInit(): void {
    // Fetch or initialize user data here
  }
}
