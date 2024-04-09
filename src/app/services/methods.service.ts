import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Methods } from '../models/Methods';
import { Response } from '../models/Response';
import { Teas } from '../models/Teas';
import { Hotdrinks } from '../models/HotDrinks';
import { CoffeeSprints } from '../models/CoffeeSprints';
import { IngredientsHotDrinks } from '../models/IngredientsHotDrinks';
import { IngredientsTeas } from '../models/IngredientsTeas';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {

  private apiUrl = `${environment.ApiUrl}/Metodos`;
  private apiUrlCoffeeSprints = `${environment.ApiUrl}/CoffeeSprints`;
  private apiUrlTeas = `${environment.ApiUrl}/Teas`;
  private apiUrlHotDrinks = `${environment.ApiUrl}/HotDrinks`;



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



  GetTeas() : Observable<Response<Teas[]>>{
    return this.http.get<Response<Teas[]>>(this.apiUrlTeas);
  };

  GetHotDrinks() : Observable<Response<Hotdrinks[]>>{
    return this.http.get<Response<Hotdrinks[]>>(this.apiUrlHotDrinks);
  };

  GetCoffeeSprint() : Observable<Response<CoffeeSprints[]>>{
    return this.http.get<Response<CoffeeSprints[]>>(this.apiUrlCoffeeSprints);
  };

  GetIngredientsByHotDrinks(id: number): Observable<Response<IngredientsHotDrinks[]>> {
    return this.http.get<Response<IngredientsHotDrinks[]>>(`${this.apiUrlHotDrinks}/IngredientBy/${id}`);
  };

  GetIngredientsByTeas(id: number): Observable<Response<IngredientsTeas[]>> {
    return this.http.get<Response<IngredientsTeas[]>>(`${this.apiUrlTeas}/IngredientBy/${id}`);
  };


};

