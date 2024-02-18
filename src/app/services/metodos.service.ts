import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Metodo } from '../models/Metodos';
import { Response } from '../models/Response';
import { Cafes } from '../models/Cafes';
import { Receitas } from '../models/Receitas';

@Injectable({
  providedIn: 'root'
})
export class MetodosService {

  private apiUrl = `${environment.ApiUrl}/Metodos`

  private apiUrlCafes = `${environment.ApiUrl}/Cafes`
  private apiUrlReceitas = `${environment.ApiUrl}/Receitas`



  constructor(private http: HttpClient) { }

  GetMetodos() : Observable<Response<Metodo[]>>{
    return this.http.get<Response<Metodo[]>>(this.apiUrl);
  };
  CreateMetodo(metodo: Metodo): Observable<Response<Metodo>> {
    return this.http.post<Response<Metodo>>(this.apiUrl, metodo);
  };
  EditarMetodo(metodo: Metodo): Observable<Response<Metodo>> {
    return this.http.put<Response<Metodo>>(this.apiUrl, metodo);
  };

  GetMetodoById(id: number): Observable<Response<Metodo>> {
    return this.http.get<Response<Metodo>>(`${this.apiUrl}/ById/${id}`);
  };



  CreateCafe(id: number,cafe: Cafes): Observable<Response<Cafes>> {
    const apiUrlWithParams = `${this.apiUrlCafes}/${id}`;
    console.log(apiUrlWithParams)
    return this.http.post<Response<Cafes>>(apiUrlWithParams, cafe);
  }

  GetCafes() : Observable<Response<Cafes[]>>{
    return this.http.get<Response<Cafes[]>>(this.apiUrlCafes);
  }

  GetCafeByMetodo(id: number): Observable<Response<Cafes[]>>{
    return this.http.get<Response<Cafes[]>>(`${this.apiUrlCafes}/${id}`);
  }

  GetReceitaByCafe(id: number): Observable<Response<Receitas[]>>{
    return this.http.get<Response<Receitas[]>>(`${this.apiUrlReceitas}/${id}`);
  }

 

}

