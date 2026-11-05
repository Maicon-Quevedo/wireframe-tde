import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-wireframe',
  imports: [],
  templateUrl: './footer-wireframe.html',
  styleUrl: './footer-wireframe.css',
})
export class FooterWireframe {
  @Input() frase_footer: string = '';
}
