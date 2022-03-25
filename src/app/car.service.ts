import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseUrl = "http://localhost:8080/api/";

  constructor(private httpClient: HttpClient) { }

   getCars(): Observable<Car[]>{
     return this.httpClient.get<Car[]>(`${this.baseUrl}cars`);
   }

   getById(id: any):Observable<Car>{
     return this.httpClient.get<Car>(`${this.baseUrl}car/${id}`);

   }
}
