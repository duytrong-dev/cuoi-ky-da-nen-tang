import { getMeApiRequest, loginApiRequest, logoutAllApiRequest, logoutApiRequest, registerApiRequest } from '@/apiRequests/auth';
import type { LoginBodyType, RegisterBodyType } from '@/schemaValidations/auth.schema';
import { useAuthStore } from '@/store/authStore';
import { queryKeys } from '@/utils/query-client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useAuth = () => {
    const { user, isAuthenticated, setUser, clearUser, updateUser } = useAuthStore();
    return {
        user,
        isAuthenticated,
        setUser,
        clearUser,
        updateUser
    };
}
// Hook login mutation
export const useLogin = () => {
    const { setUser } = useAuthStore();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (credentials: LoginBodyType) => loginApiRequest(credentials),
        onSuccess: async (data) => {
            // Fetch user info sau khi login thành công
            try {
                const userResponse = await getMeApiRequest();
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
        mutationFn: (data: RegisterBodyType) => registerApiRequest(data),
        onSuccess: async (data) => {
            // Fetch user info sau khi register thành công
            try {
                const userResponse = await getMeApiRequest();
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
        mutationFn: () => logoutApiRequest(),
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

// Hook cho logout all mutation
export const useLogoutAll = () => {
    const { clearUser } = useAuthStore();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: () => logoutAllApiRequest(),
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

// Hook để get me
export const useGetMe = (enabled: boolean = true) => {
    const { isAuthenticated } = useAuthStore();

    return useQuery({
        queryKey: queryKeys.auth.currentUser,
        queryFn: async () => {
            const response = await getMeApiRequest();
            return response.data;
        },
        enabled: enabled && isAuthenticated,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
};
