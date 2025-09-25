import { Component, OnInit } from '@angular/core';
import { Customer, CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  successMessage = '';
  errorMessage = '';

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService.getCustomers().subscribe({
      next: data => {
        this.customers = data;
        this.errorMessage = '';
      },
      error: () => {
        this.errorMessage = 'Failed to load customers.';
        this.successMessage = '';
      }
    });
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe({
      next: () => {
        this.successMessage = 'Customer deleted successfully!';
        this.errorMessage = '';
        this.loadCustomers();
      },
      error: () => {
        this.errorMessage = 'Failed to delete customer.';
        this.successMessage = '';
      }
    });
  }
}
