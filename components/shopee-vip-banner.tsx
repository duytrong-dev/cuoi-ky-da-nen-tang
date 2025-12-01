import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface ShopeeVIPBannerProps {
    vipPrice: string;
}

export default function ShopeeVIPBanner({ vipPrice }: ShopeeVIPBannerProps) {
    return (
        <TouchableOpacity className="px-4 py-2.5 bg-orange-50 border-t border-gray-100">
            <View className="flex-row items-center justify-between">
                <View className="flex-row items-center flex-1">
                    <View className="bg-primary rounded-full w-5 h-5 items-center justify-center mr-2">
                        <Text className="text-white text-xs font-bold">V</Text>
                    </View>
                    <Text className="text-primary text-sm font-medium flex-1">
                        Mua ngay với giá {vipPrice} khi là thành viên ShopeeVIP!
                    </Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color="#EE4D2D" style={{ marginLeft: 8 }} />
            </View>
        </TouchableOpacity>
    );
}
