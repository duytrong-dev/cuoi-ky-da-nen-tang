import AsyncStorage from "@react-native-async-storage/async-storage";

// Helper functions để lưu tokens
export const setTokens = async (accessToken: string, refreshToken: string) => {
    try {
        await AsyncStorage.multiSet([
            ["accessToken", accessToken],
            ["refreshToken", refreshToken],
        ]);
    } catch (error) {
        console.error("Error saving tokens:", error);
    }
};

// Helper functions để xóa tokens
export const clearTokens = async () => {
    try {
        await AsyncStorage.multiRemove(["accessToken", "refreshToken"]);
    } catch (error) {
        console.error("Error clearing tokens:", error);
    }
};

// Helper functions để lấy access token
export const getAccessToken = async (): Promise<string | null> => {
    try {
        return await AsyncStorage.getItem("accessToken");
    } catch (error) {
        console.error("Error getting access token:", error);
        return null;
    }
};