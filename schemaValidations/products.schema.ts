import z from "zod";

// ==================== SCHEMA BIẾN THỂ SẢN PHẨM ====================

export const ShopSchema = z.object({
    id: z.number(),
    owner_id: z.number(),
    name: z.string(),
    logo: z.string().nullable(),
    banner: z.string().nullable(),
    description: z.string(),
    join_date: z.string(),
    address: z.string().nullable(),
    rating: z.string().nullable().optional(),
    status: z.string().nullable().optional(),
    created_at: z.string().nullable().optional(),
    updated_at: z.string().nullable().optional(),
    business_type_id: z.number().nullable().optional(),
});
export type ShopType = z.TypeOf<typeof ShopSchema>;

export const BrandSchema = z.object({
    id: z.number(),
    name: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
});
export type BrandType = z.TypeOf<typeof BrandSchema>;

export const VariantSchema = z.object({
    id: z.number(),
    category_id: z.number(),
    name: z.string(),
    options: z.array(z.string()),
    is_required: z.boolean(),
    position: z.number(),
    created_at: z.string(),
    updated_at: z.string(),
});
export type VariantType = z.TypeOf<typeof VariantSchema>;

export const CategorySchema = z.object({
    id: z.number(),
    name: z.string(),
    parent_id: z.number(),
    created_at: z.string(),
    updated_at: z.string(),
    image: z.string().nullable(),
    variants: z.array(VariantSchema),
});
export type CategoryType = z.TypeOf<typeof CategorySchema>;


// ==================== SCHEMA SẢN PHẨM ====================

// Schema sản phẩm 
export const ProductSchema = z.object({
    id: z.number(),
    shop_id: z.number(),
    category_id: z.number(),
    brand_id: z.number(),
    name: z.string(),
    description: z.string().nullable().optional(),
    images: z.string().nullable().optional(),
    price: z.string().nullable().optional(),
    stock: z.number().nullable().optional(),
    status: z.string().nullable().optional(),
    rating: z.string().nullable().optional(),
    sold_count: z.number().nullable().optional(),
    created_at: z.string().nullable().optional(),
    updated_at: z.string().nullable().optional(),
    category: CategorySchema.optional(),
    brand: BrandSchema.optional(),
    shop: ShopSchema.optional(),
    reviews: z.array(z.any()).optional(),
});
export type ProductType = z.TypeOf<typeof ProductSchema>;

// ==================== LẤY SẢN PHẨM ====================

// Bộ lọc sản phẩm
export const ProductFiltersSchema = z.object({
    category_id: z.number().optional(),
    brand_id: z.number().optional(),
    shop_id: z.number().optional(),
    min_price: z.number().optional(),
    max_price: z.number().optional(),
    status: z.enum(['draft', 'active', 'out_of_stock', 'hidden', 'archived']).optional(),
    page: z.number().default(1),
    limit: z.number().default(20),
});
export type ProductFiltersType = z.TypeOf<typeof ProductFiltersSchema>;

// Schema phản hồi lấy danh sách sản phẩm
export const GetProductsRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.array(ProductSchema),
    pagination: z.object({
        page: z.number(),
        limit: z.number(),
        total: z.number(),
        totalPages: z.number(),
    }).optional(),
});
export type GetProductsResType = z.TypeOf<typeof GetProductsRes>;

// Schema phản hồi lấy chi tiết sản phẩm
export const GetProductRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: ProductSchema,
});
export type GetProductResType = z.TypeOf<typeof GetProductRes>;

// Schema phản hồi sản phẩm gợi ý
export const RecommendedProductsSchemaRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.array(ProductSchema),
});
export type RecommendedProductsSchemaResType = z.TypeOf<typeof RecommendedProductsSchemaRes>;

// ==================== TẠO/CẬP NHẬT SẢN PHẨM ====================

// Schema tạo sản phẩm
export const CreateProductBody = z.object({
    shop_id: z.number({ message: "Vui lòng chọn shop" }),
    category_id: z.number().optional(),
    brand_id: z.number().optional(),
    name: z.string().min(2, { message: "Tên sản phẩm phải có ít nhất 2 ký tự" }).max(100),
    description: z.string().optional(),
    images: z.array(z.string().url()).optional(),
    price: z.number().min(0, { message: "Giá phải lớn hơn hoặc bằng 0" }),
    stock: z.number().min(0, { message: "Số lượng phải lớn hơn hoặc bằng 0" }).default(0),
    status: z.enum(['draft', 'active', 'out_of_stock', 'hidden', 'archived']).default('draft'),
});
export type CreateProductBodyType = z.TypeOf<typeof CreateProductBody>;

// Schema phản hồi tạo sản phẩm
export const CreateProductRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: ProductSchema,
});
export type CreateProductResType = z.TypeOf<typeof CreateProductRes>;

// Schema cập nhật sản phẩm
export const UpdateProductBody = CreateProductBody.partial().omit({ shop_id: true });
export type UpdateProductBodyType = z.TypeOf<typeof UpdateProductBody>;

// Schema phản hồi cập nhật sản phẩm
export const UpdateProductRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: ProductSchema,
});
export type UpdateProductResType = z.TypeOf<typeof UpdateProductRes>;

// Schema phản hồi xóa sản phẩm
export const DeleteProductRes = z.object({
    success: z.boolean(),
    message: z.string(),
});
export type DeleteProductResType = z.TypeOf<typeof DeleteProductRes>;

// ==================== BIẾN THỂ SẢN PHẨM ====================

// Schema tạo biến thể
export const CreateVariantBody = z.object({
    sku: z.string().min(1, { message: "SKU không được để trống" }),
    attributes: z.record(z.string(), z.string()).optional(),
    price: z.number().min(0, { message: "Giá phải lớn hơn hoặc bằng 0" }),
    stock: z.number().min(0, { message: "Số lượng phải lớn hơn hoặc bằng 0" }).default(0),
    images: z.array(z.string().url()).optional(),
});
export type CreateVariantBodyType = z.TypeOf<typeof CreateVariantBody>;

// Schema phản hồi tạo biến thể
export const CreateVariantRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: VariantSchema,
});
export type CreateVariantResType = z.TypeOf<typeof CreateVariantRes>;

// Schema cập nhật biến thể
export const UpdateVariantBody = CreateVariantBody.partial();
export type UpdateVariantBodyType = z.TypeOf<typeof UpdateVariantBody>;

// Schema phản hồi cập nhật biến thể
export const UpdateVariantRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: VariantSchema,
});
export type UpdateVariantResType = z.TypeOf<typeof UpdateVariantRes>;

// Schema phản hồi xóa biến thể
export const DeleteVariantRes = z.object({
    success: z.boolean(),
    message: z.string(),
});
export type DeleteVariantResType = z.TypeOf<typeof DeleteVariantRes>;

// ==================== TƯƠNG TÁC SẢN PHẨM ====================

// Schema phản hồi thích/bỏ thích sản phẩm
export const LikeProductRes = z.object({
    success: z.boolean(),
    message: z.string(),
});
export type LikeProductResType = z.TypeOf<typeof LikeProductRes>;