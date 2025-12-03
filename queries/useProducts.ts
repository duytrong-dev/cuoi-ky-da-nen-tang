import {
    createProductApiRequest,
    createVariantApiRequest,
    deleteProductApiRequest,
    deleteVariantApiRequest,
    getProductApiRequest,
    getProductsApiRequest,
    getProductsByCategoryApiRequest,
    getProductsByShopApiRequest,
    getRecommendedProductsApiRequest,
    likeProductApiRequest,
    unlikeProductApiRequest,
    updateProductApiRequest,
    updateVariantApiRequest,
} from '@/apiRequests/products';
import {
    CreateProductBodyType,
    CreateVariantBodyType,
    ProductFiltersType,
    UpdateProductBodyType,
    UpdateVariantBodyType,
} from '@/schemaValidations/products.schema';
import { queryKeys } from '@/utils/query-client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// ==================== HOOK QUERY (LẤY DỮ LIỆU) ====================

// Hook lấy tất cả sản phẩm với bộ lọc
export const useProducts = (filters?: ProductFiltersType) => {
    return useQuery({
        queryKey: queryKeys.product.all(filters),
        queryFn: async () => {
            const response = await getProductsApiRequest(filters);
            console.log(response.data);
            return response.data;
        },
        // staleTime: 5 * 60 * 1000,
    });
};

// Hook lấy chi tiết sản phẩm theo ID
export const useProduct = (id: number, enabled: boolean = true) => {
    return useQuery({
        queryKey: queryKeys.product.detail(id),
        queryFn: async () => {
            const response = await getProductApiRequest(id);
            return response.data;
        },
        enabled,
        staleTime: 5 * 60 * 1000,
    });
};

// Hook lấy sản phẩm theo cửa hàng
export const useProductsByShop = (shopId: number, filters?: ProductFiltersType, enabled: boolean = true) => {
    return useQuery({
        queryKey: queryKeys.product.byShop(shopId, filters),
        queryFn: async () => {
            const response = await getProductsByShopApiRequest(shopId, filters);
            return response.data;
        },
        enabled,
        staleTime: 5 * 60 * 1000,
    });
};

// Hook lấy sản phẩm theo danh mục
export const useProductsByCategory = (categoryId: number, filters?: ProductFiltersType, enabled: boolean = true) => {
    return useQuery({
        queryKey: queryKeys.product.byCategory(categoryId, filters),
        queryFn: async () => {
            const response = await getProductsByCategoryApiRequest(categoryId, filters);
            return response.data;
        },
        enabled,
        staleTime: 5 * 60 * 1000,
    });
};

// Hook lấy sản phẩm gợi ý
export const useRecommendedProducts = () => {
    return useQuery({
        queryKey: queryKeys.product.recommended,
        queryFn: async () => {
            const response = await getRecommendedProductsApiRequest();
            return response.data;
        },
        staleTime: 5 * 60 * 1000,
    });
};

// ==================== HOOK MUTATION (THÊM/SỬA/XÓA) ====================

// Hook tạo sản phẩm
export const useCreateProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (body: CreateProductBodyType) => {
            const response = await createProductApiRequest(body);
            return response.data;
        },
        onSuccess: (data) => {
            // Invalidate danh sách sản phẩm
            queryClient.invalidateQueries({ queryKey: queryKeys.product.all() });
            // Invalidate sản phẩm của cửa hàng nếu có shop_id
            if (data.shop_id) {
                queryClient.invalidateQueries({ queryKey: queryKeys.product.byShop(data.shop_id) });
                // Invalidate sản phẩm bán chạy của cửa hàng
                queryClient.invalidateQueries({ queryKey: queryKeys.shop.bestSellers(data.shop_id) });
            }
            // Invalidate sản phẩm của danh mục nếu có category_id
            if (data.category_id) {
                queryClient.invalidateQueries({ queryKey: queryKeys.product.byCategory(data.category_id) });
            }
        },
    });
};

// Hook cập nhật sản phẩm
export const useUpdateProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ id, body }: { id: number; body: UpdateProductBodyType }) => {
            const response = await updateProductApiRequest(id, body);
            return response.data;
        },
        onSuccess: (data) => {
            // Invalidate chi tiết sản phẩm
            queryClient.invalidateQueries({ queryKey: queryKeys.product.detail(data.id) });
            // Invalidate danh sách sản phẩm
            queryClient.invalidateQueries({ queryKey: queryKeys.product.all() });
            // Invalidate sản phẩm của cửa hàng nếu có shop_id
            if (data.shop_id) {
                queryClient.invalidateQueries({ queryKey: queryKeys.product.byShop(data.shop_id) });
                // Invalidate sản phẩm bán chạy của cửa hàng (trường hợp giá/kho thay đổi)
                queryClient.invalidateQueries({ queryKey: queryKeys.shop.bestSellers(data.shop_id) });
            }
            // Invalidate sản phẩm của danh mục nếu có category_id
            if (data.category_id) {
                queryClient.invalidateQueries({ queryKey: queryKeys.product.byCategory(data.category_id) });
            }
        },
    });
};

// Hook xóa sản phẩm
export const useDeleteProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id: number) => {
            const response = await deleteProductApiRequest(id);
            return response;
        },
        onSuccess: () => {
            // Invalidate tất cả query sản phẩm
            queryClient.invalidateQueries({ queryKey: ['product'] });
            // Invalidate tất cả query cửa hàng (sản phẩm bán chạy có thể thay đổi)
            queryClient.invalidateQueries({ queryKey: ['shop'] });
        },
    });
};

// ==================== HOOK MUTATION BIẾN THỂ ====================

// Hook tạo biến thể
export const useCreateVariant = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ productId, body }: { productId: number; body: CreateVariantBodyType }) => {
            const response = await createVariantApiRequest(productId, body);
            return response.data;
        },
        onSuccess: (_, variables) => {
            // Invalidate chi tiết sản phẩm để lấy lại với biến thể mới
            queryClient.invalidateQueries({ queryKey: queryKeys.product.detail(variables.productId) });
        },
    });
};

// Hook cập nhật biến thể
export const useUpdateVariant = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({
            productId,
            variantId,
            body,
        }: {
            productId: number;
            variantId: number;
            body: UpdateVariantBodyType;
        }) => {
            const response = await updateVariantApiRequest(productId, variantId, body);
            return response.data;
        },
        onSuccess: (_, variables) => {
            // Invalidate chi tiết sản phẩm để lấy lại với biến thể đã cập nhật
            queryClient.invalidateQueries({ queryKey: queryKeys.product.detail(variables.productId) });
        },
    });
};

// Hook xóa biến thể
export const useDeleteVariant = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ productId, variantId }: { productId: number; variantId: number }) => {
            const response = await deleteVariantApiRequest(productId, variantId);
            return response;
        },
        onSuccess: (_, variables) => {
            // Invalidate chi tiết sản phẩm để lấy lại mà không có biến thể đã xóa
            queryClient.invalidateQueries({ queryKey: queryKeys.product.detail(variables.productId) });
        },
    });
};

// ==================== HOOK MUTATION TƯƠNG TÁC ====================

// Hook thích/bỏ thích sản phẩm (toggle)
export const useLikeProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ productId, isLiked }: { productId: number; isLiked: boolean }) => {
            if (isLiked) {
                return await unlikeProductApiRequest(productId);
            } else {
                return await likeProductApiRequest(productId);
            }
        },
        onSuccess: (_, variables) => {
            // Invalidate chi tiết sản phẩm
            queryClient.invalidateQueries({ queryKey: queryKeys.product.detail(variables.productId) });
            // Invalidate danh sách sản phẩm
            queryClient.invalidateQueries({ queryKey: queryKeys.product.all() });
        },
    });
};