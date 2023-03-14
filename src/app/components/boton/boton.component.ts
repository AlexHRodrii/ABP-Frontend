import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent {
  @Input() texto: string = '';
  @Input() fontSize: string = '';
  @Input() colorLetra: string = '';
  @Input() colorFondo: string = '';
  @Input() borde: string = '';
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>(); // se usa new EventEmitter

  handleClick() {
    this.onClick.emit();
  }

}

