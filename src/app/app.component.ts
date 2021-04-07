import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Ejemplos básicos';
  imgSrc = 'assets/imgs/ejemplo.jpg';
  fecha = new Date();
  objeto = { id: 5, nombre: 'Javier', fecha: new Date() };
  array = [1, 3, 5, 7, 9];

  mapeoMensajes:
    { [k: string]: string } = {
      '=0': 'No tienes ningún mensaje.',
      '=1': 'Un mensaje.',
      other: '# mensajes.'
    };

  diccionario = { casa: 'home', perro: 'dog', other: 'No reconocido' };

  clases = { importante: true, enfasis: true };

  estilos = { 'font-size': '16px', border: '1px solid black' };

  redondeado = 5;

  colorSeleccionado = '#FFFF00';

  miColor: string;
}
