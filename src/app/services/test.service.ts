import { Injectable } from '@angular/core';
import {global} from './global';
import { HttpClient } from '@angular/common/http';

const baseUrl = global.url;

@Injectable({
  providedIn: 'root'

})


export class TestService {
  constructor(
    private http: HttpClient
  ) { }

  getTest():any{
    return this.http.get(baseUrl+'inicio');
  }

  postTest(data:any):any{
    return this.http.post(baseUrl+'api/tareas', data);
  }  
  postLogin(data:any):any{
    return this.http.post(baseUrl+'api/login', data);
  }
  postUser(data:any):any{
    return this.http.post(baseUrl+'api/user', data);
  }

}
