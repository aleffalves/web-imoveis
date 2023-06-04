import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { Imovel } from '../models/imovel.model';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  urlApi : string = environment.apiURLBase.concat('/imovel')
  urlApiCep :string = environment.apiCep

  constructor(
    private http : HttpClient
  ) { }

  buscarImoveis(): Observable<Imovel[]>{
    return this.http.get<Imovel[]>(`${this.urlApi}`)
  }

  salvarImovel(imovel : Imovel): Observable<Imovel>{
    return this.http.post<Imovel>(`${this.urlApi}`, imovel)
  }

  buscarCep(cep : string): Observable<any>{
    return this.http.get<any>(`${this.urlApiCep}${cep}/json`)
  }
}
