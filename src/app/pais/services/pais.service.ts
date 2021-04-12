import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contry } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string="https://restcountries.eu/rest/v2";
  
  constructor(private http:HttpClient) { }
  
  buscarPais(termino:string):Observable<Contry[]>{
    const utl=`${this.apiUrl}/name/${termino};`
    return this.http.get<Contry[]>(utl);
  }

}
