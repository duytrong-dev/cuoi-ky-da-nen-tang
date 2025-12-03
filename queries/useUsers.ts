import {
    changePasswordApiRequest,
    createAddressApiRequest,
    deleteAddressApiRequest,
    getAddressesApiRequest,
    updateAddressApiRequest,
    updateProfileApiRequest,
} from '@/apiRequests/users';
import {
    ChangePasswordBodyType,
    CreateAddressBodyType,
    UpdateAddressBodyType,
    UpdateProfileBodyType,
} from '@/schemaValidations/users.schema';
import { queryKeys } from '@/utils/query-client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// ==================== HOOK QUERY ĐỊA CHỈ ====================

// Lấy danh sách địa chỉ người dùng
export const useAddresses = (enabled: boolean = true) => {
    return useQuery({
        queryKey: queryKeys.user.addresses,
        queryFn: async () => {
            const response = await getAddressesApiRequest();
            return response.data;
        },
        enabled,
        staleTime: 5 * 60 * 1000,
    });
};

// ==================== HOOK MUTATION ĐỊA CHỈ ====================

// Tạo địa chỉ
export const useCreateAddress = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (body: CreateAddressBodyType) => {
            const response = await createAddressApiRequest(body);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.user.addresses });
        },
    });
};

// Cập nhật địa chỉ
export const useUpdateAddress = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ id, body }: { id: number; body: UpdateAddressBodyType }) => {
            const response = await updateAddressApiRequest(id, body);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.user.addresses });
        },
    });
};

// Xóa địa chỉ
export const useDeleteAddress = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id: number) => {
            const response = await deleteAddressApiRequest(id);
            return response;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.user.addresses });
        },
    });
};

// ==================== HOOK MUTATION HỒ SƠ ====================

// Cập nhật hồ sơ
export const useUpdateProfile = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (body: UpdateProfileBodyType) => {
            const response = await updateProfileApiRequest(body);
            return response.data;
        },
        onSuccess: () => {
            // Invalidate dữ liệu người dùng hiện tại
            queryClient.invalidateQueries({ queryKey: queryKeys.auth.currentUser });
        },
    });
};

// Đổi mật khẩu
export const useChangePassword = () => {
    return useMutation({
        mutationFn: async (body: ChangePasswordBodyType) => {
            const response = await changePasswordApiRequest(body);
            return response;
        },
    });
};
