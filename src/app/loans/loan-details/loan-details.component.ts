import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loan, LoanService } from '../loan.service';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {
  loan!: Loan;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loanService: LoanService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loanService.getLoan(id).subscribe(data => this.loan = data);
  }

  goBack() {
    this.router.navigate(['/loans']);
  }

  editLoan() {
    this.router.navigate(['/loans/edit', this.loan.id]);
  }
}
