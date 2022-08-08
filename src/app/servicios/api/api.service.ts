import { Injectable } from '@angular/core';
import { LoginI } from '../../modelos/login.inferface';
import { ResponseI } from '../../modelos/response.interface';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ListadepacientesI} from '../../modelos/listadepacientes.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //url:string="http://solodata.es/";
  url:string="https://pokeapi.co/api/v2/";

  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{

    let direccion= this.url + "auth";
    return this.http.post<ResponseI>(direccion,form);
  }

  getAllPacients (page:number):Observable<ListadepacientesI[]>{

    let direccion= this.url + "pokemon/" + page;
    return this.http.get<ListadepacientesI[]>(direccion);

  }

}
