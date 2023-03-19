import {Component, Input} from '@angular/core';
@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent {
  @Input() quantity : Array<number>;
  @Input() name : Array<string>;
  @Input() price : Array<number>;
  @Input() impuestos : number = 0;
  @Input() photo : Array<string>;
  @Input() gastos : number = 0;
  @Input() total : number = 0;
  @Input() totalquantity : number=0;
  @Input() contador : number = 0;
  @Input() preccant: number = 0;

public todo: Array<Object>;
public productos: Array<Object>;

  comprar() {
    alert("Compra completada");
  }
constructor() {
    this.todo=[];
    this.quantity=[];
    this.price=[];
    this.name=[];
    this.photo=[];
    this.productos=[];
}
  ngOnInit() {
    this.todo = [{Nombre: "Mancuerna", Quantity: "2", Price: "2", Photo: "./assets/avatar.png"}, {
      Nombre: "Mancuerna",
      Quantity: "3",
      Price: "3",
      Photo: "."
    }, {Nombre: "Mancuerna", Quantity: "3", Price: "4", Photo: "."}];
//Para colocar el objeto en localStorage
    localStorage.setItem("Producto", JSON.stringify(this.todo));


  }
}
