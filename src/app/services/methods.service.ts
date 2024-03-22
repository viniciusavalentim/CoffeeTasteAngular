import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Methods } from '../models/Methods';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {

  private apiUrl = `${environment.ApiUrl}/Metodos`;

  constructor(private http: HttpClient) { };

  GetMethods() : Observable<Response<Methods[]>>{
    return this.http.get<Response<Methods[]>>(this.apiUrl);
  };
  CreateMethods(method: Methods): Observable<Response<Methods>> {
    return this.http.post<Response<Methods>>(this.apiUrl, method);
  };
  UpdateMethods(method: Methods): Observable<Response<Methods>> {
    return this.http.put<Response<Methods>>(this.apiUrl, method);
  };
  GetMethodsById(id: number): Observable<Response<Methods>> {
    return this.http.get<Response<Methods>>(`${this.apiUrl}/ById/${id}`);
  };

};

