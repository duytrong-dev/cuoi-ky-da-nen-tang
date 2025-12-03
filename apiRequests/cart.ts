import {
    AddToCartBody,
    AddToCartBodyType,
    AddToCartRes,
    AddToCartResType,
    ClearCartRes,
    ClearCartResType,
    GetCartRes,
    GetCartResType,
    RemoveFromCartRes,
    RemoveFromCartResType,
    UpdateCartItemBody,
    UpdateCartItemBodyType,
    UpdateCartItemRes,
    UpdateCartItemResType,
} from "@/schemaValidations/cart.schema";
import http from "@/utils/http";

// ==================== THAO TÁC GIỎ HÀNG ====================

// Lấy giỏ hàng
export const getCartApiRequest = async (): Promise<GetCartResType> => {
    const response = await http.get<GetCartResType>("/cart");
    const validatedResponse = GetCartRes.parse(response);
    return validatedResponse;
};

// Thêm vào giỏ hàng
export const addToCartApiRequest = async (body: AddToCartBodyType): Promise<AddToCartResType> => {
    const validatedBody = AddToCartBody.parse(body);
    const response = await http.post<AddToCartResType>("/cart/items", validatedBody);
    const validatedResponse = AddToCartRes.parse(response);
    return validatedResponse;
};

// Cập nhật sản phẩm trong giỏ hàng
export const updateCartItemApiRequest = async (
    itemId: number,
    body: UpdateCartItemBodyType
): Promise<UpdateCartItemResType> => {
    const validatedBody = UpdateCartItemBody.parse(body);
    const response = await http.put<UpdateCartItemResType>(`/cart/items/${itemId}`, validatedBody);
    const validatedResponse = UpdateCartItemRes.parse(response);
    return validatedResponse;
};

// Xóa khỏi giỏ hàng
export const removeFromCartApiRequest = async (itemId: number): Promise<RemoveFromCartResType> => {
    const response = await http.delete<RemoveFromCartResType>(`/cart/items/${itemId}`);
    const validatedResponse = RemoveFromCartRes.parse(response);
    return validatedResponse;
};

// Xóa toàn bộ giỏ hàng
export const clearCartApiRequest = async (): Promise<ClearCartResType> => {
    const response = await http.delete<ClearCartResType>("/cart");
    const validatedResponse = ClearCartRes.parse(response);
    return validatedResponse;
};
