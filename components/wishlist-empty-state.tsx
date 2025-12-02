import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function WishlistEmptyState() {
    const router = useRouter();

    return (
        <View className="flex-1 items-center justify-center px-6 py-20">
            <View className="bg-gray-100 rounded-full p-8 mb-6">
                <Ionicons name="heart-outline" size={80} color="#d1d5db" />
            </View>
            <Text className="text-xl font-semibold text-gray-800 mb-2">
                Chưa có sản phẩm yêu thích
            </Text>
            <Text className="text-center text-gray-500 mb-6">
                Hãy thêm sản phẩm vào danh sách yêu thích để không bỏ lỡ những món đồ ưng ý!
            </Text>
            <TouchableOpacity
                onPress={() => router.push("/")}
                className="bg-secondary px-8 py-3 rounded-lg"
            >
                <Text className="text-white font-semibold text-base">
                    Khám phá ngay
                </Text>
            </TouchableOpacity>
        </View>
    );
}
