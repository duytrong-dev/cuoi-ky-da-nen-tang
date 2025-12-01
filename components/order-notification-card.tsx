import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface OrderNotificationCardProps {
    image: string;
    title: string;
    orderId: string;
    description: string;
    time: string;
    onPress?: () => void;
}

export default function OrderNotificationCard({
    image,
    title,
    orderId,
    description,
    time,
    onPress,
}: OrderNotificationCardProps) {
    return (
        <TouchableOpacity className="px-4 py-4 flex-row border-b border-gray-100" onPress={onPress}>
            <Image
                source={{ uri: image }}
                className="w-12 h-12 rounded"
            />
            <View className="flex-1 ml-3">
                <Text className="text-lg font-medium text-black">{title}</Text>
                <Text className="text-md text-gray-600 mt-1 leading-5">
                    Đơn hàng{" "}
                    <Text className="text-blue-600">{orderId}</Text>
                    {" "}đã hoàn thành. Bạn hãy đánh giá sản phẩm trước ngày{" "}
                    <Text className="text-blue-600">01-12-2025</Text>
                    {" "}để nhận{" "}
                    <Text className="font-medium">200 xu</Text>
                    {" "}và giúp người dùng khác hiểu hơn về sản phẩm nhé!
                </Text>
                <Text className="text-xs text-gray-400 mt-2">{time}</Text>
            </View>
            <TouchableOpacity className="ml-2">
                <Ionicons name="chevron-down" size={20} color="#999" />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}
