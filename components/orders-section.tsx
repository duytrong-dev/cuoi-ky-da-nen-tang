import OrderStatusItem from "@/components/order-status-item";
import { Colors } from "@/constants/theme";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function OrdersSection() {
    const router = useRouter();

    return (
        <View className="bg-white p-4">
            <View className="flex-row items-center justify-between mb-4">
                <Text className="text-lg font-medium text-gray-700">Đơn mua</Text>
                <TouchableOpacity className="flex-row items-center">
                    <Text className="text-md text-gray-700">Xem lịch sử mua hàng</Text>
                    <Ionicons name="chevron-forward" size={16} color="gray" />
                </TouchableOpacity>
            </View>

            {/* Order Status Icons */}
            <View className="flex-row justify-between mb-4">
                <OrderStatusItem
                    icon="receipt-outline"
                    label="Chờ xác nhận"
                    onPress={() => router.push("/my-orders")}
                />
                <OrderStatusItem
                    icon="cube-outline"
                    label="Chờ lấy hàng"
                    onPress={() => router.push("/my-orders")}
                />
                <OrderStatusItem
                    icon="car-outline"
                    label="Chờ giao hàng"
                    onPress={() => router.push("/my-orders")}
                />
                <OrderStatusItem
                    icon="star-outline"
                    label="Đánh giá"
                    badge={1}
                    onPress={() => router.push("/my-orders")}
                />
            </View>

            {/* Special Orders */}
            <View className="border-t border-gray-200 pt-3">
                <TouchableOpacity className="flex-row items-center justify-between py-2">
                    <View className="flex-row items-center">
                        <Ionicons name="phone-portrait-outline" size={20} color="black" />
                        <Text className="text-md text-gray-700 ml-2">Đơn Nạp điện thoại & Dịch vụ</Text>
                    </View>
                    <View className="flex-row items-center">
                        <Text className="text-sm text-secondary mr-1">Giảm 5%</Text>
                        <Ionicons name="chevron-forward" size={16} color={Colors.light.secondary} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center justify-between py-2">
                    <View className="flex-row items-center">
                        <MaterialCommunityIcons name="food-outline" size={20} color="black" />
                        <Text className="text-md text-gray-700 ml-2">Đơn OECFood</Text>
                    </View>
                    <View className="flex-row items-center">
                        <Text className="text-sm text-secondary mr-1">Đang có ưu đãi</Text>
                        <Ionicons name="chevron-forward" size={16} color={Colors.light.secondary} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
