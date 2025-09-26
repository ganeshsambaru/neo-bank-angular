import { Component, OnInit } from '@angular/core';
import { Transaction, TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html'
})
export class TransactionsListComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private txService: TransactionService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.txService.getAll().subscribe({
      next: data => this.transactions = data,
      error: err => console.error('Error loading transactions', err)
    });
  }

  delete(id: number): void {
    if (confirm('Delete this transaction?')) {
      this.txService.delete(id).subscribe(() => this.load());
    }
  }
}
