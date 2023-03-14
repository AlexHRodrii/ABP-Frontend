import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})

export class TextoComponent {
  @Input() texto: string = '';
  @Input() sizeTexto: number = 16;
  @Input() fuenteTexto: string = 'Arial';
}
