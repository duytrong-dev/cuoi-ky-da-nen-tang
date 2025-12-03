import { getBusinessTypesApiRequest } from '@/apiRequests/businessTypes';
import { queryKeys } from '@/utils/query-client';
import { useQuery } from '@tanstack/react-query';

// ==================== HOOK QUERY LOẠI HÌNH KINH DOANH ====================

// Lấy danh sách loại hình kinh doanh
export const useBusinessTypes = (enabled: boolean = true) => {
    return useQuery({
        queryKey: queryKeys.businessType.all,
        queryFn: async () => {
            const response = await getBusinessTypesApiRequest();
            return response.data;
        },
        enabled,
        staleTime: 30 * 60 * 1000, // 30 phút - business types ít thay đổi
    });
};
