import z from 'zod';

// ==================== SCHEMA GIỎ HÀNG ====================

// Schema sản phẩm trong giỏ hàng
export const CartItemSchema = z.object({
    id: z.number(),
    cart_id: z.number(),
    variant_id: z.number(),
    quantity: z.number().min(1),
    // Các trường được populate
    product: z.any().optional(), // Chi tiết sản phẩm
    variant: z.any().optional(), // Chi tiết biến thể
    subtotal: z.number().optional(),
});
export type CartItemType = z.TypeOf<typeof CartItemSchema>;

// Schema giỏ hàng
export const CartSchema = z.object({
    cart_id: z.number(),
    items: z.array(CartItemSchema),
    total: z.number(),
});
export type CartType = z.TypeOf<typeof CartSchema>;

// Schema phản hồi lấy giỏ hàng
export const GetCartRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: CartSchema,
});
export type GetCartResType = z.TypeOf<typeof GetCartRes>;

// Schema thêm vào giỏ hàng
export const AddToCartBody = z.object({
    variant_id: z.number({ message: "Vui lòng chọn sản phẩm" }),
    quantity: z.number().min(1, { message: "Số lượng phải lớn hơn 0" }).default(1),
});
export type AddToCartBodyType = z.TypeOf<typeof AddToCartBody>;

// Schema phản hồi thêm vào giỏ hàng
export const AddToCartRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: CartItemSchema,
});
export type AddToCartResType = z.TypeOf<typeof AddToCartRes>;

// Schema cập nhật sản phẩm trong giỏ hàng
export const UpdateCartItemBody = z.object({
    quantity: z.number().min(1, { message: "Số lượng phải lớn hơn 0" }),
});
export type UpdateCartItemBodyType = z.TypeOf<typeof UpdateCartItemBody>;

// Schema phản hồi cập nhật sản phẩm trong giỏ hàng
export const UpdateCartItemRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: CartItemSchema,
});
export type UpdateCartItemResType = z.TypeOf<typeof UpdateCartItemRes>;

// Schema phản hồi xóa khỏi giỏ hàng
export const RemoveFromCartRes = z.object({
    success: z.boolean(),
    message: z.string(),
});
export type RemoveFromCartResType = z.TypeOf<typeof RemoveFromCartRes>;

// Schema phản hồi xóa toàn bộ giỏ hàng
export const ClearCartRes = z.object({
    success: z.boolean(),
    message: z.string(),
});
export type ClearCartResType = z.TypeOf<typeof ClearCartRes>;
