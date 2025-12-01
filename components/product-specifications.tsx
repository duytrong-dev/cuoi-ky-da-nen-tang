import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function ProductSpecifications() {
    return (
        <View className="px-4 py-3 bg-white border-t-8 border-gray-100">
            <View className="flex-row items-center justify-between">
                <Text className="text-sm font-medium text-gray-800">Chi tiết sản phẩm</Text>
                <TouchableOpacity className="flex-row items-center">
                    <Text className="text-xs text-gray-500 mr-1">Kho, Thương hiệu, Lo...</Text>
                    <Ionicons name="chevron-forward" size={16} color="#999" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
