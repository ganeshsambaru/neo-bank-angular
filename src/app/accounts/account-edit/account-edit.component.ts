// src/app/accounts/account-edit/account-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, Account } from '../account.service';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html'
})
export class AccountEditComponent implements OnInit {
  form!: FormGroup;
  id!: number;
  loading = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    // read id from route
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    // build reactive form with same validators as creation
    this.form = this.fb.group({
      accountNumber: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50), Validators.pattern('^[A-Za-z0-9\\-]+$')]],
      accountType: ['', [Validators.required, Validators.maxLength(50)]],
      balance: [0, [Validators.required, Validators.min(0)]],
      customerId: [null, [Validators.required, Validators.min(1)]]
    });

    // load data
    this.loadAccount();
  }

  private loadAccount(): void {
    if (!this.id) {
      this.errorMessage = 'Invalid account id';
      return;
    }

    this.loading = true;
    this.accountService.getAccount(this.id).subscribe({
      next: (acc) => {
        // patch values into the form
        this.form.patchValue({
          accountNumber: acc.accountNumber,
          accountType: acc.accountType,
          balance: acc.balance,
          customerId: acc.customerId
        });
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Failed to load account';
        this.loading = false;
      }
    });
  }

  // convenience getter for template (use bracket syntax in template if needed)
  get f() {
    return this.form.controls;
  }

  submit(): void {
    // show validation messages
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // prepare payload and ensure numeric fields are numbers
    const payload: Account = {
      accountNumber: String(this.form.value.accountNumber).trim(),
      accountType: String(this.form.value.accountType).trim(),
      balance: Number(this.form.value.balance),
      customerId: Number(this.form.value.customerId)
    };

    this.accountService.updateAccount(this.id, payload).subscribe({
      next: () => {
        this.successMessage = 'Account updated successfully';
        this.errorMessage = '';
        // navigate back after short delay so user sees message (optional)
        setTimeout(() => this.router.navigate(['/accounts']), 700);
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Failed to update account';
        this.successMessage = '';
      }
    });
  }
}
