import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  // Valor actual del contador
  counter = 0;

  // Controla si la disminución está habilitada
  activeDecrease = false;

  // Incrementa el contador en 1
  increase() {
    this.counter++;

    // Habilitar el botón de disminución cuando el contador es mayor que cero
    this.activeDecrease = this.counter > 0;
  }

  // Decrementa el contador en 1 si es mayor que cero
  decrease() {
    if (this.counter > 0) {
      this.counter--;
    }

    // Habilitar/deshabilitar el botón de disminución según el valor del contador
    this.activeDecrease = this.counter > 0;
  }

  // Activa o desactiva la funcionalidad de disminución
  inactiveDecrease() {
    this.activeDecrease = !this.activeDecrease;
  }
}