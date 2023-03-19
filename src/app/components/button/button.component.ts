import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() buttonText?: string = 'Default button';
  @Input() fontSize?: string = '15px';
  @Input() fontFamily?: string = 'Montserrat';
  @Input() buttonHeight?: string = 'auto';
  @Input() buttonWidth?: string = 'auto';
  @Input() textColor?: string = '#FFFFFF';
  @Input() backgroundColor?: string = '#66806A';
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>(); // se usa new EventEmitter

  handleClick() {
    this.onClick.emit();
  }

}

