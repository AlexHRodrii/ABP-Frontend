import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() title: string = '';
  @Input() name: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = '';
  @Input() validation?: string = '';

  /*validar(event: Event) {
    return this.validation.test("a");
  }*/
}
