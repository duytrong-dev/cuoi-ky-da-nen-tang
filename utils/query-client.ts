import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // Thời gian cache data (5 phút)
            staleTime: 5 * 60 * 1000,

            // Thời gian giữ cache khi không sử dụng (10 phút)
            gcTime: 10 * 60 * 1000,

            // Retry failed requests
            retry: 1,

            // Retry delay
            retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),

            // Refetch on window focus
            refetchOnWindowFocus: false,

            // Refetch on reconnect
            refetchOnReconnect: true,
        },
        mutations: {
            // Retry failed mutations
            retry: 0,

            // Error handling
            onError: (error) => {
                console.error('Mutation error:', error);
            },
        },
    },
});

// Query keys constants
export const queryKeys = {
    auth: {
        currentUser: ['auth', 'currentUser'] as const,
    },
    banner: {
        all: ['banner'] as const,
        byShop: (shopId: number) => ['banner', 'shop', shopId] as const,
    },
    product: {
        all: (filters?: any) => ['product', 'list', filters] as const,
        detail: (id: number) => ['product', 'detail', id] as const,
        byShop: (shopId: number, filters?: any) => ['product', 'shop', shopId, filters] as const,
        byCategory: (categoryId: number, filters?: any) => ['product', 'category', categoryId, filters] as const,
        recommended: ['product', 'recommended'] as const,
    },
    category: {
        all: ['category'] as const,
        detail: (id: number) => ['category', 'detail', id] as const,
    },
    brand: {
        all: ['brand'] as const,
        detail: (id: number) => ['brand', 'detail', id] as const,
    },
    cart: {
        current: ['cart'] as const,
    },
    chat: {
        conversations: ['chat', 'conversations'] as const,
        messages: (conversationId: number, page?: number, limit?: number) =>
            ['chat', 'messages', conversationId, page, limit] as const,
    },
    order: {
        list: (page?: number, limit?: number) => ['order', 'list', page, limit] as const,
        detail: (id: number) => ['order', 'detail', id] as const,
    },
    review: {
        byProduct: (productId: number, page?: number, limit?: number) =>
            ['review', 'product', productId, page, limit] as const,
        stats: (productId: number) => ['review', 'stats', productId] as const,
    },
    search: {
        products: (filters: any) => ['search', 'products', filters] as const,
    },
    shop: {
        detail: (id: number) => ['shop', 'detail', id] as const,
        myShops: ['shop', 'my'] as const,
        followers: (shopId: number, page?: number, limit?: number) =>
            ['shop', 'followers', shopId, page, limit] as const,
        ratings: (shopId: number, page?: number, limit?: number) =>
            ['shop', 'ratings', shopId, page, limit] as const,
        analytics: (shopId: number) => ['shop', 'analytics', shopId] as const,
        bestSellers: (shopId: number, limit?: number) => ['shop', 'bestSellers', shopId, limit] as const,
    },
    user: {
        addresses: ['user', 'addresses'] as const,
    },
    businessType: {
        all: ['businessType'] as const,
    },
} as const;

