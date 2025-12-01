import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
    Text,
    TouchableOpacity,
    View
} from "react-native";

interface ShippingMethodSectionProps {
    method: string;
    deliveryDate: string;
    shippingFee: number;
    voucherDiscount: number;
    onViewAll?: () => void;
}

export default function ShippingMethodSection({
    method,
    deliveryDate,
    shippingFee,
    voucherDiscount,
    onViewAll
}: ShippingMethodSectionProps) {
    return (
        <View className="bg-white px-4 py-3 mb-2">
            <TouchableOpacity className="flex-row items-center justify-between" onPress={onViewAll}>
                <Text className="text-md font-medium">Phương thức vận chuyển</Text>
                <View className="flex-row items-center">
                    <Text className="text-gray-600 text-sm mr-2">Xem tất cả</Text>
                    <Ionicons name="chevron-forward" size={16} color="#999" />
                </View>
            </TouchableOpacity>

            {/* Shipping Option */}
            <View className="mt-3 bg-teal-50 border border-teal-200 rounded-lg p-3">
                <View className="flex-row items-center justify-between mb-2">
                    <View className="flex-row items-center">
                        <MaterialCommunityIcons name="truck-fast" size={16} color="#14b8a6" />
                        <Text className="text-teal-600 font-medium text-md ml-2">{method}</Text>
                    </View>
                    <View className="flex-row items-center">
                        <Text className="text-gray-400 text-xs line-through mr-2">
                            {shippingFee.toLocaleString('vi-VN')}đ
                        </Text>
                        <Text className="text-teal-600 font-medium text-md">Miễn Phí</Text>
                    </View>
                </View>
                <Text className="text-teal-600 text-sm">
                    Nhận Voucher trị giá {voucherDiscount.toLocaleString('vi-VN')}đ nếu đơn hàng được giao đến bạn sau ngày {deliveryDate.split(' - ')[1]}.
                </Text>
            </View>

            <View className="mt-2 flex-row items-center">
                <Ionicons name="information-circle-outline" size={18} color="#999" />
                <Text className="text-gray-500 text-sm ml-1">Được đóng kiểm</Text>
            </View>
        </View>
    );
}
