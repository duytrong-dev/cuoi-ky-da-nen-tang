import UtilityCard from "@/components/utility-card";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function FinancialServicesSection() {
    return (
        <View className="bg-white mt-2 p-4">
            <View className="flex-row items-center justify-between mb-4">
                <Text className="text-lg font-medium text-gray-700">Dịch vụ tài chính</Text>
                <TouchableOpacity className="flex-row items-center">
                    <Text className="text-md text-gray-700">Xem thêm</Text>
                    <Ionicons name="chevron-forward" size={16} color="gray" />
                </TouchableOpacity>
            </View>
            <View className="flex-row justify-between">
                <UtilityCard
                    icon="cash-outline"
                    title="Vay Tiêu Dùng"
                    subtitle="Miễn lãi kỳ đầu tiên"
                />
                <UtilityCard
                    icon="card-outline"
                    title="Tài ShopeePay"
                    subtitle="Gói voucher 1.000.000Đ"
                />
                <UtilityCard
                    icon="shield-checkmark-outline"
                    title="Bảo hiểm của tôi"
                    subtitle="Gói Tai nạn MIỄN phí"
                />
            </View>
        </View>
    );
}
