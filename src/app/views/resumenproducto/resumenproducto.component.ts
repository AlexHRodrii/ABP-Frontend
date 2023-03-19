import { Component, Input, Output, EventEmitter} from '@angular/core';
import {ButtonComponent} from "../../components/button/button.component";

@Component({
  selector: 'app-resumenproducto',
  templateUrl: './resumenproducto.component.html',
  styleUrls: ['./resumenproducto.component.css']
})
export class ResumenProductoComponent {
  @Input() title: string = '';
  @Input() photo: string = '';
  @Input() button?: ButtonComponent;
  @Input() price: number = 0;
  @Input() quantity: number = 0;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>(); // se usa new EventEmitter

  handleClick() {
    this.onClick.emit();
  }
  /*validar(event: Event) {
    return this.validacion.test("a");
  }*/
}
