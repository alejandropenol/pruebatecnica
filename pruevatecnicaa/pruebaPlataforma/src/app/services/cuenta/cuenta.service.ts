import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor(protected http: HttpClient) { }
  obtenercuenta(): Observable<any> {
    let ruta = [environment.apiUrl,'cuenta'].join('/');
    return this.http.get(ruta);
   }
   obtenercuentaId(id: any): Observable<any> {
    let ruta = [environment.apiUrl,  'cuenta', id].join('/');
    return this.http.get(ruta);
   }
   agregarcuenta(usr: any): Observable<any> {
    let ruta = [environment.apiUrl,  'cuenta'].join('/');
    return this.http.post(ruta, usr);
   }
   editarcuenta(usr: any, id: any): Observable<any> {
    let ruta = [environment.apiUrl,  'cuenta', id].join('/');
    return this.http.put(ruta, usr);
   }
   eliminarRegistrocuenta(id: any): Observable<any> {
    let ruta = [environment.apiUrl,  'cuenta', id].join('/');
    return this.http.delete(ruta);
   } 
}
