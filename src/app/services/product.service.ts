import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll():Observable<Product[]>{
    return this.http.get<Product[]>('/assets/products.json');
  }

  getById(productId: number): Observable<Product> {
    return this.http.get<Product[]>('/assets/products.json')
      .pipe(
        map(products => <Product>products.find(p => p.id === productId))
      );
  }
}

export interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
}