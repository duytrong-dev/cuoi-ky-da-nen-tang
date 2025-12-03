import {
    CancelOrderRes,
    CancelOrderResType,
    CreateOrderBody,
    CreateOrderBodyType,
    CreateOrderRes,
    CreateOrderResType,
    GetOrderRes,
    GetOrderResType,
    GetOrdersRes,
    GetOrdersResType,
    OrderStatusType,
    UpdateOrderStatusBody,
    UpdateOrderStatusBodyType,
    UpdateOrderStatusRes,
    UpdateOrderStatusResType,
    UpdatePaymentStatusBody,
    UpdatePaymentStatusBodyType,
    UpdatePaymentStatusRes,
    UpdatePaymentStatusResType,
} from "@/schemaValidations/orders.schema";
import http from "@/utils/http";

// ==================== TẠO ĐƠN HÀNG ====================

// Tạo đơn hàng
export const createOrderApiRequest = async (body: CreateOrderBodyType): Promise<CreateOrderResType> => {
    const validatedBody = CreateOrderBody.parse(body);
    const response = await http.post<CreateOrderResType>("/orders", validatedBody);
    const validatedResponse = CreateOrderRes.parse(response);
    return validatedResponse;
};

// ==================== LẤY ĐƠN HÀNG ====================

// Lấy danh sách đơn hàng (người mua)
export const getOrdersApiRequest = async (
    status?: OrderStatusType,
    page: number = 1,
    limit: number = 20
): Promise<GetOrdersResType> => {
    const params: any = { page, limit };
    if (status) params.status = status;

    const response = await http.get<GetOrdersResType>("/orders", { params });
    const validatedResponse = GetOrdersRes.parse(response);
    return validatedResponse;
};

// Lấy danh sách đơn hàng cho người bán
export const getShopOrdersApiRequest = async (
    shopId: number,
    status?: OrderStatusType,
    page: number = 1,
    limit: number = 20
): Promise<GetOrdersResType> => {
    const params: any = { page, limit };
    if (status) params.status = status;

    const response = await http.get<GetOrdersResType>(`/shops/${shopId}/orders`, { params });
    const validatedResponse = GetOrdersRes.parse(response);
    return validatedResponse;
};

// Lấy đơn hàng theo ID
export const getOrderApiRequest = async (orderId: number): Promise<GetOrderResType> => {
    const response = await http.get<GetOrderResType>(`/orders/${orderId}`);
    const validatedResponse = GetOrderRes.parse(response);
    return validatedResponse;
};

// ==================== CẬP NHẬT ĐƠN HÀNG ====================

// Cập nhật trạng thái đơn hàng
export const updateOrderStatusApiRequest = async (
    orderId: number,
    body: UpdateOrderStatusBodyType
): Promise<UpdateOrderStatusResType> => {
    const validatedBody = UpdateOrderStatusBody.parse(body);
    const response = await http.put<UpdateOrderStatusResType>(`/orders/${orderId}/status`, validatedBody);
    const validatedResponse = UpdateOrderStatusRes.parse(response);
    return validatedResponse;
};

// Hủy đơn hàng
export const cancelOrderApiRequest = async (orderId: number): Promise<CancelOrderResType> => {
    const response = await http.put<CancelOrderResType>(`/orders/${orderId}/cancel`);
    const validatedResponse = CancelOrderRes.parse(response);
    return validatedResponse;
};

// Cập nhật trạng thái thanh toán
export const updatePaymentStatusApiRequest = async (
    orderId: number,
    body: UpdatePaymentStatusBodyType
): Promise<UpdatePaymentStatusResType> => {
    const validatedBody = UpdatePaymentStatusBody.parse(body);
    const response = await http.put<UpdatePaymentStatusResType>(`/orders/${orderId}/payment`, validatedBody);
    const validatedResponse = UpdatePaymentStatusRes.parse(response);
    return validatedResponse;
};
