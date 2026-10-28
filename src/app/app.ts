import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderWireframe } from './components/header-wireframe/header-wireframe';
import { TabelaTransacoes } from './components/tabela-transacoes/tabela-transacoes';
import { FooterWireframe } from './footer-wireframe/footer-wireframe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderWireframe, TabelaTransacoes, FooterWireframe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto-wireframe');
  array: string[] = [
    'Usuarios',
    'Investimentos',
    'Empréstimos',
    'Orçamentos'
  ]
  colunas_transacoes: string[] = [
    'data',
    'tipo',
    'valor'
  ]
  datas_transacoes: string[] = [
    '31/03/2025',
    '25/03/2025',
    '25/03/2025',
    '22/03/2025',
    '18/03/2025',
    '15/03/2025',
    '14/03/2025',
    '10/03/2025',
    '08/03/2025',
    '05/03/2025'
  ]
  tipo_transacoes: string[] = [
    'RENDIMENTO',
    'RESGATE',
    'PAGAMENTO_PARCELA',
    'DEPOSITO_META',
    'RENDIMENTO',
    'PAGAMENTO_PARCELA',
    'DEPOSITO_META',
    'APORTE',
    'APORTE',
    'PAGAMENTO_PARCELA'
  ]
  valor_transacoes: number[] = [
    120.50,
    2500.00,
    800.50,
    1500.00,
    1200.00,
    720.00,
    250.00,
    300.00,
    400.00,
    350.00
  ]
  frase_footer: string = 'Wireframe v1 - Controle Financeiro Pessoal | pagina 2';
}