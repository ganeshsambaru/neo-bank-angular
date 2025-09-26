import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService, Transaction } from '../transaction.service';
import { AccountService, Account } from '../../accounts/account.service';

@Component({
  selector: 'app-transactions-form',
  templateUrl: './transactions-form.component.html'
})
export class TransactionsFormComponent implements OnInit {
  form!: FormGroup;
  id?: number;
  isEdit = false;

  accounts: Account[] = []; // dropdown data

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private txService: TransactionService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      transactionType: ['', [Validators.required]],
      amount: [0, [Validators.required, Validators.min(0.01)]],
      transactionDate: ['', [Validators.required]],
      accountId: ['', [Validators.required]]
    });

    // load accounts for dropdown
   this.accountService.getAccounts().subscribe({
      next: (accounts: Account[]) => (this.accounts = accounts),
      error: (err: any) => console.error('Error loading accounts', err)
    });


    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.isEdit = true;
      this.txService.getById(this.id).subscribe(tx => {
        this.form.patchValue(tx);
      });
    }
  }

  save(): void {
    if (this.form.invalid) return;

    const tx = this.form.value;

    if (this.isEdit && this.id) {
      this.txService.update(this.id, tx).subscribe(() => {
        this.router.navigate(['/transactions']);
      });
    } else {
      this.txService.create(tx).subscribe(() => {
        this.router.navigate(['/transactions']);
      });
    }
  }
}
