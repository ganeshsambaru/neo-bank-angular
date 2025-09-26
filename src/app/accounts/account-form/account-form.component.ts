import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html'
})
export class AccountFormComponent implements OnInit {
  form!: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      accountNumber: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      accountType: ['', [Validators.required, Validators.maxLength(50)]],
      balance: [0, [Validators.required, Validators.min(0)]],
      customerId: ['', [Validators.required, Validators.min(1)]]
    });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.accountService.addAccount(this.form.value).subscribe({
      next: () => {
        alert('Account added');
        this.router.navigate(['/accounts']);
      },
      error: () => alert('Failed to save account')
    });
  }
}
