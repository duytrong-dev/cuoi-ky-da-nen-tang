import {
    CreateProductBody,
    CreateProductBodyType,
    CreateProductRes,
    CreateProductResType,
    CreateVariantBody,
    CreateVariantBodyType,
    CreateVariantRes,
    CreateVariantResType,
    DeleteProductRes,
    DeleteProductResType,
    DeleteVariantRes,
    DeleteVariantResType,
    GetProductRes,
    GetProductResType,
    GetProductsRes,
    GetProductsResType,
    LikeProductRes,
    LikeProductResType,
    ProductFiltersType,
    RecommendedProductsSchemaRes,
    RecommendedProductsSchemaResType,
    UpdateProductBody,
    UpdateProductBodyType,
    UpdateProductRes,
    UpdateProductResType,
    UpdateVariantBody,
    UpdateVariantBodyType,
    UpdateVariantRes,
    UpdateVariantResType,
} from "@/schemaValidations/products.schema";
import http from "@/utils/http";

// ==================== CRUD SẢN PHẨM ====================

// Lấy tất cả sản phẩm với bộ lọc
export const getProductsApiRequest = async (filters?: ProductFiltersType): Promise<GetProductsResType> => {
    const response = await http.get<GetProductsResType>("/catalog/products", {
        params: filters,
    });
    const validatedResponse = GetProductsRes.parse(response);
    return validatedResponse;
};

// Lấy sản phẩm theo ID
export const getProductApiRequest = async (id: number): Promise<GetProductResType> => {
    const response = await http.get<GetProductResType>(`/products/${id}`);
    const validatedResponse = GetProductRes.parse(response);
    return validatedResponse;
};

// Lấy sản phẩm theo shop
export const getProductsByShopApiRequest = async (
    shopId: number,
    filters?: ProductFiltersType
): Promise<GetProductsResType> => {
    const response = await http.get<GetProductsResType>(`/shops/${shopId}/products`, {
        params: filters,
    });
    const validatedResponse = GetProductsRes.parse(response);
    return validatedResponse;
};

// Lấy sản phẩm theo danh mục
export const getProductsByCategoryApiRequest = async (
    categoryId: number,
    filters?: ProductFiltersType
): Promise<GetProductsResType> => {
    const response = await http.get<GetProductsResType>(`/categories/${categoryId}/products`, {
        params: filters,
    });
    const validatedResponse = GetProductsRes.parse(response);
    return validatedResponse;
};

// Lấy sản phẩm gợi ý
export const getRecommendedProductsApiRequest = async (): Promise<RecommendedProductsSchemaResType> => {
    const response = await http.get<RecommendedProductsSchemaResType>("/products/recommended");
    const validatedResponse = RecommendedProductsSchemaRes.parse(response);
    return validatedResponse;
};

// Tạo sản phẩm
export const createProductApiRequest = async (body: CreateProductBodyType): Promise<CreateProductResType> => {
    const validatedBody = CreateProductBody.parse(body);
    const response = await http.post<CreateProductResType>("/products", validatedBody);
    const validatedResponse = CreateProductRes.parse(response);
    return validatedResponse;
};

// Cập nhật sản phẩm
export const updateProductApiRequest = async (
    id: number,
    body: UpdateProductBodyType
): Promise<UpdateProductResType> => {
    const validatedBody = UpdateProductBody.parse(body);
    const response = await http.put<UpdateProductResType>(`/products/${id}`, validatedBody);
    const validatedResponse = UpdateProductRes.parse(response);
    return validatedResponse;
};

// Xóa sản phẩm
export const deleteProductApiRequest = async (id: number): Promise<DeleteProductResType> => {
    const response = await http.delete<DeleteProductResType>(`/products/${id}`);
    const validatedResponse = DeleteProductRes.parse(response);
    return validatedResponse;
};

// ==================== BIẾN THỂ SẢN PHẨM ====================

// Tạo biến thể
export const createVariantApiRequest = async (
    productId: number,
    body: CreateVariantBodyType
): Promise<CreateVariantResType> => {
    const validatedBody = CreateVariantBody.parse(body);
    const response = await http.post<CreateVariantResType>(`/products/${productId}/variants`, validatedBody);
    const validatedResponse = CreateVariantRes.parse(response);
    return validatedResponse;
};

// Cập nhật biến thể
export const updateVariantApiRequest = async (
    productId: number,
    variantId: number,
    body: UpdateVariantBodyType
): Promise<UpdateVariantResType> => {
    const validatedBody = UpdateVariantBody.parse(body);
    const response = await http.put<UpdateVariantResType>(`/products/${productId}/variants/${variantId}`, validatedBody);
    const validatedResponse = UpdateVariantRes.parse(response);
    return validatedResponse;
};

// Xóa biến thể
export const deleteVariantApiRequest = async (
    productId: number,
    variantId: number
): Promise<DeleteVariantResType> => {
    const response = await http.delete<DeleteVariantResType>(`/products/${productId}/variants/${variantId}`);
    const validatedResponse = DeleteVariantRes.parse(response);
    return validatedResponse;
};

// ==================== TƯƠNG TÁC SẢN PHẨM ====================

// Thích sản phẩm (thêm vào danh sách yêu thích)
export const likeProductApiRequest = async (productId: number): Promise<LikeProductResType> => {
    const response = await http.post<LikeProductResType>(`/products/${productId}/like`);
    const validatedResponse = LikeProductRes.parse(response);
    return validatedResponse;
};

// Bỏ thích sản phẩm (xóa khỏi danh sách yêu thích)
export const unlikeProductApiRequest = async (productId: number): Promise<LikeProductResType> => {
    const response = await http.delete<LikeProductResType>(`/products/${productId}/like`);
    const validatedResponse = LikeProductRes.parse(response);
    return validatedResponse;
};