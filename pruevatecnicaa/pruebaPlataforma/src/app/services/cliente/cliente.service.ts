import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(protected http: HttpClient) { }
  obtenercliente(): Observable<any> {
    let ruta = [environment.apiUrl, 'cliente'].join('/');
    return this.http.get(ruta);
   }
   obtenerclienteId(id: any): Observable<any> {
    let ruta = [environment.apiUrl,  'cliente', id].join('/');
    return this.http.get(ruta);
   }
   agregarcliente(usr: any): Observable<any> {
    let ruta = [environment.apiUrl,  'cliente'].join('/');
    return this.http.post(ruta, usr);
   }
   editarcliente(usr: any, id: any): Observable<any> {
    let ruta = [environment.apiUrl,  'cliente', id].join('/');
    return this.http.put(ruta, usr);
   }
   eliminarRegistrocliente(id: any): Observable<any> {
    let ruta = [environment.apiUrl,  'cliente', id].join('/');
    return this.http.delete(ruta);
   }
            
}
