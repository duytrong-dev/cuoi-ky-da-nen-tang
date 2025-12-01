import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface BottomActionBarProps {
    onChat?: () => void;
    onAddToCart?: () => void;
    onBuyNow?: () => void;
    voucherPrice?: string;
}

export default function BottomActionBar({
    onChat,
    onAddToCart,
    onBuyNow,
    voucherPrice = "388.368₫"
}: BottomActionBarProps) {
    return (
        <View className="flex-row items-center px-4 py-3 bg-white border-t border-gray-200 pb-10">
            <TouchableOpacity className="items-center mr-6" onPress={onChat}>
                <Ionicons name="chatbubble-ellipses-outline" size={24} color={Colors.light.primary} />
                <Text className="text-xs text-gray-600 mt-1">Chat ngay</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center mr-6" onPress={onAddToCart}>
                <Ionicons name="cart-outline" size={24} color={Colors.light.primary} />
                <Text className="text-xs text-gray-600 mt-1">Thêm Vào Giỏ hàng</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 bg-primary py-3 rounded items-center" onPress={onBuyNow}>
                <Text className="text-white font-bold text-base">Mua với voucher {voucherPrice}</Text>
            </TouchableOpacity>
        </View>
    );
}
