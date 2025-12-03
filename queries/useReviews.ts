import {
    createProductReviewApiRequest,
    getProductReviewsApiRequest,
    getReviewStatsApiRequest,
} from '@/apiRequests/reviews';
import { CreateProductReviewBodyType } from '@/schemaValidations/reviews.schema';
import { queryKeys } from '@/utils/query-client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// ==================== HOOK QUERY ĐÁNH GIÁ ====================

// Lấy đánh giá sản phẩm có phân trang
export const useProductReviews = (productId: number, page: number = 1, limit: number = 20, enabled: boolean = true) => {
    return useQuery({
        queryKey: queryKeys.review.byProduct(productId, page, limit),
        queryFn: async () => {
            const response = await getProductReviewsApiRequest(productId, page, limit);
            return response;
        },
        enabled,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
};

// Lấy thống kê đánh giá cho sản phẩm
export const useReviewStats = (productId: number, enabled: boolean = true) => {
    return useQuery({
        queryKey: queryKeys.review.stats(productId),
        queryFn: async () => {
            const response = await getReviewStatsApiRequest(productId);
            return response.data;
        },
        enabled,
        staleTime: 5 * 60 * 1000,
    });
};

// ==================== HOOK MUTATION ĐÁNH GIÁ ====================

// Tạo đánh giá sản phẩm
export const useCreateProductReview = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ productId, body }: { productId: number; body: CreateProductReviewBodyType }) => {
            const response = await createProductReviewApiRequest(productId, body);
            return response.data;
        },
        onSuccess: (data) => {
            // Invalidate đánh giá cho sản phẩm này
            queryClient.invalidateQueries({ queryKey: queryKeys.review.byProduct(data.product_id) });
            // Invalidate thống kê đánh giá
            queryClient.invalidateQueries({ queryKey: queryKeys.review.stats(data.product_id) });
            // Invalidate chi tiết sản phẩm để cập nhật đánh giá
            queryClient.invalidateQueries({ queryKey: queryKeys.product.detail(data.product_id) });
            // Invalidate chi tiết đơn hàng nếu có order_id (đơn hàng hiển thị trạng thái đánh giá)
            if (data.order_id) {
                queryClient.invalidateQueries({ queryKey: queryKeys.order.detail(data.order_id) });
            }
        },
    });
};
