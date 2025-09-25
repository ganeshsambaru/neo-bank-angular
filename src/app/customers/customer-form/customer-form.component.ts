import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {
  form: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private customerService: CustomerService) {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      address: ['']
    });
  }

  submit() {
    if (this.form.valid) {
      this.customerService.addCustomer(this.form.value).subscribe({
        next: () => {
          this.successMessage = '✅ Customer added successfully!';
          this.errorMessage = '';
          this.form.reset();
        },
        error: () => {
          this.errorMessage = '❌ Failed to add customer. Please try again.';
          this.successMessage = '';
        }
      });
    }
  }
}
