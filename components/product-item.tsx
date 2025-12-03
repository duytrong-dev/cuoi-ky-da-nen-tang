import { ProductType } from "@/schemaValidations/products.schema";
import { formatVND } from "@/utils/formatVND";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type ProductItemProps = {
    item: ProductType;
};

export default function ProductItem({ item }: ProductItemProps) {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const router = useRouter();

    const handleOnPress = (id: number) => {
        router.push(`/products/${id}`);
    };

    const toggleWishlist = (e: any) => {
        e.stopPropagation();
        setIsWishlisted(!isWishlisted);
    };
    return (
        <TouchableOpacity className="p-1" onPress={() => handleOnPress(item?.id)}>
            <View className="bg-white rounded-md overflow-hidden shadow-sm">
                {/* Image */}
                <View className="w-full aspect-square relative">
                    <Image
                        source={{ uri: item?.images ? item.images : "https://tse2.mm.bing.net/th/id/OIP.1CHTHCtRN3iZtu77T223mAHaHa?pid=Api&P=0&h=220" }}
                        className="w-full h-full"
                        resizeMode="cover"
                    />

                    {/* Wishlist Heart Icon */}
                    <TouchableOpacity
                        onPress={toggleWishlist}
                        className="absolute top-2 left-2 bg-white/80 rounded-full p-1.5"
                        style={{ elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, shadowRadius: 2 }}
                    >
                        <Ionicons
                            name={isWishlisted ? "heart" : "heart-outline"}
                            size={20}
                            color={isWishlisted ? "#EE4D2D" : "#666"}
                        />
                    </TouchableOpacity>

                </View>

                {/* Content */}
                <View className="p-2">
                    {/* Title with badges */}
                    <View className="mb-2">
                        <Text numberOfLines={2} className="text-sm text-black leading-4">
                            {item.name}
                        </Text>
                    </View>

                    {/* Trending Badge */}
                    {/* Trending Badge */}
                    {(item.sold_count || 0) > 100 && (
                        <View className="flex-row items-center mb-2">
                            <Text className="text-sm text-red-500 border border-red-500 px-2 rounded-[2px]">Đang bán chạy</Text>
                        </View>
                    )}

                    {/* Price */}
                    <View className="flex-row items-center mb-1">
                        <Text className="text-red-500 font-medium text-base">{formatVND(Number(item.price))}</Text>
                    </View>

                    {/* Rating */}
                    <View className="flex-row items-center mb-2">
                        <Ionicons name="star" size={12} color="#FFD700" />
                        <Text className="text-xs text-gray-600 ml-1">{item.rating || 0}</Text>
                        <Text className="text-xs text-gray-400 ml-2">Đã bán {item.sold_count || 0}</Text>
                    </View>

                    {/* Location & Delivery */}
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center flex-1">
                            <MaterialCommunityIcons name="truck-delivery-outline" size={16} color="#26AA99" />
                            <Text className="text-sm text-gray-500 ml-1" numberOfLines={1}>
                                2 - 3 ngày
                            </Text>
                        </View>
                        <Text className="text-sm text-gray-400 ml-2" numberOfLines={2}>
                            {item.shop?.address}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
