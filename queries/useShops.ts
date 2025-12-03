import {
    createShopApiRequest,
    deleteShopApiRequest,
    getBestSellersApiRequest,
    getMyShopsApiRequest,
    getShopAnalyticsApiRequest,
    getShopApiRequest,
    getShopFollowersApiRequest,
    getShopRatingsApiRequest,
    likeShopApiRequest,
    rateShopApiRequest,
    unlikeShopApiRequest,
    updateShopApiRequest
} from '@/apiRequests/shops';
import {
    CreateShopBodyType,
    CreateShopRatingBodyType,
    UpdateShopBodyType,
} from '@/schemaValidations/shops.schema';
import { queryKeys } from '@/utils/query-client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// ==================== HOOK QUERY CỬA HÀNG ====================

// Lấy cửa hàng theo ID
export const useShop = (id: number, enabled: boolean = true) => {
    return useQuery({
        queryKey: queryKeys.shop.detail(id),
        queryFn: async () => {
            const response = await getShopApiRequest(id);
            return response.data;
        },
        enabled,
        staleTime: 5 * 60 * 1000,
    });
};

// Lấy danh sách cửa hàng của tôi
export const useMyShops = (enabled: boolean = true) => {
    return useQuery({
        queryKey: queryKeys.shop.myShops,
        queryFn: async () => {
            const response = await getMyShopsApiRequest();
            return response.data;
        },
        enabled,
        staleTime: 5 * 60 * 1000,
    });
};

// Lấy danh sách người theo dõi cửa hàng
export const useShopFollowers = (shopId: number, page: number = 1, limit: number = 20, enabled: boolean = true) => {
    return useQuery({
        queryKey: queryKeys.shop.followers(shopId, page, limit),
        queryFn: async () => {
            const response = await getShopFollowersApiRequest(shopId, page, limit);
            return response.data;
        },
        enabled,
        staleTime: 5 * 60 * 1000,
    });
};

// Lấy danh sách đánh giá cửa hàng
export const useShopRatings = (shopId: number, page: number = 1, limit: number = 20, enabled: boolean = true) => {
    return useQuery({
        queryKey: queryKeys.shop.ratings(shopId, page, limit),
        queryFn: async () => {
            const response = await getShopRatingsApiRequest(shopId, page, limit);
            return response.data;
        },
        enabled,
        staleTime: 5 * 60 * 1000,
    });
};

// Lấy thống kê cửa hàng
export const useShopAnalytics = (shopId: number, enabled: boolean = true) => {
    return useQuery({
        queryKey: queryKeys.shop.analytics(shopId),
        queryFn: async () => {
            const response = await getShopAnalyticsApiRequest(shopId);
            return response.data;
        },
        enabled,
        staleTime: 5 * 60 * 1000,
    });
};

// Lấy danh sách sản phẩm bán chạy
export const useBestSellers = (shopId: number, limit: number = 10, enabled: boolean = true) => {
    return useQuery({
        queryKey: queryKeys.shop.bestSellers(shopId, limit),
        queryFn: async () => {
            const response = await getBestSellersApiRequest(shopId, limit);
            return response.data;
        },
        enabled,
        staleTime: 5 * 60 * 1000,
    });
};

// ==================== HOOK MUTATION CỬA HÀNG ====================

// Tạo cửa hàng
export const useCreateShop = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (body: CreateShopBodyType) => {
            const response = await createShopApiRequest(body);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [...queryKeys.shop.myShops, ...queryKeys.auth.currentUser] });
        },
    });
};

// Cập nhật cửa hàng
export const useUpdateShop = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ id, body }: { id: number; body: UpdateShopBodyType }) => {
            const response = await updateShopApiRequest(id, body);
            return response.data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: queryKeys.shop.detail(data.id) });
            queryClient.invalidateQueries({ queryKey: queryKeys.shop.myShops });
        },
    });
};

// Xóa cửa hàng
export const useDeleteShop = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id: number) => {
            const response = await deleteShopApiRequest(id);
            return response;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.shop.myShops });
        },
    });
};

// Theo dõi cửa hàng
// export const useFollowShop = () => {
//     const queryClient = useQueryClient();

//     return useMutation({
//         mutationFn: async ({ shopId, isFollowing }: { shopId: number; isFollowing: boolean }) => {
//             if (isFollowing) {
//                 return await unfollowShopApiRequest(shopId);
//             } else {
//                 return await followShopApiRequest(shopId);
//             }
//         },
//         onSuccess: (_, variables) => {
//             queryClient.invalidateQueries({ queryKey: queryKeys.shop.detail(variables.shopId) });
//             queryClient.invalidateQueries({ queryKey: queryKeys.shop.followers(variables.shopId) });
//         },
//     });
// };

// Thích cửa hàng
export const useLikeShop = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ shopId, isLiked }: { shopId: number; isLiked: boolean }) => {
            if (isLiked) {
                return await unlikeShopApiRequest(shopId);
            } else {
                return await likeShopApiRequest(shopId);
            }
        },
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: queryKeys.shop.detail(variables.shopId) });
        },
    });
};

// Đánh giá cửa hàng
export const useRateShop = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ shopId, body }: { shopId: number; body: CreateShopRatingBodyType }) => {
            const response = await rateShopApiRequest(shopId, body);
            return response.data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: queryKeys.shop.detail(data.shop_id) });
            queryClient.invalidateQueries({ queryKey: queryKeys.shop.ratings(data.shop_id) });
        },
    });
};
