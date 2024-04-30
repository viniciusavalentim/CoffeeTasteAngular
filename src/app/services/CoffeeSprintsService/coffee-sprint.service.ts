import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoffeeSprints } from 'src/app/models/CoffeeSprints';
import { IngredientsCoffeeSprints } from 'src/app/models/IngredientsCoffeeSprints';
import { Response } from 'src/app/models/Response';

@Injectable({
  providedIn: 'root'
})
export class CoffeeSprintService {

  private apiUrl = `${environment.ApiUrl}/CoffeeSprints`;

  constructor(private http: HttpClient) { }


  GetCoffeeSprints():Observable<Response<CoffeeSprints[]>>{
    return this.http.get<Response<CoffeeSprints[]>>(`${this.apiUrl}`);
  };

  GetCoffeeSprintsById(id: number):Observable<Response<CoffeeSprints>>{
    return this.http.get<Response<CoffeeSprints>>(`${this.apiUrl}/ById/${id}`);
  };
  
  GetIngredientByCoffeeSprintsId(id: number): Observable<Response<IngredientsCoffeeSprints[]>> {
    return this.http.get<Response<IngredientsCoffeeSprints[]>>(`${this.apiUrl}/IngredientBy/${id}`);
  };

  CreateCoffeeSprints(coffeeSprints: CoffeeSprints): Observable<Response<CoffeeSprints[]>>{
    return this.http.post<Response<CoffeeSprints[]>>(`${this.apiUrl}`, coffeeSprints);
  };

  UpdateCoffeeSprints(coffeSprints: CoffeeSprints): Observable<Response<CoffeeSprints[]>>{
    return this.http.put<Response<CoffeeSprints[]>>(`${this.apiUrl}`, coffeSprints);
  };

  DeleteCoffeeSprints(id: number): Observable<Response<IngredientsCoffeeSprints[]>> {
    return this.http.delete<Response<IngredientsCoffeeSprints[]>>(`${this.apiUrl}/${id}`);
  };

  DeleteIngredient(id: number): Observable<Response<IngredientsCoffeeSprints>> {
    return this.http.delete<Response<IngredientsCoffeeSprints>>(`${this.apiUrl}/DeleteIngredient/${id}`);
  };


}
