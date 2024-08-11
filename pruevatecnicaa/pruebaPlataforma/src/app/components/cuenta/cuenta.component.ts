import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CuentaService } from '../../services/cuenta/cuenta.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.scss']
})
export class CuentaComponent implements OnInit {
  // Declaración de la propiedad `cuentas`
  cuentas: any; // Puedes especificar un tipo más específico si lo conoces

  constructor(
    private router: Router,
    private cuentaService: CuentaService
  ) { }

  ngOnInit(): void {
    this.cuentaService.obtenercuenta().subscribe({
      next: (data) => {
        this.cuentas = data;
        console.log(data);
      },
      error: (err) => console.error(err)
    });
  }
}
