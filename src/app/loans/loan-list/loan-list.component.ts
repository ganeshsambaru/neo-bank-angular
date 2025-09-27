import { Component, OnInit } from '@angular/core';
import { Loan, LoanService } from '../loan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {
  loans: Loan[] = [];
  loading = true;
successMessage: any;
errorMessage: any;

  constructor(private loanService: LoanService, private router: Router) {}

  ngOnInit(): void {
    this.loadLoans();
  }

  loadLoans() {
    this.loanService.getLoans().subscribe({
      next: (data) => {
        this.loans = data;
        this.loading = false;
      },
      error: (err) => console.error(err)
    });
  }

  deleteLoan(id: number | undefined) {
    if (!id) return;
    if (confirm('Are you sure you want to delete this loan?')) {
      this.loanService.deleteLoan(id).subscribe(() => this.loadLoans());
    }
  }
}
