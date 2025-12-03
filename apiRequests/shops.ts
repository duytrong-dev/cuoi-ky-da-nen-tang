import {
    CreateShopBody,
    CreateShopBodyType,
    CreateShopRatingBody,
    CreateShopRatingBodyType,
    CreateShopRatingRes,
    CreateShopRatingResType,
    CreateShopRes,
    CreateShopResType,
    DeleteShopRes,
    DeleteShopResType,
    FollowRes,
    FollowResType,
    GetBestSellersRes,
    GetBestSellersResType,
    GetFollowersRes,
    GetFollowersResType,
    GetShopAnalyticsRes,
    GetShopAnalyticsResType,
    GetShopRatingsRes,
    GetShopRatingsResType,
    GetShopRes,
    GetShopResType,
    GetShopsRes,
    GetShopsResType,
    LikeShopRes,
    LikeShopResType,
    UpdateShopBody,
    UpdateShopBodyType,
    UpdateShopRes,
    UpdateShopResType,
} from "@/schemaValidations/shops.schema";
import http from "@/utils/http";

// ==================== CRUD CỬA HÀNG ====================

// Tạo cửa hàng
export const createShopApiRequest = async (body: CreateShopBodyType): Promise<CreateShopResType> => {
    const validatedBody = CreateShopBody.parse(body);

    // Tạo FormData
    const formData = new FormData();

    // Thêm các trường vào FormData
    formData.append('name', validatedBody.name);

    if (validatedBody.description) {
        formData.append('description', validatedBody.description);
    }

    if (validatedBody.logo) {
        const logoUri = validatedBody.logo;
        const filename = logoUri.split('/').pop() || 'logo.jpg';
        const match = /\.(\w+)$/.exec(filename);
        const type = match ? `image/${match[1]}` : 'image/jpeg';

        formData.append('logo', {
            uri: logoUri,
            name: filename,
            type: type,
        } as any);
    }

    if (validatedBody.banner) {
        const bannerUri = validatedBody.banner;
        const filename = bannerUri.split('/').pop() || 'banner.jpg';
        const match = /\.(\w+)$/.exec(filename);
        const type = match ? `image/${match[1]}` : 'image/jpeg';

        formData.append('banner', {
            uri: bannerUri,
            name: filename,
            type: type,
        } as any);
    }

    if (validatedBody.address) {
        formData.append('address', validatedBody.address);
    }

    if (validatedBody.business_type_id) {
        formData.append('business_type_id', validatedBody.business_type_id.toString());
    }

    const response = await http.post<CreateShopResType>("/shops", formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    const validatedResponse = CreateShopRes.parse(response);
    return validatedResponse;
};

// Lấy cửa hàng theo ID
export const getShopApiRequest = async (id: number): Promise<GetShopResType> => {
    const response = await http.get<GetShopResType>(`/shops/${id}`);
    const validatedResponse = GetShopRes.parse(response);
    return validatedResponse;
};

// Lấy danh sách cửa hàng của tôi
export const getMyShopsApiRequest = async (): Promise<GetShopsResType> => {
    const response = await http.get<GetShopsResType>("/shops/me");
    const validatedResponse = GetShopsRes.parse(response);
    return validatedResponse;
};

// Cập nhật cửa hàng
export const updateShopApiRequest = async (
    id: number,
    body: UpdateShopBodyType
): Promise<UpdateShopResType> => {
    const validatedBody = UpdateShopBody.parse(body);
    const response = await http.put<UpdateShopResType>(`/shops/${id}`, validatedBody);
    const validatedResponse = UpdateShopRes.parse(response);
    return validatedResponse;
};

// Xóa cửa hàng
export const deleteShopApiRequest = async (id: number): Promise<DeleteShopResType> => {
    const response = await http.delete<DeleteShopResType>(`/shops/${id}`);
    const validatedResponse = DeleteShopRes.parse(response);
    return validatedResponse;
};


// Hủy theo dõi cửa hàng
export const unfollowShopApiRequest = async (shopId: number): Promise<FollowResType> => {
    const response = await http.delete<FollowResType>(`/shops/${shopId}/follow`);
    const validatedResponse = FollowRes.parse(response);
    return validatedResponse;
};

// Lấy danh sách người theo dõi cửa hàng
export const getShopFollowersApiRequest = async (
    shopId: number,
    page: number = 1,
    limit: number = 20
): Promise<GetFollowersResType> => {
    const response = await http.get<GetFollowersResType>(`/shops/${shopId}/followers`, {
        params: { page, limit },
    });
    const validatedResponse = GetFollowersRes.parse(response);
    return validatedResponse;
};

// ==================== THÍCH CỬA HÀNG ====================

// Thích cửa hàng
export const likeShopApiRequest = async (shopId: number): Promise<LikeShopResType> => {
    const response = await http.post<LikeShopResType>(`/shops/${shopId}/like`);
    const validatedResponse = LikeShopRes.parse(response);
    return validatedResponse;
};

// Bỏ thích cửa hàng
export const unlikeShopApiRequest = async (shopId: number): Promise<LikeShopResType> => {
    const response = await http.delete<LikeShopResType>(`/shops/${shopId}/like`);
    const validatedResponse = LikeShopRes.parse(response);
    return validatedResponse;
};

// ==================== ĐÁNH GIÁ CỬA HÀNG ====================

// Đánh giá cửa hàng
export const rateShopApiRequest = async (
    shopId: number,
    body: CreateShopRatingBodyType
): Promise<CreateShopRatingResType> => {
    const validatedBody = CreateShopRatingBody.parse(body);
    const response = await http.post<CreateShopRatingResType>(`/shops/${shopId}/ratings`, validatedBody);
    const validatedResponse = CreateShopRatingRes.parse(response);
    return validatedResponse;
};

// Lấy danh sách đánh giá cửa hàng
export const getShopRatingsApiRequest = async (
    shopId: number,
    page: number = 1,
    limit: number = 20
): Promise<GetShopRatingsResType> => {
    const response = await http.get<GetShopRatingsResType>(`/shops/${shopId}/ratings`, {
        params: { page, limit },
    });
    const validatedResponse = GetShopRatingsRes.parse(response);
    return validatedResponse;
};

// ==================== THỐNG KÊ CỬA HÀNG ====================

// Lấy thống kê cửa hàng
export const getShopAnalyticsApiRequest = async (shopId: number): Promise<GetShopAnalyticsResType> => {
    const response = await http.get<GetShopAnalyticsResType>(`/shops/${shopId}/analytics`);
    const validatedResponse = GetShopAnalyticsRes.parse(response);
    return validatedResponse;
};

// Lấy danh sách sản phẩm bán chạy
export const getBestSellersApiRequest = async (
    shopId: number,
    limit: number = 10
): Promise<GetBestSellersResType> => {
    const response = await http.get<GetBestSellersResType>(`/shops/${shopId}/best-sellers`, {
        params: { limit },
    });
    const validatedResponse = GetBestSellersRes.parse(response);
    return validatedResponse;
};
