import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // ✅ match backend DTO
  user = {
    fullName: '',
    email: '',
    phone: '',
    password: '',
    role: ''
  };

  constructor(private auth: AuthService, private router: Router) {}

  onRegister() {
    // send the whole object directly
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
