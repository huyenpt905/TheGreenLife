import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CategoryModel } from '../dto/category.model';

import { Observable } from 'rxjs';
import { ProductModel } from '../dto/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private API = "https://5eaae2b2a280ac0016656e7e.mockapi.io/api";
  constructor(
    private http: HttpClient
  ) { }

  getCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(`${this.API}/category`);
  }

  getProducts(id: number): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.API}/category/${id}/product`);
  }

  getProductById(categoryId: string, productId: string): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${this.API}/category/${categoryId}/product/${productId}`);
  }

}
