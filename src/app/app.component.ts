import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service'; // adjust the path if needed

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'neo-bank-angular';

  // make AuthService public so it’s accessible in the template
  constructor(public auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
    // after logout go to login page
    this.router.navigate(['/login']);
  }
}
