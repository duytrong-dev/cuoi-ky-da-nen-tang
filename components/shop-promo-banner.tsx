import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface ShopPromoBannerProps {
    shopName: string;
    shopAvatar: string;
    shopDescription?: string;
    productCount?: number;
    rating?: number;
    responseRate?: string;
}

export default function ShopPromoBanner({
    shopName,
    shopAvatar,
    shopDescription = "Chuyên cung cấp thời trang nam chất lượng cao, giá cả phải chăng. Cam kết hàng chính hãng 100%.",
    productCount = 36,
    rating = 4.9,
    responseRate = "99%",
}: ShopPromoBannerProps) {
    return (
        <View className="bg-white">

            {/* Shop Introduction */}
            <View className="px-4 py-4 border-t-8 border-gray-100 mt-4">
                <Text className="text-lg font-bold text-gray-800 mb-3">Giới thiệu Shop</Text>

                {/* Shop Info */}
                <View className="flex-row items-center mb-4">
                    <Image
                        source={{ uri: shopAvatar }}
                        style={{ width: 60, height: 60 }}
                        className="rounded-full border-2 border-gray-200"
                    />
                    <View className="ml-3 flex-1">
                        <Text className="text-base font-semibold text-gray-800">{shopName}</Text>
                        <View className="flex-row items-center mt-1">
                            <Ionicons name="star" size={14} color="#FFD700" />
                            <Text className="text-sm text-gray-600 ml-1">{rating}</Text>
                            <Text className="text-sm text-gray-400 mx-2">|</Text>
                            <Text className="text-sm text-gray-600">{productCount} Sản phẩm</Text>
                        </View>
                    </View>
                </View>

                {/* Description */}
                <Text className="text-sm text-gray-600 leading-5 mb-4">
                    {shopDescription}
                </Text>

                {/* Stats Grid */}
                <View className="flex-row flex-wrap mb-4">
                    <View className="w-1/2 mb-3">
                        <View className="flex-row items-center">
                            <View className="bg-orange-100 p-2 rounded-full mr-2">
                                <Ionicons name="chatbubble-ellipses" size={16} color="#EE4D2D" />
                            </View>
                            <View>
                                <Text className="text-xs text-gray-500">Tỉ lệ phản hồi</Text>
                                <Text className="text-sm font-semibold text-gray-800">{responseRate}</Text>
                            </View>
                        </View>
                    </View>
                    <View className="w-1/2 mb-3">
                        <View className="flex-row items-center">
                            <View className="bg-orange-100 p-2 rounded-full mr-2">
                                <Ionicons name="time" size={16} color="#EE4D2D" />
                            </View>
                            <View>
                                <Text className="text-xs text-gray-500">Thời gian phản hồi</Text>
                                <Text className="text-sm font-semibold text-gray-800">Vài phút</Text>
                            </View>
                        </View>
                    </View>
                    <View className="w-1/2">
                        <View className="flex-row items-center">
                            <View className="bg-orange-100 p-2 rounded-full mr-2">
                                <Ionicons name="people" size={16} color="#EE4D2D" />
                            </View>
                            <View>
                                <Text className="text-xs text-gray-500">Người theo dõi</Text>
                                <Text className="text-sm font-semibold text-gray-800">3,6k</Text>
                            </View>
                        </View>
                    </View>
                    <View className="w-1/2">
                        <View className="flex-row items-center">
                            <View className="bg-orange-100 p-2 rounded-full mr-2">
                                <Ionicons name="trophy" size={16} color="#EE4D2D" />
                            </View>
                            <View>
                                <Text className="text-xs text-gray-500">Đánh giá</Text>
                                <Text className="text-sm font-semibold text-gray-800">8,4k</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Action Buttons */}
                <View className="flex-row gap-2">
                    <TouchableOpacity className="flex-1 bg-secondary py-3 rounded-lg">
                        <Text className="text-white text-center font-semibold">Xem Shop</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 border border-secondary py-3 rounded-lg">
                        <Text className="text-secondary text-center font-semibold">Chat Ngay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
