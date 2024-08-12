import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  clientes: any; // Almacena los datos de los clientes

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    // Obtener clientes
    this.clienteService.obtenercliente().subscribe({
      next: (data) => {
        this.clientes = data;
        console.log('Clientes:', data);
      },
      error: (err) => console.error(err)
    });
  }
}