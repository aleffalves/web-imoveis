import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { Proprietario } from '../models/proprietario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProprietarioService {

  urlApi : string = environment.apiURLBase.concat('/proprietario')

  constructor(
    private http : HttpClient
  ) { }

  salvarProprietario(proprietario: Proprietario): Observable<Proprietario>{
    return this.http.post<Proprietario>(`${this.urlApi}`, proprietario);
  }

  deletarProprietario(proprietario: Proprietario): Observable<void>{
    return this.http.delete<void>(`${this.urlApi}/${proprietario.id}`,)
  }

  atualizarProprietario(proprietario: Proprietario): Observable<Proprietario>{
    return this.http.put<Proprietario>(`${this.urlApi}/${proprietario.id}`, proprietario);
  }

}
