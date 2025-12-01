import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface ReturnPolicyBannerProps {
    returnDays?: number;
    insuranceText?: string;
}

export default function ReturnPolicyBanner({
    returnDays = 15,
    insuranceText = "Bảo hiểm Thiệt hại sản..."
}: ReturnPolicyBannerProps) {
    return (
        <TouchableOpacity className="px-4 py-3 bg-white border-t border-gray-100">
            <View className="flex-row items-center justify-between">
                <View className="flex-row items-center flex-1">
                    <Ionicons name="shield-checkmark-outline" size={18} color={Colors.light.primary} />
                    <Text className="text-sm text-gray-700 ml-2 flex-1">
                        Trả hàng miễn phí {returnDays} ngày • {insuranceText}
                    </Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color="#999" />
            </View>
        </TouchableOpacity>
    );
}
