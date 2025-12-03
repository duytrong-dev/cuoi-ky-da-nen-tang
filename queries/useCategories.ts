import {
    createBrandApiRequest,
    createCategoryApiRequest,
    deleteBrandApiRequest,
    deleteCategoryApiRequest,
    getBrandApiRequest,
    getBrandsApiRequest,
    getCategoriesApiRequest,
    getCategoryApiRequest,
    updateBrandApiRequest,
    updateCategoryApiRequest,
} from '@/apiRequests/categories';
import {
    CreateBrandBodyType,
    CreateCategoryBodyType,
    UpdateBrandBodyType,
    UpdateCategoryBodyType,
} from '@/schemaValidations/categories.schema';
import { queryKeys } from '@/utils/query-client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// ==================== HOOK QUERY DANH MỤC ====================

// Lấy tất cả danh mục
export const useCategories = () => {
    return useQuery({
        queryKey: queryKeys.category.all,
        queryFn: async () => {
            const response = await getCategoriesApiRequest();
            return response.data;
        },
        staleTime: 10 * 60 * 1000, // 10 minutes - categories don't change often
    });
};

// Lấy chi tiết danh mục
export const useCategory = (id: number, enabled: boolean = true) => {
    return useQuery({
        queryKey: queryKeys.category.detail(id),
        queryFn: async () => {
            const response = await getCategoryApiRequest(id);
            return response.data;
        },
        enabled,
        staleTime: 10 * 60 * 1000,
    });
};

// ==================== HOOK MUTATION DANH MỤC ====================

// Tạo danh mục
export const useCreateCategory = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (body: CreateCategoryBodyType) => {
            const response = await createCategoryApiRequest(body);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.category.all });
        },
    });
};

// Cập nhật danh mục
export const useUpdateCategory = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ id, body }: { id: number; body: UpdateCategoryBodyType }) => {
            const response = await updateCategoryApiRequest(id, body);
            return response.data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: queryKeys.category.all });
            queryClient.invalidateQueries({ queryKey: queryKeys.category.detail(data.id) });
        },
    });
};

// Xóa danh mục
export const useDeleteCategory = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id: number) => {
            const response = await deleteCategoryApiRequest(id);
            return response;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.category.all });
        },
    });
};

// ==================== HOOK QUERY THƯƠNG HIỆU ====================

// Lấy tất cả thương hiệu
export const useBrands = () => {
    return useQuery({
        queryKey: queryKeys.brand.all,
        queryFn: async () => {
            const response = await getBrandsApiRequest();
            return response.data;
        },
        staleTime: 10 * 60 * 1000,
    });
};

// Lấy chi tiết thương hiệu
export const useBrand = (id: number, enabled: boolean = true) => {
    return useQuery({
        queryKey: queryKeys.brand.detail(id),
        queryFn: async () => {
            const response = await getBrandApiRequest(id);
            return response.data;
        },
        enabled,
        staleTime: 10 * 60 * 1000,
    });
};

// ==================== HOOK MUTATION THƯƠNG HIỆU ====================

// Tạo thương hiệu
export const useCreateBrand = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (body: CreateBrandBodyType) => {
            const response = await createBrandApiRequest(body);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.brand.all });
        },
    });
};

// Cập nhật thương hiệu
export const useUpdateBrand = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ id, body }: { id: number; body: UpdateBrandBodyType }) => {
            const response = await updateBrandApiRequest(id, body);
            return response.data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: queryKeys.brand.all });
            queryClient.invalidateQueries({ queryKey: queryKeys.brand.detail(data.id) });
        },
    });
};

// Xóa thương hiệu
export const useDeleteBrand = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id: number) => {
            const response = await deleteBrandApiRequest(id);
            return response;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.brand.all });
        },
    });
};
