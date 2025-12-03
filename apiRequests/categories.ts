import {
    CreateBrandBody,
    CreateBrandBodyType,
    CreateBrandRes,
    CreateBrandResType,
    CreateCategoryBody,
    CreateCategoryBodyType,
    CreateCategoryRes,
    CreateCategoryResType,
    DeleteBrandRes,
    DeleteBrandResType,
    DeleteCategoryRes,
    DeleteCategoryResType,
    GetBrandRes,
    GetBrandResType,
    GetBrandsRes,
    GetBrandsResType,
    GetCategoriesRes,
    GetCategoriesResType,
    GetCategoryRes,
    GetCategoryResType,
    UpdateBrandBody,
    UpdateBrandBodyType,
    UpdateBrandRes,
    UpdateBrandResType,
    UpdateCategoryBody,
    UpdateCategoryBodyType,
    UpdateCategoryRes,
    UpdateCategoryResType,
} from "@/schemaValidations/categories.schema";
import http from "@/utils/http";

// ==================== DANH MỤC ====================

// Lấy tất cả danh mục
export const getCategoriesApiRequest = async (): Promise<GetCategoriesResType> => {
    const response = await http.get<GetCategoriesResType>("/categories");
    const validatedResponse = GetCategoriesRes.parse(response);
    return validatedResponse;
};

// Lấy danh mục theo ID
export const getCategoryApiRequest = async (id: number): Promise<GetCategoryResType> => {
    const response = await http.get<GetCategoryResType>(`/categories/${id}`);
    const validatedResponse = GetCategoryRes.parse(response);
    return validatedResponse;
};

// Tạo danh mục
export const createCategoryApiRequest = async (body: CreateCategoryBodyType): Promise<CreateCategoryResType> => {
    const validatedBody = CreateCategoryBody.parse(body);
    const response = await http.post<CreateCategoryResType>("/categories", validatedBody);
    const validatedResponse = CreateCategoryRes.parse(response);
    return validatedResponse;
};

// Cập nhật danh mục
export const updateCategoryApiRequest = async (
    id: number,
    body: UpdateCategoryBodyType
): Promise<UpdateCategoryResType> => {
    const validatedBody = UpdateCategoryBody.parse(body);
    const response = await http.put<UpdateCategoryResType>(`/categories/${id}`, validatedBody);
    const validatedResponse = UpdateCategoryRes.parse(response);
    return validatedResponse;
};

// Xóa danh mục
export const deleteCategoryApiRequest = async (id: number): Promise<DeleteCategoryResType> => {
    const response = await http.delete<DeleteCategoryResType>(`/categories/${id}`);
    const validatedResponse = DeleteCategoryRes.parse(response);
    return validatedResponse;
};

// ==================== THƯƠNG HIỆU ====================

// Lấy tất cả thương hiệu
export const getBrandsApiRequest = async (): Promise<GetBrandsResType> => {
    const response = await http.get<GetBrandsResType>("/brands");
    const validatedResponse = GetBrandsRes.parse(response);
    return validatedResponse;
};

// Lấy thương hiệu theo ID
export const getBrandApiRequest = async (id: number): Promise<GetBrandResType> => {
    const response = await http.get<GetBrandResType>(`/brands/${id}`);
    const validatedResponse = GetBrandRes.parse(response);
    return validatedResponse;
};

// Tạo thương hiệu
export const createBrandApiRequest = async (body: CreateBrandBodyType): Promise<CreateBrandResType> => {
    const validatedBody = CreateBrandBody.parse(body);
    const response = await http.post<CreateBrandResType>("/brands", validatedBody);
    const validatedResponse = CreateBrandRes.parse(response);
    return validatedResponse;
};

// Cập nhật thương hiệu
export const updateBrandApiRequest = async (
    id: number,
    body: UpdateBrandBodyType
): Promise<UpdateBrandResType> => {
    const validatedBody = UpdateBrandBody.parse(body);
    const response = await http.put<UpdateBrandResType>(`/brands/${id}`, validatedBody);
    const validatedResponse = UpdateBrandRes.parse(response);
    return validatedResponse;
};

// Xóa thương hiệu
export const deleteBrandApiRequest = async (id: number): Promise<DeleteBrandResType> => {
    const response = await http.delete<DeleteBrandResType>(`/brands/${id}`);
    const validatedResponse = DeleteBrandRes.parse(response);
    return validatedResponse;
};
