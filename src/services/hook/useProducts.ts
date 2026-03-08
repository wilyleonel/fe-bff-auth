import { useQuery } from '@tanstack/react-query';
import { productsService } from '../api/products.service';

export const useProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: productsService.getProducts,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
};

export const useProductById = (id: number) => {
    return useQuery({
        queryKey: ['products', id],
        queryFn: () => productsService.getProductById(id),
        staleTime: 5 * 60 * 1000,
        enabled: !!id,
    });
};
