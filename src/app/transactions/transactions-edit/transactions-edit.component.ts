import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService, Transaction } from '../transaction.service';
import { AccountService, Account } from '../../accounts/account.service';

@Component({
  selector: 'app-transactions-edit',
  templateUrl: './transactions-edit.component.html'
})
export class TransactionsEditComponent implements OnInit {
  form!: FormGroup;
  id!: number;
  accounts: Account[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private txService: TransactionService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    // load dropdown
    this.accountService.getAccounts().subscribe({
      next: (data) => (this.accounts = data),
      error: () => alert('Failed to load accounts')
    });

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.form = this.fb.group({
      transactionType: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(0.01)]],
      transactionDate: ['', Validators.required],
      accountId: ['', Validators.required]
    });

    if (this.id) {
      this.txService.getById(this.id).subscribe((tx) => {
        this.form.patchValue(tx);
      });
    }
  }

  save(): void {
    if (this.form.invalid) return;
    const tx = this.form.value;

    this.txService.update(this.id, tx).subscribe({
      next: () => this.router.navigate(['/transactions']),
      error: () => alert('Update failed')
    });
  }
}
