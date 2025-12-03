import {
    ChangePasswordBody,
    ChangePasswordBodyType,
    ChangePasswordRes,
    ChangePasswordResType,
    CreateAddressBody,
    CreateAddressBodyType,
    CreateAddressRes,
    CreateAddressResType,
    DeleteAddressRes,
    DeleteAddressResType,
    GetAddressesRes,
    GetAddressesResType,
    UpdateAddressBody,
    UpdateAddressBodyType,
    UpdateAddressRes,
    UpdateAddressResType,
    UpdateProfileBody,
    UpdateProfileBodyType,
    UpdateProfileRes,
    UpdateProfileResType
} from "@/schemaValidations/users.schema";
import http from "@/utils/http";

// ==================== HỒ SƠ NGƯỜI DÙNG ====================

// Cập nhật hồ sơ
export const updateProfileApiRequest = async (body: UpdateProfileBodyType): Promise<UpdateProfileResType> => {
    const validatedBody = UpdateProfileBody.parse(body);
    const response = await http.put<UpdateProfileResType>("/users/me", validatedBody);
    const validatedResponse = UpdateProfileRes.parse(response);
    return validatedResponse;
};

// Đổi mật khẩu
export const changePasswordApiRequest = async (body: ChangePasswordBodyType): Promise<ChangePasswordResType> => {
    const validatedBody = ChangePasswordBody.parse(body);
    const response = await http.put<ChangePasswordResType>("/users/me/password", validatedBody);
    const validatedResponse = ChangePasswordRes.parse(response);
    return validatedResponse;
};

// ==================== ĐỊA CHỈ NGƯỜI DÙNG ====================

// Lấy tất cả địa chỉ
export const getAddressesApiRequest = async (): Promise<GetAddressesResType> => {
    const response = await http.get<GetAddressesResType>("/users/me/addresses");
    const validatedResponse = GetAddressesRes.parse(response);
    return validatedResponse;
};

// Tạo địa chỉ
export const createAddressApiRequest = async (body: CreateAddressBodyType): Promise<CreateAddressResType> => {
    const validatedBody = CreateAddressBody.parse(body);
    const response = await http.post<CreateAddressResType>("/users/me/addresses", validatedBody);
    const validatedResponse = CreateAddressRes.parse(response);
    return validatedResponse;
};

// Cập nhật địa chỉ
export const updateAddressApiRequest = async (
    id: number,
    body: UpdateAddressBodyType
): Promise<UpdateAddressResType> => {
    const validatedBody = UpdateAddressBody.parse(body);
    const response = await http.put<UpdateAddressResType>(`/users/me/addresses/${id}`, validatedBody);
    const validatedResponse = UpdateAddressRes.parse(response);
    return validatedResponse;
};

// Xóa địa chỉ
export const deleteAddressApiRequest = async (id: number): Promise<DeleteAddressResType> => {
    const response = await http.delete<DeleteAddressResType>(`/users/me/addresses/${id}`);
    const validatedResponse = DeleteAddressRes.parse(response);
    return validatedResponse;
};

// Đặt làm địa chỉ mặc định
export const setDefaultAddressApiRequest = async (id: number): Promise<UpdateAddressResType> => {
    const response = await http.put<UpdateAddressResType>(`/users/me/addresses/${id}/default`);
    const validatedResponse = UpdateAddressRes.parse(response);
    return validatedResponse;
};
