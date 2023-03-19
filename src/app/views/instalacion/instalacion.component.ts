import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instalacion',
  templateUrl: './instalacion.component.html',
  styleUrls: ['./instalacion.component.css']
})
export class InstalacionComponent implements OnInit{

  reservar() {
    alert("Reserva completada");
  }

  ngOnInit() {

    document.addEventListener('click', function(event: MouseEvent) {
    const target = event.target;

    if (target instanceof HTMLElement && target.classList.contains('day')) {
      // Quitamos la clase 'selected' de cualquier día que la tenga
      document.querySelectorAll('.day.selected').forEach(function(day) {
        day.classList.remove('selected');
      });

      // Añadimos la clase 'selected' al día clickeado
      target.classList.add('selected');
    }

    if (target instanceof HTMLElement && target.classList.contains('hour')) {
      // Quitamos la clase 'selected' de cualquier hora que la tenga
      document.querySelectorAll('.hour.selected').forEach(function(hour) {
        hour.classList.remove('selected');
      });

      // Añadimos la clase 'selected' a la hora clickada
      target.classList.add('selected');
    }
    });

  }

}
