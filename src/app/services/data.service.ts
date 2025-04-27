import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  
  getCountryData(svgCountry: SVGPathElement): Observable<any[]> {
    return this.http.get<any[]>(`https://api.worldbank.org/V2/country/${svgCountry.id}?format=json`);
  }
}
 