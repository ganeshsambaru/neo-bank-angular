import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Loan, LoanService } from '../loan.service';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css']
})
export class LoanFormComponent {
  loanForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loanService: LoanService,
    private router: Router
  ) {
    this.loanForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(0.01)]],
      interestRate: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      termMonths: ['', [Validators.required, Validators.min(1)]],
      startDate: ['', Validators.required],
      endDate: [''], // optional
      customerId: ['', [Validators.required, Validators.min(1)]]
    });
  }

  get f() {
    return this.loanForm.controls;
  }

  onSubmit() {
    if (this.loanForm.valid) {
      const loan: Loan = this.loanForm.value;
      this.loanService.addLoan(loan).subscribe(() => this.router.navigate(['/loans']));
    }
  }
}
