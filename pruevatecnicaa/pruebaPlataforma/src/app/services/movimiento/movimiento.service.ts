import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  constructor(protected http: HttpClient) { }
  obtenermovimiento(): Observable<any> {
    let ruta = [environment.apiUrl,  'movimiento'].join('/');
    return this.http.get(ruta);
   }
   obtenermovimientoId(id: any): Observable<any> {
    let ruta = [environment.apiUrl,  'movimiento', id].join('/');
    return this.http.get(ruta);
   }
   agregarmovimiento(usr: any): Observable<any> {
    let ruta = [environment.apiUrl,  'movimiento'].join('/');
    return this.http.post(ruta, usr);
   }
   editarmovimiento(usr: any, id: any): Observable<any> {
    let ruta = [environment.apiUrl,  'movimiento', id].join('/');
    return this.http.put(ruta, usr);
   }
   eliminarRegistromovimiento(id: any): Observable<any> {
    let ruta = [environment.apiUrl,  'movimiento', id].join('/');
    return this.http.delete(ruta);
   }
}
