import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface ShopProfileSectionProps {
    shopName: string;
    shopAvatar: string;
    rating: number;
    followers: string;
    videoCount: string;
    viewCount: string;
}

export default function ShopProfileSection({
    shopName,
    shopAvatar,
    rating,
    followers,
    videoCount,
    viewCount,
}: ShopProfileSectionProps) {
    return (
        <View className="bg-white px-4 py-3">
            {/* Shop Info */}
            <View className="flex-row items-center mb-3">
                <Image
                    source={{ uri: shopAvatar }}
                    style={{ width: 48, height: 48 }}
                    className="rounded-full"
                />
                <View className="ml-3 flex-1">
                    <View className="flex-row items-center">
                        <Text className="text-base font-semibold">{shopName}</Text>
                        <Ionicons name="chevron-forward" size={16} color="#666" />
                    </View>
                    <View className="flex-row items-center mt-1">
                        <Ionicons name="star" size={14} color="#FFD700" />
                        <Text className="text-sm text-gray-600 ml-1">{rating}</Text>
                        <Text className="text-sm text-gray-400 mx-2">|</Text>
                        <Text className="text-sm text-gray-600">{followers} Người theo dõi</Text>
                    </View>
                </View>
                <TouchableOpacity className="bg-primary px-4 py-2 rounded">
                    <Text className="text-white text-sm font-medium">+ Theo dõi</Text>
                </TouchableOpacity>
            </View>

            {/* Action Buttons */}
            <View className="flex-row items-center justify-between pt-3 border-t border-gray-100">
                <TouchableOpacity className="flex-1 items-center border-r border-gray-100">
                    <Ionicons name="chatbubble-outline" size={20} color="#EE4D2D" />
                    <Text className="text-xs text-gray-600 mt-1">Chat</Text>
                </TouchableOpacity>
                <View className="flex-1 items-center">
                    <Ionicons name="play-circle-outline" size={20} color="#000" />
                    <Text className="text-xs text-gray-600 mt-1">Video sản phẩm</Text>
                    <Text className="text-xs text-gray-400">{videoCount}+ Lượt xem</Text>
                </View>
            </View>
        </View>
    );
}
