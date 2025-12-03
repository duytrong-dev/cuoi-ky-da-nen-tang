import z from 'zod';

// ==================== SCHEMA TÌM KIẾM ====================

// Bộ lọc tìm kiếm
export const SearchFiltersSchema = z.object({
    q: z.string().optional(), // Từ khóa tìm kiếm
    category_id: z.number().optional(),
    brand_id: z.number().optional(),
    status: z.number().optional(),
    min_price: z.number().optional(),
    max_price: z.number().optional(),
    min_rating: z.number().optional(),
    in_stock: z.boolean().optional(),
    sort_by: z.string().optional(),
    sort_order: z.string().optional(),
    per_page: z.number().optional(),
});
export type SearchFiltersType = z.TypeOf<typeof SearchFiltersSchema>;

// Schema phản hồi tìm kiếm
export const SearchProductsRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.array(z.object({
        id: z.number(),
        shop_id: z.number(),
        category_id: z.number(),
        brand_id: z.number(),
        name: z.string(),
        description: z.string(),
        images: z.string().nullable(),
        price: z.string(),
        stock: z.number(),
        status: z.string(),
        rating: z.string(),
        sold_count: z.number(),
        created_at: z.string(),
        updated_at: z.string(),
        category: z.object({
            id: z.number(),
            name: z.string(),
            parent_id: z.number(),
            created_at: z.string(),
            updated_at: z.string(),
            image: z.string().nullable(),
            variants: z.array(z.object({
                id: z.number(),
                category_id: z.number(),
                name: z.string(),
                options: z.array(z.string()),
                is_required: z.boolean(),
                position: z.number(),
                created_at: z.string(),
                updated_at: z.string(),
            })),
        }),
        brand: z.object({
            id: z.number(),
            name: z.string(),
            created_at: z.string(),
            updated_at: z.string(),
        }),
        shop: z.object({
            id: z.number(),
            owner_id: z.number(),
            name: z.string(),
            logo: z.string().nullable(),
            banner: z.string().nullable(),
            description: z.string(),
            join_date: z.string(),
            address: z.string().nullable(),
            rating: z.string(),
            status: z.string(),
            created_at: z.string(),
            updated_at: z.string(),
            business_type_id: z.number(),
        }),
        reviews: z.any().optional(),
    })),
    pagination: z.object({
        current_page: z.number(),
        per_page: z.number(),
        total: z.number(),
        last_page: z.number(),
        from: z.number(),
        to: z.number(),
    }).optional(),
});
export type SearchProductsResType = z.TypeOf<typeof SearchProductsRes>;
