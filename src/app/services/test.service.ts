import { Injectable } from '@angular/core';
import {global} from './global';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'

})


export class TestService {
  private baseUrl = global.url;
  constructor(
    private http: HttpClient
  ) { }

  
  postTest(data:any):any{
    return this.http.post(`${this.baseUrl}api/tareas`, data);
  }  
  //Inicio de sesion
  postLogin(data:any):any{
    return this.http.post(`${this.baseUrl}api/login`, data);
  }

  //Registro de usuario
  postUser(data:any):any{
    return this.http.post(`${this.baseUrl}api/user`, data);
  }

 //Traigo todos los datos de la tabla cuentas con busqueda
  getCuentas(busqueda: string): Observable<any> {
    if(busqueda == ""){
      busqueda = "*"; 
      return this.http.get(`${this.baseUrl}api/cliente/getclientes/${busqueda}`); 
    }else{
      return this.http.get(`${this.baseUrl}api/cliente/getclientes/${busqueda}`); 
  }
  }

   //Traigo los datos segun el id que seleccione a el modal para editar
  getCuentasdatos(idcuentas: string): Observable<any> {
    return this.http.get(`${this.baseUrl}api/cliente/getclientesdatos/${idcuentas}`); 
  }

  //actualizo los datos del cliente
  putCuentas(data: any): any{
    return this.http.put(`${this.baseUrl}api/cliente/updatecliente`, data);
  }

  //borro el cliente segun el id que seleccione
  deleteCuenta(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}api/cliente/deletecliente/${id}`);
  }
  
  //actualizo la contraseña del cliente
  putclaveCuentas(data: any): any{
    return this.http.put(`${this.baseUrl}api/cliente/updateclientecontrasena`, data);
  }

}
