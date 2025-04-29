import { Injectable } from '@angular/core';
import { Product } from './model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  productos: Product[] = [
    {
      id: 1,
      name: 'Xbox Series S',
      price: 7500,
      description: 'Xbox Series S con 512 GB de almacenamiento SSD y alto rendimiento para juegos digitales.',
      img: 'productos/xbox.jpeg',
    },
    {
      id: 2,
      name: 'Xbox Series X',
      price: 11500,
      description: 'Xbox Series X con 1 TB de almacenamiento SSD y potencia para juegos en 4K.',
      img: 'productos/xboxx.jpeg',
    },
    {
      id: 3,
      name: 'Nintendo Switch Oled',
      price: 8500,
      description: 'Nintendo Switch OLED con pantalla de 7 pulgadas y 64 GB de almacenamiento interno.',
      img: 'productos/nin.jpeg',
    },
    {
      id: 4,
      name: 'PlayStation 5 PRO',
      price: 13500,
      description: 'Consola PlayStation 5 con 1 TB SSD y soporte para juegos en 4K y ray tracing.',
      img: 'productos/ps5.jpeg',
    },
    {
      id: 5,
      name: 'The Legend of Zelda: Tears of the Kingdom',
      price: 1350,
      description: 'Aventura épica exclusiva de Nintendo Switch con exploración, combate y acertijos en un mundo abierto.',
      img: 'productos/zelda.jpeg',
    },
    {
      id: 6,
      name: 'Mario Kart 8 Deluxe',
      price: 1290,
      description: 'Juego de carreras para Nintendo Switch con modos multijugador local y en línea.',
      img: 'productos/mariokart.jpeg',
    },
    {
      id: 7,
      name: 'Spider-Man 2 PS5',
      price: 1390,
      description: 'Juego de acción exclusivo para PS5 con combates, historia cinematográfica y mundo abierto.',
      img: 'productos/spiderman2.jpeg',
    },
    {
      id: 8,
      name: 'FIFA 24',
      price: 1250,
      description: 'Juego de fútbol con licencias oficiales, modos en línea y mejoras en jugabilidad.',
      img: 'productos/fifa24.jpeg',
    },
    {
      id: 9,
      name: 'DualSense Wireless Controller - PS5',
      price: 1650,
      description: 'Control inalámbrico para PS5 con retroalimentación háptica y gatillos adaptativos.',
      img: 'productos/dualsense.jpeg',
    },
    {
      id: 10,
      name: 'Control Inalámbrico Xbox - Carbon Black',
      price: 1450,
      description: 'Control inalámbrico para Xbox con agarre texturizado y compatibilidad con PC.',
      img: 'productos/controlxbox.jpeg',
    },
    {
      id: 11,
      name: 'Headset Turtle Beach Recon 70',
      price: 850,
      description: 'Audífonos multiplataforma con micrófono abatible y sonido envolvente para una mejor experiencia de juego.',
      img: 'productos/turtlebeach.jpeg',
    },
    {
      id: 12,
      name: 'Base de carga Dual para PS5',
      price: 690,
      description: 'Estación de carga para dos controles DualSense, práctica y compacta para mantenerlos siempre listos.',
      img: 'productos/cargadorps5.jpeg',
    }
  ];

    

}
