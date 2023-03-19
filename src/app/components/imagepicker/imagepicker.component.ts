import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-imagepicker',
  templateUrl: './imagepicker.component.html',
  styleUrls: ['./imagepicker.component.css']
})
export class ImagePickerComponent {
  @Input() borderRadio: string = '';
  @Input() image: string= '';
  @Input() height: string = '';
  @Input() width: string = '';
}
