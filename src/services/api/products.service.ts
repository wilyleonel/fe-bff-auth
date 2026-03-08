import axios from 'axios';
import { apiConfig } from './api.config';
import type { IProduct } from './products.interface.dto';

const productsApi = axios.create({
    baseURL: apiConfig.baseUrl,
    withCredentials: apiConfig.withCredentials,
});

export const productsService = {
    getProducts: async (): Promise<IProduct[]> => {
        const response = await productsApi.get('/products');
        return response.data;
    },
    getProductById: async (id: number): Promise<IProduct> => {
        const response = await productsApi.get(`/products/${id}`);
        return response.data;
    },
};
