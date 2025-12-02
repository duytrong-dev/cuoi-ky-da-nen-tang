import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface ShopInfo {
    name: string;
    avatar: string;
    badge?: string;
    location: string;
    rating: number;
    productCount: string;
    chatResponseRate: string;
}

interface ShopInfoCardProps {
    shop: ShopInfo;
}

export default function ShopInfoCard({ shop }: ShopInfoCardProps) {
    const router = useRouter();

    return (
        <View className="px-4 py-3 bg-white border-t-8 border-gray-100">
            <View className="flex-row items-center justify-between mb-3">
                <View className="flex-row items-center flex-1">
                    <Image
                        source={{ uri: shop.avatar }}
                        style={{ width: 48, height: 48 }}
                        className="rounded-full"
                    />
                    <View className="ml-3 flex-1">
                        <View className="flex-row items-center mb-1">
                            <Text className="text-base font-medium text-gray-800">{shop.name}</Text>
                            {shop.badge && (
                                <View className="bg-white px-1.5 py-0.5 rounded ml-2 border border-red-500">
                                    <Text className="text-red-500 text-xs font-bold">{shop.badge}</Text>
                                </View>
                            )}
                        </View>
                        <View className="flex-row items-center mb-0.5">
                            <View className="bg-red-500 px-1.5 py-0.5 rounded">
                                <Text className="text-white text-xs font-bold">Shop Nổi Bật</Text>
                            </View>
                            <Text className="text-xs text-gray-500 ml-1">trong Đồ Sưu Tầm</Text>
                        </View>
                        <Text className="text-xs text-gray-600">{shop.location}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    className="border border-secondary px-3 py-1.5 rounded"
                    onPress={() => router.push("/shops/[id]")}
                >
                    <Text className="text-secondary text-sm font-medium">Xem Shop</Text>
                </TouchableOpacity>
            </View>

            {/* Shop Stats */}
            <View className="flex-row items-center justify-between pt-3 border-t border-gray-100">
                <View className="items-center flex-1">
                    <Text className="text-sm font-medium text-gray-800">{shop.rating}</Text>
                    <Text className="text-xs text-gray-500 mt-0.5">Đánh Giá</Text>
                </View>
                <View className="w-px h-6 bg-gray-200" />
                <View className="items-center flex-1">
                    <Text className="text-sm font-medium text-gray-800">{shop.productCount}</Text>
                    <Text className="text-xs text-gray-500 mt-0.5">Sản Phẩm</Text>
                </View>
                <View className="w-px h-6 bg-gray-200" />
                <View className="items-center flex-1">
                    <Text className="text-sm font-medium text-gray-800">{shop.chatResponseRate}</Text>
                    <Text className="text-xs text-gray-500 mt-0.5">Phản Hồi Chat</Text>
                </View>
            </View>
        </View>
    );
}
