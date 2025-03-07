import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor() { }

  getTodayTransactions(): Observable<Transaction[]> {
    const transactions: Transaction[] = [
      { id: 1, date: new Date(), description: 'Compra no supermercado', amount: 150.00 },
      { id: 2, date: new Date(), description: 'Pagamento de conta de luz', amount: 200.00 },
      { id: 3, date: new Date(), description: 'Compra de eletrônicos', amount: 1200.00 }
    ];
    return of(transactions);
  }
}
