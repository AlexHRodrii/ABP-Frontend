import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})

export class TextoComponent {
  @Input() texto: string = '';
  @Input() sizeTexto: number = 16;
  @Input() color: string = 'black';
  @Input() fuenteWeight: string = 'normal';
  @Input() fuenteTexto: string = 'Arial';

}
