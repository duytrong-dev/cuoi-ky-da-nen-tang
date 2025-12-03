import z from 'zod';

// ==================== SCHEMA ĐÁNH GIÁ SẢN PHẨM ====================

// Schema đánh giá sản phẩm
export const ProductReviewSchema = z.object({
    id: z.number(),
    order_id: z.number(),
    product_id: z.number(),
    variant_id: z.number().nullable(),
    user_id: z.number(),
    rating: z.number().min(1).max(5),
    comment: z.string().nullable(),
    created_at: z.string(),
    // Các trường được populate
    user_name: z.string().optional(),
    user_avatar: z.string().nullable().optional(),
    variant_sku: z.string().optional(),
});
export type ProductReviewType = z.TypeOf<typeof ProductReviewSchema>;

// Schema tạo đánh giá sản phẩm
export const CreateProductReviewBody = z.object({
    order_id: z.number({ message: "Vui lòng cung cấp mã đơn hàng" }),
    variant_id: z.number().optional(),
    rating: z.number().min(1, { message: "Đánh giá tối thiểu là 1 sao" }).max(5, { message: "Đánh giá tối đa là 5 sao" }),
    comment: z.string().optional(),
});
export type CreateProductReviewBodyType = z.TypeOf<typeof CreateProductReviewBody>;

// Schema phản hồi tạo đánh giá sản phẩm
export const CreateProductReviewRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: ProductReviewSchema,
});
export type CreateProductReviewResType = z.TypeOf<typeof CreateProductReviewRes>;

// Schema phản hồi lấy danh sách đánh giá sản phẩm
export const GetProductReviewsRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.array(ProductReviewSchema),
    pagination: z.object({
        page: z.number(),
        limit: z.number(),
        total: z.number(),
        totalPages: z.number(),
    }).optional(),
});
export type GetProductReviewsResType = z.TypeOf<typeof GetProductReviewsRes>;

// Schema thống kê đánh giá
export const ReviewStatsSchema = z.object({
    total_reviews: z.number(),
    avg_rating: z.number(),
    five_star: z.number(),
    four_star: z.number(),
    three_star: z.number(),
    two_star: z.number(),
    one_star: z.number(),
});
export type ReviewStatsType = z.TypeOf<typeof ReviewStatsSchema>;

// Schema phản hồi lấy thống kê đánh giá
export const GetReviewStatsRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: ReviewStatsSchema,
});
export type GetReviewStatsResType = z.TypeOf<typeof GetReviewStatsRes>;
