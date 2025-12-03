import z from 'zod';

// ==================== SCHEMA LOẠI HÌNH KINH DOANH ====================

// Schema loại hình kinh doanh
export const BusinessTypeSchema = z.object({
    id: z.number(),
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    is_active: z.boolean(),
    created_at: z.string(),
    updated_at: z.string(),
});
export type BusinessTypeType = z.TypeOf<typeof BusinessTypeSchema>;

// Schema phản hồi lấy danh sách loại hình kinh doanh
export const GetBusinessTypesRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.array(BusinessTypeSchema),
});
export type GetBusinessTypesResType = z.TypeOf<typeof GetBusinessTypesRes>;
