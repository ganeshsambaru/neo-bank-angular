import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Transaction {
  id: number;
  transactionType: string;
  amount: number;
  transactionDate: string;
  accountId: number;
}

export interface CreateTransaction {
  transactionType: string;
  amount: number;
  transactionDate: string;
  accountId: number;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'https://localhost:7168/api/transactions';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl);
  }

  getById(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.apiUrl}/${id}`);
  }

  create(tx: CreateTransaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.apiUrl, tx);
  }

  update(id: number, tx: CreateTransaction): Observable<Transaction> {
    return this.http.put<Transaction>(`${this.apiUrl}/${id}`, tx);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
