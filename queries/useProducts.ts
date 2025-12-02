import { getRecommendedProductsApiRequest } from '@/apiRequests/products';
import { queryKeys } from '@/utils/query-client';
import { useQuery } from '@tanstack/react-query';

// Hook để get recommended products
export const useRecommendedProducts = () => {
    return useQuery({
        queryKey: queryKeys.product.recommended,
        queryFn: async () => {
            const response = await getRecommendedProductsApiRequest();
            return response.data;
        },
        staleTime: 5 * 60 * 1000,
    });
};