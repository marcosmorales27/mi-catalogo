import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjeta-juego',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta-juego.html',
  styleUrls: ['./tarjeta-juego.css']
})
export class TarjetaJuegoComponent {

  // INPUT
  @Input() juego: any;

  // OUTPUT
  @Output() destacar = new EventEmitter<string>();

  destacarJuego() {

    const mensaje =
      `El hijo seleccionó: ${this.juego.titulo}`;

    this.destacar.emit(mensaje);

  }

}
