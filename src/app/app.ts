import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaJuegoComponent } from './tarjeta-juego/tarjeta-juego';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TarjetaJuegoComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  titulo = 'RetroGames: Catálogo de Videojuegos';

  videojuegos = [
    { id: 1, titulo: 'The Legend of Zelda', genero: 'Aventura', consola: 'Switch' },
    { id: 2, titulo: 'Elden Ring', genero: 'RPG', consola: 'Multiplataforma' },
    { id: 3, titulo: 'Super Mario Odyssey', genero: 'Plataformas', consola: 'Switch' },
    { id: 4, titulo: 'Hollow Knight', genero: 'Metroidvania', consola: 'PC' }
  ];

  juegoDestacado = '';

  actualizarDestacado(nombreJuego: string) {
    this.juegoDestacado = nombreJuego;
  }

}