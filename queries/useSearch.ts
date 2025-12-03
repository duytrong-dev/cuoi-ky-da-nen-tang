import { searchProductsApiRequest } from '@/apiRequests/search';
import { SearchFiltersType } from '@/schemaValidations/search.schema';
import { queryKeys } from '@/utils/query-client';
import { useQuery } from '@tanstack/react-query';

// ==================== HOOK QUERY TÌM KIẾM ====================

// Tìm kiếm sản phẩm với bộ lọc
export const useSearchProducts = (filters: SearchFiltersType, enabled: boolean = true) => {
    return useQuery({
        queryKey: queryKeys.search.products(filters),
        queryFn: async () => {
            const response = await searchProductsApiRequest(filters);
            return response;
        },
        enabled: enabled && !!filters.q, // Only search if there's a query
        staleTime: 2 * 60 * 1000, // 2 minutes
    });
};
