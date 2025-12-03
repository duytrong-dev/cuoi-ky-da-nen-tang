import {
    CreateConversationBody,
    CreateConversationBodyType,
    CreateConversationRes,
    CreateConversationResType,
    GetConversationsRes,
    GetConversationsResType,
    GetMessagesRes,
    GetMessagesResType,
    SendMessageBody,
    SendMessageBodyType,
    SendMessageRes,
    SendMessageResType,
} from "@/schemaValidations/chat.schema";
import http from "@/utils/http";

// ==================== CUỘC TRÒ CHUYỆN ====================

// Lấy danh sách cuộc trò chuyện
export const getConversationsApiRequest = async (): Promise<GetConversationsResType> => {
    const response = await http.get<GetConversationsResType>("/conversations");
    const validatedResponse = GetConversationsRes.parse(response);
    return validatedResponse;
};

// Tạo hoặc lấy cuộc trò chuyện
export const createConversationApiRequest = async (
    body: CreateConversationBodyType
): Promise<CreateConversationResType> => {
    const validatedBody = CreateConversationBody.parse(body);
    const response = await http.post<CreateConversationResType>("/conversations", validatedBody);
    const validatedResponse = CreateConversationRes.parse(response);
    return validatedResponse;
};

// ==================== TIN NHẮN ====================

// Lấy tin nhắn
export const getMessagesApiRequest = async (
    conversationId: number,
    page: number = 1,
    limit: number = 50
): Promise<GetMessagesResType> => {
    const response = await http.get<GetMessagesResType>(`/conversations/${conversationId}/messages`, {
        params: { page, limit },
    });
    const validatedResponse = GetMessagesRes.parse(response);
    return validatedResponse;
};

// Gửi tin nhắn
export const sendMessageApiRequest = async (
    conversationId: number,
    body: SendMessageBodyType
): Promise<SendMessageResType> => {
    const validatedBody = SendMessageBody.parse(body);
    const response = await http.post<SendMessageResType>(`/conversations/${conversationId}/messages`, validatedBody);
    const validatedResponse = SendMessageRes.parse(response);
    return validatedResponse;
};
