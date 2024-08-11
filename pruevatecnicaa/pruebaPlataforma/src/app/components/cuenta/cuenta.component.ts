import { Component, OnInit } from '@angular/core';
import { CuentaService } from '../../services/cuenta/cuenta.service';
import { ClienteService } from '../../services/cliente/cliente.service';
import { MovimientoService } from '../../services/movimiento/movimiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.scss']
})
export class CuentaComponent implements OnInit {
  cuentas: any;    // Almacena los datos de las cuentas
  clientes: any;   // Almacena los datos de los clientes
  movimientos: any; // Almacena los datos de los movimientos

  constructor(
    private router: Router,
    private cuentaService: CuentaService,
    private clienteService: ClienteService,
    private movimientoService: MovimientoService
  ) { }

  ngOnInit(): void {
    // Obtener cuentas
    this.cuentaService.obtenercuenta().subscribe({
      next: (data) => {
        this.cuentas = data;
        console.log('Cuentas:', data);
      },
      error: (err) => console.error(err)
    });

    // Obtener clientes
    this.clienteService.obtenercliente().subscribe({
      next: (data) => {
        this.clientes = data;
        console.log('Clientes:', data);
      },
      error: (err) => console.error(err)
    });

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

