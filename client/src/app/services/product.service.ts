import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  apiURL = 'http://localhost:3000/product/';

  
  getAllProduct(){
    // console.log('getAllProduct()');
    return this.http.get(`${this.apiURL}getAll`) as Observable<Product[]>;
  }

  getProductById(id: string){
    return this.http.get(`${this.apiURL}${id}`) as Observable<Product>;
  }

  createProduct(product: Product){
    return this.http.post(`${this.apiURL}create`, {product: product}) as Observable<Product>;
  }

  updateProduct(id:string, product: Product){
    return this.http.put(`${this.apiURL}update/${id}`, {product: product}) as Observable<Product>;
  }

  deleteProduct(id:string){
    return this.http.delete(`${this.apiURL}delete/${id}`) as Observable<Product>;
  }

}
