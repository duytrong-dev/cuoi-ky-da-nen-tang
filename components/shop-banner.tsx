import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

const { width } = Dimensions.get("window");

interface ShopBannerProps {
    imageUrl: string;
    shopName: string;
    shopAvatar: string;
    rating: number;
    followers: string;
    videoCount: string;
}

export default function ShopBanner({
    imageUrl,
    shopName,
    shopAvatar,
    rating,
    followers,
    videoCount,
}: ShopBannerProps) {
    return (
        <View className="bg-white">
            {/* Banner Image */}
            <Image
                source={{ uri: imageUrl }}
                style={{ width: width, height: 200 }}
                resizeMode="cover"
            />

            {/* Shop Info Overlay */}
            <View className="px-4 py-3">
                <View className="flex-row items-center justify-between">
                    {/* Left: Avatar and Info */}
                    <View className="flex-row items-center flex-1">
                        <Image
                            source={{ uri: shopAvatar }}
                            style={{ width: 48, height: 48 }}
                            className="rounded-full border-2 border-white"
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
                    </View>

                    {/* Right: Action Buttons */}
                    <View className="flex-row items-center">
                        <TouchableOpacity className="bg-primary px-4 py-2 rounded mr-2">
                            <Text className="text-white text-sm font-medium">+ Theo dõi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="border border-gray-300 px-3 py-2 rounded">
                            <Ionicons name="chatbubble-outline" size={18} color="#666" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Video Section */}
                <View className="flex-row items-center mt-3 pt-3 border-t border-gray-100">
                    <Ionicons name="play-circle-outline" size={20} color="#000" />
                    <Text className="text-sm text-gray-600 ml-2">Video sản phẩm</Text>
                    <Text className="text-sm text-gray-400 ml-2">{videoCount}+ Lượt xem</Text>
                    <Ionicons name="chevron-forward" size={16} color="#999" className="ml-auto" />
                </View>
            </View>
        </View>
    );
}
