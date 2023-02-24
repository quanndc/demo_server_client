import { Product } from "src/app/models/product.model";

export interface ProductState {
    product: Product |Array<Product>| null;
    loading: boolean;
    error: string | null;
}