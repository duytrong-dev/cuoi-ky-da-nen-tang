import z from 'zod';

// ==================== SCHEMA CHAT ====================

// Schema tin nhắn
export const MessageSchema = z.object({
    id: z.number(),
    conversation_id: z.number(),
    sender_id: z.number(),
    message: z.string().nullable(),
    image: z.string().nullable(),
    created_at: z.string(),
    // Các trường được populate
    sender_name: z.string().optional(),
    sender_avatar: z.string().nullable().optional(),
});
export type MessageType = z.TypeOf<typeof MessageSchema>;

// Schema cuộc trò chuyện
export const ConversationSchema = z.object({
    id: z.number(),
    buyer_id: z.number(),
    shop_id: z.number(),
    created_at: z.string(),
    updated_at: z.string(),
    // Các trường được populate
    shop_name: z.string().optional(),
    shop_logo: z.string().nullable().optional(),
    buyer_name: z.string().optional(),
    buyer_avatar: z.string().nullable().optional(),
    last_message: z.string().nullable().optional(),
    last_message_at: z.string().nullable().optional(),
});
export type ConversationType = z.TypeOf<typeof ConversationSchema>;

// ==================== LẤY CUỘC TRÒ CHUYỆN ====================

// Schema phản hồi lấy danh sách cuộc trò chuyện
export const GetConversationsRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.array(ConversationSchema),
});
export type GetConversationsResType = z.TypeOf<typeof GetConversationsRes>;

// ==================== TẠO CUỘC TRÒ CHUYỆN ====================

// Schema tạo cuộc trò chuyện
export const CreateConversationBody = z.object({
    shop_id: z.number({ message: "Vui lòng chọn shop" }),
});
export type CreateConversationBodyType = z.TypeOf<typeof CreateConversationBody>;

// Schema phản hồi tạo cuộc trò chuyện
export const CreateConversationRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: ConversationSchema,
});
export type CreateConversationResType = z.TypeOf<typeof CreateConversationRes>;

// ==================== TIN NHẮN ====================

// Schema phản hồi lấy tin nhắn
export const GetMessagesRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.array(MessageSchema),
    pagination: z.object({
        page: z.number(),
        limit: z.number(),
        total: z.number(),
        totalPages: z.number(),
    }).optional(),
});
export type GetMessagesResType = z.TypeOf<typeof GetMessagesRes>;

// Schema gửi tin nhắn
export const SendMessageBody = z.object({
    message: z.string().optional(),
    image: z.string().url().optional(),
}).refine((data) => data.message || data.image, {
    message: "Tin nhắn hoặc hình ảnh là bắt buộc",
});
export type SendMessageBodyType = z.TypeOf<typeof SendMessageBody>;

// Schema phản hồi gửi tin nhắn
export const SendMessageRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: MessageSchema,
});
export type SendMessageResType = z.TypeOf<typeof SendMessageRes>;
