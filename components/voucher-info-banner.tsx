import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

interface VoucherInfoBannerProps {
    message?: string;
}

export default function VoucherInfoBanner({
    message = "Chọn sản phẩm trong Giỏ hàng để áp dụng Voucher"
}: VoucherInfoBannerProps) {
    return (
        <View className="bg-[#FFF8E4] px-4 py-3 flex-row items-start">
            <Ionicons
                name="information-circle"
                size={20}
                color="#F6A700"
                style={{ marginTop: 2 }}
            />
            <Text className="ml-2 text-gray-700 flex-1 text-sm leading-5">
                {message}
            </Text>
        </View>
    );
}
