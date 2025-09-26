import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account, AccountService } from '../account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html'
})
export class AccountListComponent implements OnInit {
  accounts: Account[] = [];

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts(): void {
    this.accountService.getAccounts().subscribe({
      next: (data) => (this.accounts = data),
      error: () => alert('Failed to load accounts')
    });
  }

  editAccount(id: number): void {
    this.router.navigate(['/accounts/edit', id]);
  }

  deleteAccount(id: number): void {
    if (confirm('Are you sure to delete this account?')) {
      this.accountService.deleteAccount(id).subscribe({
        next: () => this.loadAccounts(),
        error: () => alert('Failed to delete account')
      });
    }
  }

  viewAccount(id: number): void {
    this.router.navigate(['/accounts/details', id]);
  }
}
