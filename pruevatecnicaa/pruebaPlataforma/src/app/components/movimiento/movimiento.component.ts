import { Component, OnInit } from '@angular/core';
import { MovimientoService } from '../../services/movimiento/movimiento.service';

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.scss']
})
export class MovimientoComponent implements OnInit {
  movimientos: any; // Almacena los datos de los movimientos

  constructor(private movimientoService: MovimientoService) { }

  ngOnInit(): void {
    // Obtener movimientos
    this.movimientoService.obtenermovimiento().subscribe({
      next: (data) => {
        this.movimientos = data;
        console.log('Movimientos:', data);
      },
      error: (err) => console.error(err)
    });
  }
}