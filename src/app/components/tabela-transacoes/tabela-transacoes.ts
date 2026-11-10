import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabela-transacoes',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './tabela-transacoes.html',
  styleUrl: './tabela-transacoes.css',
})
export class TabelaTransacoes {
  @Input() coluna: string[] = [];
  @Input() datas: string[] = [];
  @Input() tipos: string[] = [];
  @Input() valores: number[] = [];
}