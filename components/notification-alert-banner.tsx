import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface NotificationAlertBannerProps {
    onClose: () => void;
}

export default function NotificationAlertBanner({ onClose }: NotificationAlertBannerProps) {
    return (
        <View className="p-1">
            <View className="bg-gray-100 px-4 py-3 flex-row items-start border border-gray-300 rounded-lg">
                <Ionicons name="notifications" size={20} color="black" className="mt-0.5" />
                <View className="flex-1 ml-3">
                    <Text className="text-md text-gray-700 leading-5">
                        Đồng ý nhận thông báo cập nhật những thông tin mới nhất về đơn hàng, ưu đãi và nhiều nội dung khác nữa.{" "}
                        <Text className="text-blue-500 font-medium">Đồng ý</Text>
                    </Text>
                </View>
                <TouchableOpacity onPress={onClose} className="ml-2">
                    <Ionicons name="close" size={20} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
