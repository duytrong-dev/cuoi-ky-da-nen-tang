import {
    createConversationApiRequest,
    getConversationsApiRequest,
    getMessagesApiRequest,
    sendMessageApiRequest,
} from '@/apiRequests/chat';
import { CreateConversationBodyType, SendMessageBodyType } from '@/schemaValidations/chat.schema';
import { queryKeys } from '@/utils/query-client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// ==================== HOOK QUERY CUỘC TRÒ CHUYỆN ====================

// Lấy tất cả cuộc trò chuyện
export const useConversations = () => {
    return useQuery({
        queryKey: queryKeys.chat.conversations,
        queryFn: async () => {
            const response = await getConversationsApiRequest();
            return response.data;
        },
        staleTime: 1 * 60 * 1000, // 1 minute - conversations update frequently
    });
};

// Lấy tin nhắn trong cuộc trò chuyện
export const useMessages = (conversationId: number, page: number = 1, limit: number = 50, enabled: boolean = true) => {
    return useQuery({
        queryKey: queryKeys.chat.messages(conversationId, page, limit),
        queryFn: async () => {
            const response = await getMessagesApiRequest(conversationId, page, limit);
            return response.data;
        },
        enabled,
        staleTime: 30 * 1000, // 30 seconds - messages update very frequently
    });
};

// ==================== HOOK MUTATION CUỘC TRÒ CHUYỆN ====================

// Tạo cuộc trò chuyện mới
export const useCreateConversation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (body: CreateConversationBodyType) => {
            const response = await createConversationApiRequest(body);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.chat.conversations });
        },
    });
};

// Gửi tin nhắn
export const useSendMessage = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ conversationId, body }: { conversationId: number; body: SendMessageBodyType }) => {
            const response = await sendMessageApiRequest(conversationId, body);
            return response.data;
        },
        onSuccess: (_, variables) => {
            // Invalidate tin nhắn của cuộc trò chuyện này
            queryClient.invalidateQueries({ queryKey: queryKeys.chat.messages(variables.conversationId) });
            // Invalidate danh sách cuộc trò chuyện để cập nhật tin nhắn cuối cùng
            queryClient.invalidateQueries({ queryKey: queryKeys.chat.conversations });
        },
    });
};
