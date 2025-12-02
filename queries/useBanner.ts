import { getBannersApiRequest } from '@/apiRequests/banner';
import { queryKeys } from '@/utils/query-client';
import { useQuery } from '@tanstack/react-query';

// Hook để get banners
export const useBanners = () => {
    return useQuery({
        queryKey: queryKeys.banner.all,
        queryFn: async () => {
            const response = await getBannersApiRequest();
            return response.data;
        },
        staleTime: 5 * 60 * 1000,
    });
};