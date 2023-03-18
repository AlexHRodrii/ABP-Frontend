import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ImagePickerConf } from 'ngp-image-picker';

@Component({
  selector: 'app-imagepicker',
  templateUrl: './imagepicker.component.html',
  styleUrls: ['./imagepicker.component.css']
})
export class ImagePickerComponent {
  @Input() radioBorde: string = '';
  @Input() ancho: string = '';
  @Input() largo: string = '';
  @Input() imagen: string= '';
  config1: ImagePickerConf = {
    borderRadius: this.radioBorde,
    language: 'en',
  };
  config2: ImagePickerConf = {
    borderRadius: this.radioBorde,
    language: 'es',
    width: this.ancho,
    height: this.largo,

  };
  initialImage = this.imagen;
}
