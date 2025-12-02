import {
    GetMeRes,
    GetMeResType,
    LoginBody,
    LoginBodyType,
    LoginRes,
    LoginResType,
    LogoutRes,
    LogoutResType,
    RegisterBody,
    RegisterBodyType,
    RegisterRes,
    RegisterResType,
} from "@/schemaValidations/auth.schema";
import http from "@/utils/http";
import { clearTokens, setTokens } from "@/utils/token-helper";

/**
 * Auth API Requests
 */

// Login request
export const loginRequest = async (body: LoginBodyType): Promise<LoginResType> => {
    const validatedBody = LoginBody.parse(body);
    const response = await http.post<LoginResType>("/auth/login", validatedBody);

    // Validate response
    const validatedResponse = LoginRes.parse(response);

    // Lưu tokens sau khi login thành công
    if (validatedResponse.data.access_token && validatedResponse.data.refresh_token) {
        await setTokens(
            validatedResponse.data.access_token,
            validatedResponse.data.refresh_token
        );
    }

    return validatedResponse;
};

// Register request
export const registerRequest = async (body: RegisterBodyType): Promise<RegisterResType> => {
    const validatedBody = RegisterBody.parse(body);
    const response = await http.post<RegisterResType>("/auth/register", validatedBody);

    // Validate response
    const validatedResponse = RegisterRes.parse(response);

    // Lưu tokens sau khi register thành công
    if (validatedResponse.data.access_token && validatedResponse.data.refresh_token) {
        await setTokens(
            validatedResponse.data.access_token,
            validatedResponse.data.refresh_token
        );
    }

    return validatedResponse;
};

// Logout request
export const logoutRequest = async (): Promise<LogoutResType> => {
    try {
        const response = await http.post<LogoutResType>("/auth/logout");
        const validatedResponse = LogoutRes.parse(response);
        return validatedResponse;
    } finally {
        // Xóa tokens dù API có lỗi hay không
        await clearTokens();
    }
};

// Get current user request
export const getMeRequest = async (): Promise<GetMeResType> => {
    const response = await http.get<GetMeResType>("/auth/me");
    const validatedResponse = GetMeRes.parse(response);
    return validatedResponse;
};
