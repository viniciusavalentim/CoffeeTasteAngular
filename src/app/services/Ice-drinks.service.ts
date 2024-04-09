import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IceDrinks } from '../models/IceDrinks';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';
import { Ingredients } from '../models/Ingredients';


@Injectable({
  providedIn: 'root'
})
export class IceDrinksService {

  private apiUrl = `${environment.ApiUrl}/IcedDrinks`;

  constructor(private http: HttpClient) { }

  GetIceDrinks():Observable<Response<IceDrinks[]>>{
    return this.http.get<Response<IceDrinks[]>>(`${this.apiUrl}`)
  };

  GetIngredientsByIceDrinks(id: number): Observable<Response<Ingredients[]>> {
    return this.http.get<Response<Ingredients[]>>(`${this.apiUrl}/${id}`);
  };

}


