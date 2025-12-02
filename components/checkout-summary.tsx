import React from "react";
import {
    Text,
    View
} from "react-native";

interface CheckoutSummaryProps {
    subtotal: number;
    shippingFee: number;
    shippingDiscount: number;
    total: number;
}

export default function CheckoutSummary({
    subtotal,
    shippingFee,
    shippingDiscount,
    total
}: CheckoutSummaryProps) {
    return (
        <View className="bg-white px-4 py-3 mb-2">
            <Text className="font-medium text-lg mb-3">Chi tiết thanh toán</Text>

            <View className="flex-row justify-between mb-2">
                <Text className="text-gray-600 text-sm">Tổng tiền hàng</Text>
                <Text className="text-sm">{subtotal.toLocaleString('vi-VN')}đ</Text>
            </View>

            <View className="flex-row justify-between mb-2">
                <Text className="text-gray-600 text-sm">Tổng tiền phí vận chuyển</Text>
                <Text className="text-sm">{shippingFee.toLocaleString('vi-VN')}đ</Text>
            </View>

            <View className="flex-row justify-between mb-2">
                <Text className="text-gray-600 text-sm">Giảm giá phí vận chuyển</Text>
                <Text className="text-red-500 text-sm">{shippingDiscount.toLocaleString('vi-VN')}đ</Text>
            </View>

            <View className="flex-row justify-between pt-2 border-t border-gray-100">
                <Text className="font-medium text-lg">Tổng thanh toán</Text>
                <Text className="font-medium text-lg text-red-500">{total.toLocaleString('vi-VN')}đ</Text>
            </View>
        </View>
    );
}
