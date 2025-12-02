import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { useRouter } from "expo-router";
const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || "http://localhost:8000/api";

const router = useRouter();

interface ApiErrorResponse {
    success: boolean,
    message?: string;
    errors?: {
        field: string[]
    }
}

// Tạo axios instance
const http: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 30000, // 30s
    headers: {
        "Content-Type": "application/json",
    },
});

// Request interceptor - Trước khi request gửi đi, thêm token vào header
http.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
    try {
        const accessToken = await AsyncStorage.getItem("accessToken");
        if (accessToken && config.headers) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    } catch (error) {
        console.error("Error in request interceptor:", error);
        return config;
    }
}, (error: AxiosError) => {
    return Promise.reject(error);
});

// Response interceptor - Xử lý response và errors
http.interceptors.response.use((response) => {
    return response.data;
}, async (error: AxiosError<ApiErrorResponse>) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    // Xử lý lỗi 401 - Token hết hạn
    if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
            // Lấy refresh token
            const refreshToken = await AsyncStorage.getItem("refreshToken");

            if (!refreshToken) {
                // Không có refresh token, redirect to login
                await AsyncStorage.multiRemove(["accessToken", "refreshToken"]);
                router.replace("/login");
                return Promise.reject(error);
            }

            // Gọi API refresh token
            const response = await axios.post(`${API_BASE_URL}/auth/refresh`, {
                refreshToken,
            });

            const { accessToken: newAccessToken } = response.data;

            // Lưu token mới
            await AsyncStorage.setItem("accessToken", newAccessToken);

            // Retry request với token mới
            if (originalRequest.headers) {
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            }

            return http(originalRequest);
        } catch (refreshError) {
            // Refresh token failed, logout user
            await AsyncStorage.multiRemove(["accessToken", "refreshToken"]);
            router.replace("/login");
            return Promise.reject(refreshError);
        }
    }

    // Xử lý các lỗi khác
    if (error.response) {
        // Server responded with error
        const errorMessage = error.response.data?.message || "Đã có lỗi xảy ra";
        console.error("API Error:", errorMessage);
        return Promise.reject({
            status: error.response.status,
            message: errorMessage,
            data: error.response.data,
        });
    } else if (error.request) {
        // Request was made but no response
        console.error("Network Error:", error.message);
        return Promise.reject({
            status: 0,
            message: "Không thể kết nối đến server. Vui lòng kiểm tra kết nối mạng.",
        });
    } else {
        // Something else happened
        console.error("Error:", error.message);
        return Promise.reject({
            status: 0,
            message: error.message || "Đã có lỗi xảy ra",
        });
    }
}
);

export default http;

