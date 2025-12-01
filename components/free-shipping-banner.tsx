import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface FreeShippingBannerProps {
    maxDiscount?: string;
    minOrder?: string;
}

export default function FreeShippingBanner({
    maxDiscount = "500k₫",
    minOrder = "0₫"
}: FreeShippingBannerProps) {
    return (
        <View className="px-4 py-3 bg-white border-t border-gray-100">
            <View className="flex-row items-center justify-between">
                <View className="flex-row items-center flex-1">
                    <View className="bg-teal-500 px-2 py-1 rounded">
                        <Text className="text-white text-xs font-bold">FREE</Text>
                        <Text className="text-white text-xs font-bold">SHIP</Text>
                    </View>
                    <View className="ml-3 flex-1">
                        <Text className="text-base font-medium text-gray-800">Giảm tối đa {maxDiscount}</Text>
                        <Text className="text-sm text-gray-500">Đơn tối thiểu {minOrder} • Điều kiện</Text>
                    </View>
                </View>
                <TouchableOpacity className="bg-teal-500 px-4 py-1.5 rounded">
                    <Text className="text-white text-sm font-medium">Lưu</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
