import {
    addToCartApiRequest,
    clearCartApiRequest,
    getCartApiRequest,
    removeFromCartApiRequest,
    updateCartItemApiRequest,
} from '@/apiRequests/cart';
import { AddToCartBodyType, UpdateCartItemBodyType } from '@/schemaValidations/cart.schema';
import { queryKeys } from '@/utils/query-client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// ==================== HOOK QUERY GIỎ HÀNG ====================

// Lấy giỏ hàng của người dùng
export const useCart = (enabled: boolean = true) => {
    return useQuery({
        queryKey: queryKeys.cart.current,
        queryFn: async () => {
            const response = await getCartApiRequest();
            return response.data;
        },
        enabled,
        staleTime: 2 * 60 * 1000, // 2 minutes - cart changes frequently
    });
};

// ==================== HOOK MUTATION GIỎ HÀNG ====================

// Thêm sản phẩm vào giỏ hàng
export const useAddToCart = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (body: AddToCartBodyType) => {
            const response = await addToCartApiRequest(body);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.cart.current });
        },
    });
};

// Cập nhật số lượng sản phẩm trong giỏ hàng
export const useUpdateCartItem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ itemId, body }: { itemId: number; body: UpdateCartItemBodyType }) => {
            const response = await updateCartItemApiRequest(itemId, body);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.cart.current });
        },
    });
};

// Xóa sản phẩm khỏi giỏ hàng
export const useRemoveFromCart = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (itemId: number) => {
            const response = await removeFromCartApiRequest(itemId);
            return response;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.cart.current });
        },
    });
};

// Xóa toàn bộ giỏ hàng
export const useClearCart = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async () => {
            const response = await clearCartApiRequest();
            return response;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.cart.current });
        },
    });
};
