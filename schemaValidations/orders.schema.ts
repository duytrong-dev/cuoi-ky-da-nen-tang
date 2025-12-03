import z from 'zod';

// ==================== SCHEMA ĐƠN HÀNG ====================

// Enum trạng thái đơn hàng
export const OrderStatus = z.enum(['pending', 'paid', 'shipping', 'completed', 'cancelled']);
export type OrderStatusType = z.infer<typeof OrderStatus>;

// Enum trạng thái thanh toán
export const PaymentStatus = z.enum(['pending', 'success', 'failed']);
export type PaymentStatusType = z.infer<typeof PaymentStatus>;

// Schema sản phẩm trong đơn hàng
export const OrderItemSchema = z.object({
    id: z.number(),
    order_id: z.number(),
    variant_id: z.number(),
    price: z.number(),
    quantity: z.number(),
    // Các trường được populate
    product: z.any().optional(),
    variant: z.any().optional(),
});
export type OrderItemType = z.TypeOf<typeof OrderItemSchema>;

// Schema đơn hàng
export const OrderSchema = z.object({
    id: z.number(),
    user_id: z.number(),
    shop_id: z.number(),
    address_id: z.number().nullable(),
    total_amount: z.number(),
    status: OrderStatus,
    note: z.string().nullable(),
    payment_method: z.string(),
    payment_status: PaymentStatus,
    created_at: z.string(),
    updated_at: z.string(),
    // Các trường được populate
    shop_name: z.string().optional(),
    shop_logo: z.string().nullable().optional(),
    address: z.string().optional(),
    receiver_name: z.string().optional(),
    receiver_phone: z.string().optional(),
    items: z.array(OrderItemSchema).optional(),
});
export type OrderType = z.TypeOf<typeof OrderSchema>;

// ==================== TẠO ĐƠN HÀNG ====================

// Schema tạo sản phẩm trong đơn hàng
export const CreateOrderItemBody = z.object({
    variant_id: z.number(),
    quantity: z.number().min(1),
});

// Schema tạo đơn hàng
export const CreateOrderBody = z.object({
    shop_id: z.number({ message: "Vui lòng chọn shop" }),
    address_id: z.number({ message: "Vui lòng chọn địa chỉ giao hàng" }),
    items: z.array(CreateOrderItemBody).min(1, { message: "Đơn hàng phải có ít nhất 1 sản phẩm" }),
    note: z.string().optional(),
    payment_method: z.string().default('cod'),
});
export type CreateOrderBodyType = z.TypeOf<typeof CreateOrderBody>;

// Schema phản hồi tạo đơn hàng
export const CreateOrderRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: OrderSchema,
});
export type CreateOrderResType = z.TypeOf<typeof CreateOrderRes>;

// ==================== LẤY ĐƠN HÀNG ====================

// Schema phản hồi lấy danh sách đơn hàng
export const GetOrdersRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.array(OrderSchema),
    pagination: z.object({
        page: z.number(),
        limit: z.number(),
        total: z.number(),
        totalPages: z.number(),
    }).optional(),
});
export type GetOrdersResType = z.TypeOf<typeof GetOrdersRes>;

// Schema phản hồi lấy chi tiết đơn hàng
export const GetOrderRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: OrderSchema,
});
export type GetOrderResType = z.TypeOf<typeof GetOrderRes>;

// ==================== CẬP NHẬT ĐƠN HÀNG ====================

// Schema cập nhật trạng thái đơn hàng
export const UpdateOrderStatusBody = z.object({
    status: OrderStatus,
});
export type UpdateOrderStatusBodyType = z.TypeOf<typeof UpdateOrderStatusBody>;

// Schema phản hồi cập nhật trạng thái đơn hàng
export const UpdateOrderStatusRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: OrderSchema,
});
export type UpdateOrderStatusResType = z.TypeOf<typeof UpdateOrderStatusRes>;

// Schema phản hồi hủy đơn hàng
export const CancelOrderRes = z.object({
    success: z.boolean(),
    message: z.string(),
});
export type CancelOrderResType = z.TypeOf<typeof CancelOrderRes>;

// Schema cập nhật trạng thái thanh toán
export const UpdatePaymentStatusBody = z.object({
    payment_status: PaymentStatus,
});
export type UpdatePaymentStatusBodyType = z.TypeOf<typeof UpdatePaymentStatusBody>;

// Schema phản hồi cập nhật trạng thái thanh toán
export const UpdatePaymentStatusRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: OrderSchema,
});
export type UpdatePaymentStatusResType = z.TypeOf<typeof UpdatePaymentStatusRes>;
