import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './customers/customer-form/customer-form.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { AccountDetailsComponent } from './accounts/account-details/account-details.component';
import { AccountEditComponent } from './accounts/account-edit/account-edit.component';
import { AccountFormComponent } from './accounts/account-form/account-form.component';
import { AccountListComponent } from './accounts/account-list/account-list.component';
import { TransactionsFormComponent } from './transactions/transactions-form/transactions-form.component';
import { TransactionsListComponent } from './transactions/transactions-list/transactions-list.component';
import { TransactionsDetailsComponent } from './transactions/transactions-details/transactions-details.component';
import { TransactionsEditComponent } from './transactions/transactions-edit/transactions-edit.component';
import { LoanDetailsComponent } from './loans/loan-details/loan-details.component';
import { LoanEditComponent } from './loans/loan-edit/loan-edit.component';
import { LoanFormComponent } from './loans/loan-form/loan-form.component';
import { LoanListComponent } from './loans/loan-list/loan-list.component';

const routes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: 'add-customer', component: CustomerFormComponent },
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
  { path: 'customers/edit/:id', component: CustomerEditComponent },
  { path: 'customers/details/:id', component: CustomerDetailsComponent },
  { path: 'accounts', component: AccountListComponent },
  { path: 'accounts/add', component: AccountFormComponent },
  { path: 'accounts/edit/:id', component: AccountEditComponent },
  { path: 'accounts/details/:id', component: AccountDetailsComponent },
  { path: 'transactions', component: TransactionsListComponent },
  { path: 'transactions/add', component: TransactionsFormComponent },
  { path: 'transactions/edit/:id', component: TransactionsEditComponent },
{ path: 'transactions/details/:id', component: TransactionsDetailsComponent },
{ path: 'loans', component: LoanListComponent },
  { path: 'loans/add', component: LoanFormComponent },
  { path: 'loans/edit/:id', component: LoanEditComponent },
  { path: 'loans/:id', component: LoanDetailsComponent },
  {path: 'loans/details/:id', component: LoanDetailsComponent}





];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
