import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerFormComponent } from './customers/customer-form/customer-form.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { AccountListComponent } from './accounts/account-list/account-list.component';
import { AccountFormComponent } from './accounts/account-form/account-form.component';
import { AccountEditComponent } from './accounts/account-edit/account-edit.component';
import { AccountDetailsComponent } from './accounts/account-details/account-details.component';
import { TransactionsListComponent } from './transactions/transactions-list/transactions-list.component';
import { TransactionsFormComponent } from './transactions/transactions-form/transactions-form.component';
import { TransactionsEditComponent } from './transactions/transactions-edit/transactions-edit.component';
import { TransactionsDetailsComponent } from './transactions/transactions-details/transactions-details.component';
import { LoanListComponent } from './loans/loan-list/loan-list.component';
import { LoanFormComponent } from './loans/loan-form/loan-form.component';
import { LoanEditComponent } from './loans/loan-edit/loan-edit.component';
import { LoanDetailsComponent } from './loans/loan-details/loan-details.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerFormComponent,
    CustomerEditComponent,
    CustomerDetailsComponent,
    AccountListComponent,
    AccountFormComponent,
    AccountEditComponent,
    AccountDetailsComponent,
    TransactionsListComponent,
    TransactionsFormComponent,
    TransactionsEditComponent,
    TransactionsDetailsComponent,
    LoanListComponent,
    LoanFormComponent,
    LoanEditComponent,
    LoanDetailsComponent,
  LoginComponent,
  RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,   // <--- here
    FormsModule,        // if you use template forms
    ReactiveFormsModule // if you use reactive forms
  ],
   providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
bootstrap: [AppComponent]
})


export class AppModule { }
