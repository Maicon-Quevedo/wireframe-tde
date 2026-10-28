import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-wireframe',
  imports: [],
  templateUrl: './header-wireframe.html',
  styleUrl: './header-wireframe.css',
})
export class HeaderWireframe {
  nomeNegocio: string = 'FinControl';
  topicoUm: string = 'Transações';
  topicoDois: string = 'Usuários';
  topicoTres: string = 'Investimentos';
  topicoQuatro: string = 'Empréstimos';
  topicoCinco: string = 'Orçamentos';
  @Input() nome: string[] = [];
}
