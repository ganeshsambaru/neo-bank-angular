import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface defined here itself
export interface Loan {
  id?: number;
  amount: number;
  interestRate: number;
  termMonths: number;
  startDate: string;
  endDate: string;
  customerId: number;
}

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private apiUrl = 'https://localhost:7168/api/loans';

  constructor(private http: HttpClient) {}

  getLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.apiUrl);
  }

  getLoan(id: number): Observable<Loan> {
    return this.http.get<Loan>(`${this.apiUrl}/${id}`);
  }

  addLoan(loan: Loan): Observable<Loan> {
    return this.http.post<Loan>(this.apiUrl, loan);
  }

  updateLoan(id: number, loan: Loan): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, loan);
  }

  deleteLoan(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
