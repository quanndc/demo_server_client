import {createReducer, on} from '@ngrx/store';
import { ProductActions } from '../actions/product.action';
import { ProductState } from '../states/product.state';


const initialSate: ProductState = {
    product: null,
    loading: false,
    error: null,
};


export const productReducer = createReducer(
    initialSate,
    on(ProductActions.loadProducts, (state) => {
        return {
            ...state,
            loading: true,
            error: null,
        }
    }),

    on(ProductActions.loadProductsSuccess, (state,{productData}) => {
        return {
            ...state,
            product: <[]>productData,
            loading: false,
            error: null,
        }
    }),
    
    on(ProductActions.loadProductsFailure, (state,{error}) => {
        return {
            ...state,
            product: null,
            loading:false,
            error: error
        }
    }),

    on(ProductActions.createProduct, (state) => {
        return {
            ...state,
            loading: true,
            error: null,
        }
    }),

    on(ProductActions.createProductSuccess, (state,) => {
        return {
            ...state,
            loading: false,
            error: null,
        }
    }),

    on(ProductActions.createProductFailure, (state,{error}) => {
        return {
            ...state,
            product: null,
            loading: false,
            error: error,
        }
    }),

    on(ProductActions.updateProduct, (state) => {
        return {
            ...state,
            loading: true,
            error: null,
        }
    }),

    on(ProductActions.updateProductSuccess, (state) => {
        return {
            ...state,
            loading: false,
            error: null,
        }
    }),

    on(ProductActions.updateProductFailure, (state,{error}) => {
        return {
            ...state,
            product: null,
            loading: false,
            error: error,
        }
    }),

    on(ProductActions.deleteProduct, (state) => {
        return {
            ...state,
            loading: true,
            error: null,
        }
    }),

    on(ProductActions.deleteProductSuccess, (state) => {
        return {
            ...state,
            product: null,
            loading: false,
            error: null,
        }
    }),

    on(ProductActions.deleteProductFailure, (state,{error}) => {
        return {
            ...state,
            product: null,
            loading: false,
            error: error,
        }
    }),

    on(ProductActions.loadProduct, (state) => {
        return {
            ...state,
            loading: true,
            error: null,
        }
    }),

    on(ProductActions.loadProductSuccess, (state,{product}) => {
        return {
            ...state,
            product: product,
            loading: false,
            error: null,
        }
    }),

    on(ProductActions.loadProductFailure, (state,{error}) => {
        return {
            ...state,
            product: null,
            loading: false,
            error: error,
        }
    }),
);