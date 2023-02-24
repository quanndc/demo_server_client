import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, mergeMap, EMPTY, from } from 'rxjs';


import { ProductService } from "src/app/services/product.service";
import { ProductActions } from "../actions/product.action";


@Injectable()
export class ProductEffects {
    constructor(private action$: Actions, private productService: ProductService, private router: Router){}


    createProduct$ = createEffect(() => {
        return this.action$.pipe(
            ofType(ProductActions.createProduct),
            switchMap((action) => {
                return from(this.productService.createProduct(action.product)).pipe(
                    map((product:any) => {
                        if(product.success){
                            return ProductActions.createProductSuccess();
                        }else{
                            return ProductActions.createProductFailure({error: product.error});
                        }
                    }),
                    catchError((error) => {
                        return of(ProductActions.createProductFailure({error: error}));
                    })
                )
            })
        )
    });

    updateProduct$ = createEffect(() => {
        return this.action$.pipe(
            ofType(ProductActions.updateProduct),
            switchMap((action) => {
                return from(this.productService.updateProduct(action.id, action.product)).pipe(
                    map((product:any) => {
                        if(product.success){
                            return ProductActions.updateProductSuccess();
                        }else{
                            return ProductActions.updateProductFailure({error: product.error});
                        }
                    }),
                    catchError((error) => {
                        return of(ProductActions.updateProductFailure({error: error}));
                    })
                )
            })
        )
    });


    deleteProduct$ = createEffect(() => {
        return this.action$.pipe(
            ofType(ProductActions.deleteProduct),
            switchMap((action) => {
                return from(this.productService.deleteProduct(action.productId)).pipe(
                    map((product:any) => {
                        if(product.success){
                            return ProductActions.deleteProductSuccess();
                        }else{
                            return ProductActions.deleteProductFailure({error: product.error});
                        }
                    }),
                    catchError((error) => {
                        return of(ProductActions.deleteProductFailure({error: error}));
                    })
                )
            })
        )
    });

    loadProducts$ = createEffect(() => {
        return this.action$.pipe(
            ofType(ProductActions.loadProducts),
            switchMap((action) => {
                return from(this.productService.getAllProduct()).pipe(
                    map((products:any) => {
                        if(products){
                            return ProductActions.loadProductsSuccess({productData: products});
                        }else{
                            return ProductActions.loadProductsFailure({error: products.error});
                        }
                    }),
                    catchError((error) => {
                        return of(ProductActions.loadProductsFailure({error: error}));
                    })
                )
            })
        )
    });

    loadProduct$ = createEffect(() => {
        return this.action$.pipe(
            ofType(ProductActions.loadProduct),
            switchMap((action) => {
                return from(this.productService.getProductById(action.productId)).pipe(
                    map((product:any) => {
                        if(product.success){
                            return ProductActions.loadProductSuccess({product: product});
                        }else{
                            return ProductActions.loadProductFailure({error: product.error});
                        }
                    }),
                    catchError((error) => {
                        return of(ProductActions.loadProductFailure({error: error}));
                    })
                )
            })
        )
    })

}