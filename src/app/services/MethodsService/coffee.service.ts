import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Response } from '../../models/Response';
import { Coffees } from '../../models/Coffees';
import { Revenues } from '../../models/Revenues';


@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  private apiUrlCoffees = `${environment.ApiUrl}/Cafes`
  private apiUrlRevenues = `${environment.ApiUrl}/Receitas`

  constructor(private http: HttpClient) { }

  CreateCoffee(id: number,coffee: Coffees): Observable<Response<Coffees>> {
    const apiUrlWithParams = `${this.apiUrlCoffees}/${id}`;
    console.log(apiUrlWithParams)
    return this.http.post<Response<Coffees>>(apiUrlWithParams, coffee);
  };
  GetCoffees() : Observable<Response<Coffees[]>>{
    return this.http.get<Response<Coffees[]>>(this.apiUrlCoffees);
  };
  GetCoffeeByMethods(id: number): Observable<Response<Coffees[]>>{
    return this.http.get<Response<Coffees[]>>(`${this.apiUrlCoffees}/${id}`);
  };
  GetRevenuesByCafe(id: number): Observable<Response<Revenues[]>>{
    return this.http.get<Response<Revenues[]>>(`${this.apiUrlRevenues}/${id}`);
  };

}
