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
// Hook mutation đăng nhập
export const useLogin = () => {
    const { setUser } = useAuthStore();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (credentials: LoginBodyType) => loginApiRequest(credentials),
        onSuccess: async (data) => {
            // Lấy thông tin người dùng sau khi đăng nhập thành công
            try {
                const userResponse = await getMeApiRequest();
                setUser(userResponse.data);

                // Invalidate query người dùng hiện tại để refetch
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

// Hook cho mutation đăng ký
export const useRegister = () => {
    const { setUser } = useAuthStore();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: RegisterBodyType) => registerApiRequest(data),
        onSuccess: async (data) => {
            // Lấy thông tin người dùng sau khi đăng ký thành công
            try {
                const userResponse = await getMeApiRequest();
                setUser(userResponse.data);

                // Invalidate query người dùng hiện tại để refetch
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

// Hook cho mutation đăng xuất
export const useLogout = () => {
    const { clearUser } = useAuthStore();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: () => logoutApiRequest(),
        onSuccess: () => {
            // Xóa người dùng khỏi store
            clearUser();

            // Xóa tất cả queries
            queryClient.clear();
        },
        onError: (error) => {
            console.error('Logout error:', error);
            // Vẫn xóa người dùng dù có lỗi
            clearUser();
            queryClient.clear();
        },
    });
};

// Hook cho mutation đăng xuất tất cả
export const useLogoutAll = () => {
    const { clearUser } = useAuthStore();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: () => logoutAllApiRequest(),
        onSuccess: () => {
            // Xóa người dùng khỏi store
            clearUser();

            // Xóa tất cả queries
            queryClient.clear();
        },
        onError: (error) => {
            console.error('Logout error:', error);
            // Vẫn xóa người dùng dù có lỗi
            clearUser();
            queryClient.clear();
        },
    });
};

// Hook để lấy thông tin người dùng hiện tại
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
