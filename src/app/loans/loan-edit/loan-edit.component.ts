import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Loan, LoanService } from '../loan.service';

@Component({
  selector: 'app-loan-edit',
  templateUrl: './loan-edit.component.html',
  styleUrls: ['./loan-edit.component.css']
})
export class LoanEditComponent implements OnInit {
  loanForm!: FormGroup;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private loanService: LoanService,
    private router: Router
  ) {}

  get f() {
    return this.loanForm.controls;
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loanForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(0.01)]],
      interestRate: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      termMonths: ['', [Validators.required, Validators.min(1)]],
      startDate: ['', Validators.required],
      endDate: [''],
      customerId: ['', [Validators.required, Validators.min(1)]]
    });

    this.loanService.getLoan(this.id).subscribe(loan => this.loanForm.patchValue(loan));
  }

  onSubmit() {
    if (this.loanForm.valid) {
      this.loanService.updateLoan(this.id, this.loanForm.value).subscribe(() => {
        this.router.navigate(['/loans']);
      });
    }
  }
}
