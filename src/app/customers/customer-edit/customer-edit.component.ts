import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  form!: FormGroup;
  id!: number;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    // build form with validators
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.maxLength(200)]]
    });

    // load existing customer
    this.customerService.getCustomer(this.id).subscribe({
      next: c => this.form.patchValue(c),
      error: () => this.errorMessage = 'Failed to load customer.'
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.invalid) {
      // show validation errors
      this.form.markAllAsTouched();
      return;
    }

    this.customerService.updateCustomer(this.id, this.form.value).subscribe({
      next: () => {
        this.successMessage = 'Customer updated successfully!';
        this.router.navigate(['/customers']);
      },
      error: () => this.errorMessage = 'Failed to update customer.'
    });
  }
}
