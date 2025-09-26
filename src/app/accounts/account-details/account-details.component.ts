import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account, AccountService } from '../account.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html'
})
export class AccountDetailsComponent implements OnInit {
  account?: Account;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.accountService.getAccount(id).subscribe({
      next: (data) => (this.account = data),
      error: () => alert('Failed to load account')
    });
  }

  back(): void {
    this.router.navigate(['/accounts']);
  }

  edit(): void {
    if (this.account) {
      this.router.navigate(['/accounts/edit', this.account.id]);
    }
  }
}
