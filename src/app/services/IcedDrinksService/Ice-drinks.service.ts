import { IceDrinks } from 'src/app/models/IceDrinks';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Response } from '../../models/Response';
import { IngredientsIceDrinks } from '../../models/IngredientsIcedDrinks';


@Injectable({
  providedIn: 'root'
})
export class IceDrinksService {

  private apiUrl = `${environment.ApiUrl}/IcedDrinks`;

  constructor(private http: HttpClient) { }

  GetIcedDrinks():Observable<Response<IceDrinks[]>>{
    return this.http.get<Response<IceDrinks[]>>(`${this.apiUrl}`);
  };

  GetIcedDrinksById(id: number):Observable<Response<IceDrinks>>{
    return this.http.get<Response<IceDrinks>>(`${this.apiUrl}/ByIcedId/${id}`);
  };


  GetIngredientsByIceDrinks(id: number): Observable<Response<IngredientsIceDrinks[]>> {
    return this.http.get<Response<IngredientsIceDrinks[]>>(`${this.apiUrl}/IngredientBy/${id}`);
  };

  CreateIcedDrinks(iceDrinks: IceDrinks): Observable<Response<IceDrinks[]>>{
    return this.http.post<Response<IceDrinks[]>>(`${this.apiUrl}`, iceDrinks);
  };

  UpdateIcedDrink(iceDrinks: IceDrinks): Observable<Response<IceDrinks[]>>{
    return this.http.post<Response<IceDrinks[]>>(`${this.apiUrl}`, iceDrinks);
  };

  DeleteIcedDrink(id: number): Observable<Response<IngredientsIceDrinks[]>> {
    console.log(`${this.apiUrl}/${id}`)
    return this.http.delete<Response<IngredientsIceDrinks[]>>(`${this.apiUrl}/${id}`);
  };


}


