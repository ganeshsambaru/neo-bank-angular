import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Account {
  id?: number;
  accountNumber: string;
  accountType: string;
  balance: number;
  customerId: number;
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly apiUrl = 'https://localhost:7168/api/accounts';

  constructor(private http: HttpClient) {}

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.apiUrl);
  }

  getAccount(id: number): Observable<Account> {
    return this.http.get<Account>(`${this.apiUrl}/${id}`);
  }

  addAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(this.apiUrl, account);
  }

  updateAccount(id: number, account: Account): Observable<Account> {
    return this.http.put<Account>(`${this.apiUrl}/${id}`, account);
  }

  deleteAccount(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
