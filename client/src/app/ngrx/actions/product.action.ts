import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/models/product.model";

export const ProductActions = {
    loadProducts: createAction('[Product] Load Products'),
    loadProductsSuccess: createAction('[Product] Load Products Success', props<{productData: Product[]}>()),
    loadProductsFailure: createAction('[Product] Load Products Failure', props<{error: string}>()),

    createProduct: createAction('[Product] Create Product', props<{product:Product}>()),
    createProductSuccess: createAction('[Product] Create Product Success'),
    createProductFailure: createAction('[Product] Create Product Failure', props<{error: string}>()),

    updateProduct: createAction('[Product] Update Product', props<{id:string ,product: Product}>()),
    updateProductSuccess: createAction('[Product] Update Product Success'),
    updateProductFailure: createAction('[Product] Update Product Failure', props<{error: string}>()),

    deleteProduct: createAction('[Product] Delete Product', props<{productId: string}>()),
    deleteProductSuccess: createAction('[Product] Delete Product Success'),
    deleteProductFailure: createAction('[Product] Delete Product Failure', props<{error: string}>()),

    loadProduct: createAction('[Product] Load Product', props<{productId: string}>()),
    loadProductSuccess: createAction('[Product] Load Product Success', props<{product: Product}>()),
    loadProductFailure: createAction('[Product] Load Product Failure', props<{error: string}>()),
}