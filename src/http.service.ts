import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  jsonFile = '../assets/products.json';

  constructor(private http: HttpClient) {}

  getProductsOverHTTP(): Observable<any> {
    return this.http.get(this.jsonFile);
  }
  getData(paginginformation) {
    return http.get("../assets/user.json")
  }
}