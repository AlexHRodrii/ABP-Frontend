import { Component, Input } from '@angular/core';

export type AvailableTypes = 'text' | 'date' | 'number' | 'email' | 'password';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() title: string = 'Default input';
  @Input() name: string = 'Default input';
  @Input() placeholder: string = 'Default placeholder';
  @Input() type: AvailableTypes = 'text';
  @Input() width: string = 'auto';
  @Input() validation?: string | RegExp = '';

  /*validar(event: Event) {
    return this.validation.test("a");
  }*/
}
