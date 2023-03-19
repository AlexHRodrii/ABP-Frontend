import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typo',
  templateUrl: './typo.component.html',
  styleUrls: ['./typo.component.css']
})

export class TypoComponent {
  @Input() data: string = 'Texto de prueba';
  @Input() fontSize: string = '14px';
  @Input() fontColor: string = '#000';
  @Input() fontWeight: string = 'normal';
  @Input() fontFamily: string = 'Montserrat';

}
