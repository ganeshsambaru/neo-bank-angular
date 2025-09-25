import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service'; // adjust path to your service

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html'
})
export class CustomerFormComponent implements OnInit {
  form!: FormGroup; // single form property
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.maxLength(200)]]
    });
  }

  // convenience getter for template
  get f() {
    return this.form.controls;
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.customerService.addCustomer(this.form.value).subscribe({
      next: () => {
        this.successMessage = 'Customer added successfully';
        this.errorMessage = '';
        this.form.reset();
        // navigate back after a second, optional:
        setTimeout(() => this.router.navigate(['/customers']), 1000);
      },
      error: err => {
        console.error(err);
        this.errorMessage = 'Failed to save customer';
        this.successMessage = '';
      }
    });
  }
}
