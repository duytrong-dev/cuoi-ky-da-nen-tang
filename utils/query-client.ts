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
    // Thêm các query keys khác ở đây
} as const;
