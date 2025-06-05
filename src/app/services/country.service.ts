import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  fetchCountry(code: string): Observable<any> {
    return this.http.get(`https://api.worldbank.org/v2/country/${code}?format=json`);
  }
}