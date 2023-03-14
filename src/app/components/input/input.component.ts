import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() etiqueta: string = '';
  @Input() placeholder: string = '';
  @Input() tipo: string = '';
  @Input() validacion?: string = '';

  /*validar(event: Event) {
    return this.validacion.test("a");
  }*/
}
