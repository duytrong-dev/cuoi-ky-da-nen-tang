import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface DeliveryInfoSectionProps {
    deliveryTime?: string;
    shippingFee?: string;
    voucherAmount?: string;
}

export default function DeliveryInfoSection({
    deliveryTime = "Ngày Mai 12:00",
    shippingFee = "0₫",
    voucherAmount = "15.000₫"
}: DeliveryInfoSectionProps) {
    return (
        <View className="px-4 py-3 bg-white border-t border-gray-100">
            <TouchableOpacity className="flex-row items-center justify-between mb-2">
                <View className="flex-row items-center flex-1">
                    <Ionicons name="cube-outline" size={18} color={Colors.light.primary} />
                    <Text className="text-base text-gray-800 ml-2">Nhận trong {deliveryTime}</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color="#999" />
            </TouchableOpacity>
            <Text className="text-base font-medium text-teal-600">Phí ship {shippingFee}</Text>
            <Text className="text-sm text-gray-500 mt-1">
                Tặng Voucher {voucherAmount} nếu đơn giao sau thời gian trên.
            </Text>
        </View>
    );
}
