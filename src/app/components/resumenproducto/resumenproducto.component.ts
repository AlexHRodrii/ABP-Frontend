import { Component, Input, Output, EventEmitter} from '@angular/core';
import {BotonComponent} from "../boton/boton.component";

@Component({
  selector: 'app-resumencomponente',
  templateUrl: './resumenproducto.component.html',
  styleUrls: ['./resumenproducto.component.css']
})
export class ResumenProductoComponent {
  @Input() titulo: string = '';
  @Input() foto: string = '';
  @Input() boton?: BotonComponent;
  @Input() precio: number = 0;
  @Input() cantidad: number = 0;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>(); // se usa new EventEmitter

  handleClick() {
    this.onClick.emit();
  }
  /*validar(event: Event) {
    return this.validacion.test("a");
  }*/
}
