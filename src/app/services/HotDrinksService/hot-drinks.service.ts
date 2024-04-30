import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotdrinks } from 'src/app/models/HotDrinks';
import { Response } from '../../models/Response';
import { environment } from 'src/environments/environment.development';
import { IngredientsHotDrinks } from 'src/app/models/IngredientsHotDrinks';

@Injectable({
  providedIn: 'root'
})
export class HotDrinksService {

  private apiUrl = `${environment.ApiUrl}/HotDrinks`;
  constructor(private http: HttpClient) { }

  GetHotDrinks():Observable<Response<Hotdrinks[]>>{
    return this.http.get<Response<Hotdrinks[]>>(`${this.apiUrl}`);
  };

  GetHotDrinksById(id: number):Observable<Response<Hotdrinks>>{
    return this.http.get<Response<Hotdrinks>>(`${this.apiUrl}/ById/${id}`);
  };


  GetIngredientsByHotDrinks(id: number): Observable<Response<IngredientsHotDrinks[]>> {
    return this.http.get<Response<IngredientsHotDrinks[]>>(`${this.apiUrl}/IngredientBy/${id}`);
  };

  CreateHotDrinks(hotDrinks: Hotdrinks): Observable<Response<Hotdrinks[]>>{
    return this.http.post<Response<Hotdrinks[]>>(`${this.apiUrl}`, hotDrinks);
  };

  UpdateHotDrink(hotDrinks: Hotdrinks): Observable<Response<Hotdrinks[]>>{
    return this.http.put<Response<Hotdrinks[]>>(`${this.apiUrl}`, hotDrinks);
  };

  DeleteHotDrink(id: number): Observable<Response<IngredientsHotDrinks[]>> {
    return this.http.delete<Response<IngredientsHotDrinks[]>>(`${this.apiUrl}/${id}`);
  };
  
  DeleteIngredientHotDrink(id: number): Observable<Response<IngredientsHotDrinks>> {
    return this.http.delete<Response<IngredientsHotDrinks>>(`${this.apiUrl}/DeleteIngredient/${id}`);
  };


}
