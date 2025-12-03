import {
    CreateProductReviewBody,
    CreateProductReviewBodyType,
    CreateProductReviewRes,
    CreateProductReviewResType,
    GetProductReviewsRes,
    GetProductReviewsResType,
    GetReviewStatsRes,
    GetReviewStatsResType,
} from "@/schemaValidations/reviews.schema";
import http from "@/utils/http";

// ==================== ĐÁNH GIÁ SẢN PHẨM ====================

// Tạo đánh giá sản phẩm
export const createProductReviewApiRequest = async (
    productId: number,
    body: CreateProductReviewBodyType
): Promise<CreateProductReviewResType> => {
    const validatedBody = CreateProductReviewBody.parse(body);
    const response = await http.post<CreateProductReviewResType>(`/products/${productId}/reviews`, validatedBody);
    const validatedResponse = CreateProductReviewRes.parse(response);
    return validatedResponse;
};

// Lấy danh sách đánh giá sản phẩm
export const getProductReviewsApiRequest = async (
    productId: number,
    rating?: number,
    page: number = 1,
    limit: number = 20
): Promise<GetProductReviewsResType> => {
    const params: any = { page, limit };
    if (rating) params.rating = rating;

    const response = await http.get<GetProductReviewsResType>(`/products/${productId}/reviews`, { params });
    const validatedResponse = GetProductReviewsRes.parse(response);
    return validatedResponse;
};

// Lấy thống kê đánh giá
export const getReviewStatsApiRequest = async (productId: number): Promise<GetReviewStatsResType> => {
    const response = await http.get<GetReviewStatsResType>(`/products/${productId}/reviews/stats`);
    const validatedResponse = GetReviewStatsRes.parse(response);
    return validatedResponse;
};
