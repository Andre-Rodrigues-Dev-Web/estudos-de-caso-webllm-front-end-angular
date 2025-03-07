import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { TransactionService } from 'src/app/shared/services/transaction.service';
import { CreateMLCEngine } from '@mlc-ai/web-llm';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  largestTransactionResponse: string = '';

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): void {
    this.transactionService.getTodayTransactions().subscribe((data) => {
      this.transactions = data;
    });
  }

  async processLargestTransaction(): Promise<void> {
    if (this.transactions.length === 0) return;
    const largest = this.transactions.reduce((prev, current) =>
      prev.amount > current.amount ? prev : current
    );
    const initProgressCallback = (initProgress: any) => {
      console.log(initProgress);
    };
    const selectedModel = 'Llama-3.1-8B-Instruct-q4f32_1-MLC';
    const engine = await CreateMLCEngine(selectedModel, {
      initProgressCallback,
    });
    const question = `Explique a transação de maior valor: ${largest.description} no valor de R$ ${largest.amount}`;
    const chatResponse = await (engine as any).chat([
      { role: 'user', content: question },
    ]);
    this.largestTransactionResponse = chatResponse[0].content;
  }
}
