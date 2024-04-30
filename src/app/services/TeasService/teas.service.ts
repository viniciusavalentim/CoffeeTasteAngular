import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Response } from 'src/app/models/Response';
import { Teas } from 'src/app/models/Teas';
import { IngredientsTeas } from 'src/app/models/IngredientsTeas';

@Injectable({
  providedIn: 'root'
})
export class TeasService {

  private apiUrl = `${environment.ApiUrl}/Teas`;

  constructor(private http: HttpClient) { }


  GetTeas():Observable<Response<Teas[]>>{
    return this.http.get<Response<Teas[]>>(`${this.apiUrl}`);
  };

  GetTeasById(id: number):Observable<Response<Teas>>{
    return this.http.get<Response<Teas>>(`${this.apiUrl}/ById/${id}`);
  };

  GetIngredientByTeasId(id: number): Observable<Response<IngredientsTeas[]>> {
    return this.http.get<Response<IngredientsTeas[]>>(`${this.apiUrl}/IngredientBy/${id}`);
  };

  CreateTeas(teas: Teas): Observable<Response<Teas[]>>{
    return this.http.post<Response<Teas[]>>(`${this.apiUrl}`, teas);
  };

  UpdateTeas(teas: Teas): Observable<Response<Teas[]>>{
    return this.http.put<Response<Teas[]>>(`${this.apiUrl}`, teas);
  };

  DeleteTeas(id: number): Observable<Response<IngredientsTeas[]>> {
    return this.http.delete<Response<IngredientsTeas[]>>(`${this.apiUrl}/${id}`);
  };

  DeleteIngredient(id: number): Observable<Response<IngredientsTeas>> {
    return this.http.delete<Response<IngredientsTeas>>(`${this.apiUrl}/DeleteIngredient/${id}`);
  };

}
