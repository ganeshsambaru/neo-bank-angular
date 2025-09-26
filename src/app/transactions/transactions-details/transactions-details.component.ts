import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService, Transaction } from '../transaction.service';

@Component({
  selector: 'app-transactions-details',
  templateUrl: './transactions-details.component.html'
})
export class TransactionsDetailsComponent implements OnInit {
  transaction?: Transaction;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private txService: TransactionService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.txService.getById(id).subscribe({
      next: (data) => (this.transaction = data),
      error: () => alert('Could not load transaction')
    });
  }

  goBack() {
  this.router.navigate(['/transactions']); // or history.back();
}

editTransaction() {
  this.router.navigate(['/transactions/edit', this.transaction?.id]);
}
}
