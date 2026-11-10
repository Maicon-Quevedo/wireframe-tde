import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderWireframe } from './components/header-wireframe/header-wireframe';
import { TabelaTransacoes } from './components/tabela-transacoes/tabela-transacoes';
import { FooterWireframe } from './components/footer-wireframe/footer-wireframe';

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
  '2025-03-31',
  '2025-03-25',
  '2025-03-25',
  '2025-03-22',
  '2025-03-18',
  '2025-03-15',
  '2025-03-14',
  '2025-03-10',
  '2025-03-08',
  '2025-03-05'
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