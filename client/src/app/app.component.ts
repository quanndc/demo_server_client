import { ProductState } from './ngrx/states/product.state';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductActions } from './ngrx/actions/product.action';
import {OnInit} from '@angular/core';
import { Product } from './models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'client';
  products$ = this.store.select('product');

  constructor(private store: Store<{product: Product}>) {
  }

  ngOnInit() {
  }

  getData(){
    this.store.dispatch(ProductActions.loadProducts());
    this.products$.subscribe((data) => {
      console.log(data);
    })
  }
}
