import {
    cancelOrderApiRequest,
    createOrderApiRequest,
    getOrderApiRequest,
    getOrdersApiRequest,
    updateOrderStatusApiRequest,
    updatePaymentStatusApiRequest,
} from '@/apiRequests/orders';
import {
    CreateOrderBodyType,
    UpdateOrderStatusBodyType,
    UpdatePaymentStatusBodyType,
} from '@/schemaValidations/orders.schema';
import { queryKeys } from '@/utils/query-client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// ==================== HOOK QUERY ĐƠN HÀNG ====================

// Lấy tất cả đơn hàng có phân trang
export const useOrders = (status?: 'pending' | 'paid' | 'shipping' | 'completed' | 'cancelled', page: number = 1, limit: number = 20) => {
    return useQuery({
        queryKey: queryKeys.order.list(page, limit),
        queryFn: async () => {
            const response = await getOrdersApiRequest(status, page, limit);
            return response;
        },
        staleTime: 2 * 60 * 1000, // 2 minutes
    });
};

// Lấy chi tiết đơn hàng
export const useOrder = (id: number, enabled: boolean = true) => {
    return useQuery({
        queryKey: queryKeys.order.detail(id),
        queryFn: async () => {
            const response = await getOrderApiRequest(id);
            return response.data;
        },
        enabled,
        staleTime: 2 * 60 * 1000,
    });
};

// ==================== HOOK MUTATION ĐƠN HÀNG ====================

// Tạo đơn hàng
export const useCreateOrder = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (body: CreateOrderBodyType) => {
            const response = await createOrderApiRequest(body);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.order.list() });
            // Xóa giỏ hàng sau khi đặt hàng thành công
            queryClient.invalidateQueries({ queryKey: queryKeys.cart.current });
        },
    });
};

// Cập nhật trạng thái đơn hàng
export const useUpdateOrderStatus = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ id, body }: { id: number; body: UpdateOrderStatusBodyType }) => {
            const response = await updateOrderStatusApiRequest(id, body);
            return response.data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: queryKeys.order.detail(data.id) });
            queryClient.invalidateQueries({ queryKey: queryKeys.order.list() });
        },
    });
};

// Hủy đơn hàng
export const useCancelOrder = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id: number) => {
            const response = await cancelOrderApiRequest(id);
            return response;
        },
        onSuccess: (_, id) => {
            queryClient.invalidateQueries({ queryKey: queryKeys.order.detail(id) });
            queryClient.invalidateQueries({ queryKey: queryKeys.order.list() });
        },
    });
};

// Cập nhật trạng thái thanh toán
export const useUpdatePaymentStatus = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ id, body }: { id: number; body: UpdatePaymentStatusBodyType }) => {
            const response = await updatePaymentStatusApiRequest(id, body);
            return response.data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: queryKeys.order.detail(data.id) });
            queryClient.invalidateQueries({ queryKey: queryKeys.order.list() });
        },
    });
};
