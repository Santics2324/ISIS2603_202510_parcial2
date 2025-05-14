import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
  {
  providedIn: 'root'
})
export class CandidatoService 
{

private allUrl = 'https://raw.githubusercontent.com/k-garces/ISIS2603_202510_parcial2/refs/heads/main/jsons/candidates.json';

constructor(private http: HttpClient) { }

getAllCandidatos(): Observable <any> {
  return this.http.get<any>(this.allUrl); 

}

getCandistadDetail(id: number): Observable<any> 
{
  const detailUrl = 'https://raw.githubusercontent.com/k-garces/ISIS2603_202510_parcial2/refs/heads/main/jsons/${id}/candidates.json';
  return this.http.get<any>(detailUrl);


}
}
