import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const urlAPI = 'http://localhost:3000/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(urlAPI);
  }

  detail(id: number): Observable<any> {
    return this.http.get<any>(`${urlAPI}/${id}`);
  }
}
