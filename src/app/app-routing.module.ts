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
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  // ✅ default route: if logged in you’ll be taken to /customers (AuthGuard will kick unauthenticated users to /login)
  { path: '', redirectTo: '/customers', pathMatch: 'full' },

  // protected routes:
  { path: 'customers', component: CustomerListComponent, canActivate: [AuthGuard] },
  { path: 'customers/add', component: CustomerFormComponent, canActivate: [AuthGuard] },
  { path: 'customers/edit/:id', component: CustomerEditComponent, canActivate: [AuthGuard] },
  { path: 'customers/details/:id', component: CustomerDetailsComponent, canActivate: [AuthGuard] },

  { path: 'accounts', component: AccountListComponent, canActivate: [AuthGuard] },
  { path: 'accounts/add', component: AccountFormComponent, canActivate: [AuthGuard] },
  { path: 'accounts/edit/:id', component: AccountEditComponent, canActivate: [AuthGuard] },
  { path: 'accounts/details/:id', component: AccountDetailsComponent, canActivate: [AuthGuard] },

  { path: 'transactions', component: TransactionsListComponent, canActivate: [AuthGuard] },
  { path: 'transactions/add', component: TransactionsFormComponent, canActivate: [AuthGuard] },
  { path: 'transactions/edit/:id', component: TransactionsEditComponent, canActivate: [AuthGuard] },
  { path: 'transactions/details/:id', component: TransactionsDetailsComponent, canActivate: [AuthGuard] },

  { path: 'loans', component: LoanListComponent, canActivate: [AuthGuard] },
  { path: 'loans/add', component: LoanFormComponent, canActivate: [AuthGuard] },
  { path: 'loans/edit/:id', component: LoanEditComponent, canActivate: [AuthGuard] },
  { path: 'loans/details/:id', component: LoanDetailsComponent, canActivate: [AuthGuard] },

  // public routes:
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // optional: catch-all 404 redirect
  { path: '**', redirectTo: '/customers' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
