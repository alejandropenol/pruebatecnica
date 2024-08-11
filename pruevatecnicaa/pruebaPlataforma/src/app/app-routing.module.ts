import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { LoginComponent } from './components/login/login.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { MovimientoComponent } from './components/movimiento/movimiento.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'cliente',
  component: ClienteComponent
},
{
  path: 'cuenta',
  component: CuentaComponent
},
{
  path: 'movimiento',
  component: MovimientoComponent
},
{
  path: 'login',
  component: LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
