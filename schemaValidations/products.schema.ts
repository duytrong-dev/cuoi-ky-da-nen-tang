import z from "zod";

// Product schema 
export const ProductSchema = z.object({
    id: z.number(),
    shop_id: z.number().nullable(),
    category_id: z.number().nullable(),
    brand_id: z.number().nullable(),
    name: z.string().min(2).max(100),
    description: z.string().nullable(),
    images: z.array(z.string()).nullable(),
    // Sử dụng coerce để tự động chuyển đổi string sang number cho decimal
    price: z.coerce.number(),
    stock: z.number(),
    status: z.enum(['draft', 'active', 'out_of_stock', 'hidden', 'archived']).default('draft'),
    // Rating có thể là string từ backend (decimal), coerce sẽ chuyển thành number
    rating: z.coerce.number().default(0).nullable(),
    sold_count: z.number().default(0),
    created_at: z.string(),
    updated_at: z.string(),
    wishlists_count: z.number().default(0),
});
export type ProductType = z.TypeOf<typeof ProductSchema>;