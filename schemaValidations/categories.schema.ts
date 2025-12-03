import z from 'zod';

// ==================== SCHEMA DANH MỤC ====================

// Định nghĩa type trước cho schema đệ quy
export type CategoryType = {
    id: number;
    name: string;
    parent_id: number | null;
    image: string | null;
    created_at: string;
    updated_at: string;
    subcategories_count?: number;
    products_count?: number;
    subcategories?: CategoryType[];
};

// Schema danh mục với type annotation rõ ràng
export const CategorySchema: z.ZodType<CategoryType> = z.object({
    id: z.number(),
    name: z.string(),
    parent_id: z.number().nullable(),
    image: z.string().nullable(),
    created_at: z.string(),
    updated_at: z.string(),
    // Các trường được tính toán
    subcategories_count: z.number().optional(),
    products_count: z.number().optional(),
    subcategories: z.array(z.lazy(() => CategorySchema)).optional(),
});

// Schema phản hồi lấy danh sách danh mục
export const GetCategoriesRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.array(CategorySchema),
});
export type GetCategoriesResType = z.TypeOf<typeof GetCategoriesRes>;

// Schema phản hồi lấy chi tiết danh mục
export const GetCategoryRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: CategorySchema,
});
export type GetCategoryResType = z.TypeOf<typeof GetCategoryRes>;

// Schema tạo danh mục
export const CreateCategoryBody = z.object({
    name: z.string().min(2, { message: "Tên danh mục phải có ít nhất 2 ký tự" }).max(255),
    parent_id: z.number().nullable().optional(),
    image: z.string().url().optional(),
});
export type CreateCategoryBodyType = z.TypeOf<typeof CreateCategoryBody>;

// Schema phản hồi tạo danh mục
export const CreateCategoryRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: CategorySchema,
});
export type CreateCategoryResType = z.TypeOf<typeof CreateCategoryRes>;

// Schema cập nhật danh mục
export const UpdateCategoryBody = CreateCategoryBody.partial();
export type UpdateCategoryBodyType = z.TypeOf<typeof UpdateCategoryBody>;

// Schema phản hồi cập nhật danh mục
export const UpdateCategoryRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: CategorySchema,
});
export type UpdateCategoryResType = z.TypeOf<typeof UpdateCategoryRes>;

// Schema phản hồi xóa danh mục
export const DeleteCategoryRes = z.object({
    success: z.boolean(),
    message: z.string(),
});
export type DeleteCategoryResType = z.TypeOf<typeof DeleteCategoryRes>;

// ==================== SCHEMA THƯƠNG HIỆU ====================

// Schema thương hiệu
export const BrandSchema = z.object({
    id: z.number(),
    name: z.string(),
    image: z.string().nullable(),
    description: z.string().nullable(),
    created_at: z.string(),
    updated_at: z.string(),
    // Các trường được tính toán
    products_count: z.number().optional(),
});
export type BrandType = z.TypeOf<typeof BrandSchema>;

// Schema phản hồi lấy danh sách thương hiệu
export const GetBrandsRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.array(BrandSchema),
});
export type GetBrandsResType = z.TypeOf<typeof GetBrandsRes>;

// Schema phản hồi lấy chi tiết thương hiệu
export const GetBrandRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: BrandSchema,
});
export type GetBrandResType = z.TypeOf<typeof GetBrandRes>;

// Schema tạo thương hiệu
export const CreateBrandBody = z.object({
    name: z.string().min(2, { message: "Tên thương hiệu phải có ít nhất 2 ký tự" }).max(255),
    image: z.string().url().optional(),
    description: z.string().optional(),
});
export type CreateBrandBodyType = z.TypeOf<typeof CreateBrandBody>;

// Schema phản hồi tạo thương hiệu
export const CreateBrandRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: BrandSchema,
});
export type CreateBrandResType = z.TypeOf<typeof CreateBrandRes>;

// Schema cập nhật thương hiệu
export const UpdateBrandBody = CreateBrandBody.partial();
export type UpdateBrandBodyType = z.TypeOf<typeof UpdateBrandBody>;

// Schema phản hồi cập nhật thương hiệu
export const UpdateBrandRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: BrandSchema,
});
export type UpdateBrandResType = z.TypeOf<typeof UpdateBrandRes>;

// Schema phản hồi xóa thương hiệu
export const DeleteBrandRes = z.object({
    success: z.boolean(),
    message: z.string(),
});
export type DeleteBrandResType = z.TypeOf<typeof DeleteBrandRes>;
