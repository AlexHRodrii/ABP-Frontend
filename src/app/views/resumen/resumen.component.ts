import {Component} from '@angular/core';
@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent {

public productos: any;

  comprar() {
    alert("Compra completada");
  }
constructor() {
    this.productos=[];
}
  ngOnInit() {
    this.productos = [{Nombre: "Mancuerna", Quantity: "2", Price: "2", Photo: "./assets/avatar.png"}, {
      Nombre: "Mancuerna",
      Quantity: "3",
      Price: "3",
      Photo: "."
    }, {Nombre: "Mancuerna", Quantity: "3", Price: "4", Photo: "."}];

  }
}
