import z from "zod";

// banner schema 
export const BannerSchema = z.object({
    id: z.number(),
    title: z.string().nullable(),
    subtitle: z.string().nullable(),
    image_url: z.string(),
    is_active: z.boolean().nullable(),
    created_at: z.string().nullable(),
    updated_at: z.string().nullable(),
});
export type BannerSchemaType = z.TypeOf<typeof BannerSchema>;

export const BannersSchemaRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.array(BannerSchema),
});
export type BannersSchemaResType = z.TypeOf<typeof BannersSchemaRes>;