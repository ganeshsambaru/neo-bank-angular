import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    fullName: '',
    email: '',
    phone: '',
    password: '',
    role: ''
  };

  constructor(private auth: AuthService, private router: Router) {}

  onRegister() {
    if (!this.user.fullName || !this.user.email || !this.user.password || !this.user.role) {
      return; // prevent invalid submission
    }

    this.auth.register(this.user).subscribe({
      next: () => {
        alert('Registration successful! Please log in.');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);
        alert('Registration failed');
      }
    });
  }
}
