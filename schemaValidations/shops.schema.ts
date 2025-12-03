import { StatusValues } from '@/constants/type';
import z from 'zod';
import { BusinessTypeSchema } from './businessTypes.schema';
import { UserSchema } from './users.schema';

// ==================== SCHEMA CỬA HÀNG ====================

// Schema liên kết mạng xã hội
export const SocialLinksSchema = z.object({
    facebook: z.string().url().optional(),
    instagram: z.string().url().optional(),
    tiktok: z.string().url().optional(),
    twitter: z.string().url().optional(),
}).optional();

// Schema cửa hàng
export const ShopSchema = z.object({
    id: z.number(),
    owner_id: z.number(),
    name: z.string(),
    description: z.string().nullable(),
    logo: z.string().nullable(),
    banner: z.string().nullable(),
    business_type_id: z.number(),
    join_date: z.string(),
    address: z.string().nullable(),
    rating: z.number(),
    status: z.enum(StatusValues),
    updated_at: z.string(),
    created_at: z.string(),
    owner: UserSchema,
    business_type: BusinessTypeSchema,
});
export type ShopType = z.TypeOf<typeof ShopSchema>;

// ==================== CRUD CỬA HÀNG ====================

// Schema tạo cửa hàng
export const CreateShopBody = z.object({
    name: z.string().min(2, { message: "Tên shop phải có ít nhất 2 ký tự" }).max(255),
    description: z.string().max(500, { message: "Mô tả không được vượt quá 500 ký tự" }).nullable(),
    logo: z.string().nullable(),
    banner: z.string().nullable(),
    address: z.string().nullable(),
    business_type_id: z.number(),
});
export type CreateShopBodyType = z.TypeOf<typeof CreateShopBody>;

// Schema phản hồi tạo cửa hàng
export const CreateShopRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: ShopSchema,
});
export type CreateShopResType = z.TypeOf<typeof CreateShopRes>;

// Schema phản hồi lấy chi tiết cửa hàng
export const GetShopRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: ShopSchema,
});
export type GetShopResType = z.TypeOf<typeof GetShopRes>;

// Schema phản hồi lấy danh sách cửa hàng
export const GetShopsRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.array(ShopSchema),
});
export type GetShopsResType = z.TypeOf<typeof GetShopsRes>;

// Schema cập nhật cửa hàng
export const UpdateShopBody = CreateShopBody.partial();
export type UpdateShopBodyType = z.TypeOf<typeof UpdateShopBody>;

// Schema phản hồi cập nhật cửa hàng
export const UpdateShopRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: ShopSchema,
});
export type UpdateShopResType = z.TypeOf<typeof UpdateShopRes>;

// Schema phản hồi xóa cửa hàng
export const DeleteShopRes = z.object({
    success: z.boolean(),
    message: z.string(),
});
export type DeleteShopResType = z.TypeOf<typeof DeleteShopRes>;

// ==================== NGƯỜI THEO DÕI CỬA HÀNG ====================

// Schema người theo dõi
export const FollowerSchema = z.object({
    id: z.number(),
    name: z.string(),
    avatar: z.string().nullable(),
    followed_at: z.string(),
});

// Schema phản hồi lấy danh sách người theo dõi
export const GetFollowersRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.array(FollowerSchema),
});
export type GetFollowersResType = z.TypeOf<typeof GetFollowersRes>;

// Schema phản hồi theo dõi/hủy theo dõi
export const FollowRes = z.object({
    success: z.boolean(),
    message: z.string(),
});
export type FollowResType = z.TypeOf<typeof FollowRes>;

// ==================== ĐÁNH GIÁ CỬA HÀNG ====================

// Schema đánh giá
export const ShopRatingSchema = z.object({
    id: z.number(),
    shop_id: z.number(),
    user_id: z.number(),
    order_id: z.number().nullable(),
    rating: z.number().min(1).max(5),
    comment: z.string().nullable(),
    created_at: z.string(),
    user_name: z.string().optional(),
    user_avatar: z.string().nullable().optional(),
});
export type ShopRatingType = z.TypeOf<typeof ShopRatingSchema>;

// Schema tạo đánh giá
export const CreateShopRatingBody = z.object({
    order_id: z.number(),
    rating: z.number().min(1, { message: "Đánh giá tối thiểu là 1 sao" }).max(5, { message: "Đánh giá tối đa là 5 sao" }),
    comment: z.string().optional(),
});
export type CreateShopRatingBodyType = z.TypeOf<typeof CreateShopRatingBody>;

// Schema phản hồi tạo đánh giá
export const CreateShopRatingRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: ShopRatingSchema,
});
export type CreateShopRatingResType = z.TypeOf<typeof CreateShopRatingRes>;

// Schema phản hồi lấy danh sách đánh giá
export const GetShopRatingsRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.array(ShopRatingSchema),
});
export type GetShopRatingsResType = z.TypeOf<typeof GetShopRatingsRes>;

// ==================== THÍCH CỬA HÀNG ====================

// Schema phản hồi thích/bỏ thích
export const LikeShopRes = z.object({
    success: z.boolean(),
    message: z.string(),
});
export type LikeShopResType = z.TypeOf<typeof LikeShopRes>;

// ==================== THỐNG KÊ CỬA HÀNG ====================

// Schema thống kê cửa hàng
export const ShopAnalyticsSchema = z.object({
    total_orders: z.number(),
    completed_orders: z.number(),
    total_revenue: z.number(),
    active_products: z.number(),
    followers: z.number(),
    avg_rating: z.number().nullable(),
    total_ratings: z.number(),
});
export type ShopAnalyticsType = z.TypeOf<typeof ShopAnalyticsSchema>;

// Schema phản hồi lấy thống kê
export const GetShopAnalyticsRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: ShopAnalyticsSchema,
});
export type GetShopAnalyticsResType = z.TypeOf<typeof GetShopAnalyticsRes>;

// Schema sản phẩm bán chạy
export const BestSellerProductSchema = z.object({
    id: z.number(),
    name: z.string(),
    total_sold: z.number(),
    revenue: z.number(),
});

// Schema phản hồi lấy danh sách sản phẩm bán chạy
export const GetBestSellersRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.array(BestSellerProductSchema),
});
export type GetBestSellersResType = z.TypeOf<typeof GetBestSellersRes>;
