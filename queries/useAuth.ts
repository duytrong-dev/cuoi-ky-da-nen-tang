import { getMeRequest, loginRequest, logoutRequest, registerRequest } from '@/apiRequests/auth';
import type { LoginBodyType, RegisterBodyType } from '@/schemaValidations/auth.schema';
import { useAuthStore } from '@/store/authStore';
import { queryKeys } from '@/utils/query-client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

/**
 * Custom hooks for authentication using TanStack Query
 */

// Hook để access Zustand auth store
export const useAuth = () => {
    const { user, isAuthenticated, setUser, clearUser, updateUser } = useAuthStore();

    return {
        user,
        isAuthenticated,
        setUser,
        clearUser,
        updateUser,
    };
};

// Hook cho login mutation
export const useLogin = () => {
    const { setUser } = useAuthStore();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (credentials: LoginBodyType) => loginRequest(credentials),
        onSuccess: async (data) => {
            // Fetch user info sau khi login thành công
            try {
                const userResponse = await getMeRequest();
                setUser(userResponse.data);

                // Invalidate current user query để refetch
                queryClient.invalidateQueries({ queryKey: queryKeys.auth.currentUser });
            } catch (error) {
                console.error('Error fetching user after login:', error);
            }
        },
        onError: (error) => {
            console.error('Login error:', error);
        },
    });
};

// Hook cho register mutation
export const useRegister = () => {
    const { setUser } = useAuthStore();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: RegisterBodyType) => registerRequest(data),
        onSuccess: async (data) => {
            // Fetch user info sau khi register thành công
            try {
                const userResponse = await getMeRequest();
                setUser(userResponse.data);

                // Invalidate current user query để refetch
                queryClient.invalidateQueries({ queryKey: queryKeys.auth.currentUser });
            } catch (error) {
                console.error('Error fetching user after register:', error);
            }
        },
        onError: (error) => {
            console.error('Register error:', error);
        },
    });
};

// Hook cho logout mutation
export const useLogout = () => {
    const { clearUser } = useAuthStore();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: () => logoutRequest(),
        onSuccess: () => {
            // Clear user khỏi store
            clearUser();

            // Clear tất cả queries
            queryClient.clear();
        },
        onError: (error) => {
            console.error('Logout error:', error);
            // Vẫn clear user dù có lỗi
            clearUser();
            queryClient.clear();
        },
    });
};

// Hook để fetch current user
export const useCurrentUser = (enabled: boolean = true) => {
    const { setUser, clearUser, isAuthenticated } = useAuthStore();

    return useQuery({
        queryKey: queryKeys.auth.currentUser,
        queryFn: async () => {
            const response = await getMeRequest();
            return response.data;
        },
        enabled: enabled && isAuthenticated,
        staleTime: 5 * 60 * 1000, // 5 minutes
        onSuccess: (data) => {
            // Sync user data với Zustand store
            setUser(data);
        },
        onError: (error) => {
            console.error('Error fetching current user:', error);
            // Clear user nếu có lỗi (token hết hạn, etc.)
            clearUser();
        },
    });
};
