import { HttpClientModule } from '@angular/common/http';
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
    TransactionsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,   // <--- here
    FormsModule,        // if you use template forms
    ReactiveFormsModule // if you use reactive forms
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
