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

  GetIceDrinks():Observable<Response<IceDrinks[]>>{
    
    return this.http.get<Response<IceDrinks[]>>(`${this.apiUrl}`)
  };

  GetIngredientsByIceDrinks(id: number): Observable<Response<IngredientsIceDrinks[]>> {
    return this.http.get<Response<IngredientsIceDrinks[]>>(`${this.apiUrl}/IngredientBy/${id}`);
    
  };

  CreateIcedDrinks(iceDrinks: IceDrinks): Observable<Response<IceDrinks[]>>{
    console.log(`${this.apiUrl}`, iceDrinks)
    return this.http.post<Response<IceDrinks[]>>(`${this.apiUrl}`, iceDrinks);
  };


}


