import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface WishlistProductCardProps {
    id: string;
    image: string;
    title: string;
    price: number;
    originalPrice?: number;
    discount?: string;
    rating: number;
    sold: number;
    shop: string;
    onRemove: (id: string) => void;
}

export default function WishlistProductCard({
    id,
    image,
    title,
    price,
    originalPrice,
    discount,
    rating,
    sold,
    shop,
    onRemove,
}: WishlistProductCardProps) {
    const router = useRouter();

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(price);
    };

    return (
        <View className="w-1/2 p-2">
            <TouchableOpacity
                onPress={() => router.push(`/products/${id}`)}
                className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
                {/* Image */}
                <View className="relative">
                    <Image
                        source={{ uri: image }}
                        className="w-full h-48"
                        resizeMode="cover"
                    />
                    {/* Discount Badge */}
                    {discount && (
                        <View className="absolute top-0 right-0 bg-yellow-400 px-2 py-1">
                            <Text className="text-xs font-bold text-black">
                                {discount}
                            </Text>
                        </View>
                    )}
                    {/* Heart Icon */}
                    <TouchableOpacity
                        onPress={() => onRemove(id)}
                        className="absolute top-2 left-2 bg-gray-100 rounded-full p-1.5"
                    >
                        <Ionicons name="heart" size={20} color="#ef4444" />
                    </TouchableOpacity>
                </View>

                {/* Product Info */}
                <View className="p-3">
                    {/* Title */}
                    <Text
                        numberOfLines={2}
                        className="text-sm text-gray-800 mb-2 h-10"
                    >
                        {title}
                    </Text>

                    {/* Price */}
                    <View className="flex-row items-center mb-2">
                        <Text className="text-red-500 font-semibold text-base">
                            {formatPrice(price)}
                        </Text>
                        {originalPrice && (
                            <Text className="text-gray-400 text-xs line-through ml-2">
                                {formatPrice(originalPrice)}
                            </Text>
                        )}
                    </View>

                    {/* Rating & Sold */}
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center">
                            <Ionicons name="star" size={12} color="#fbbf24" />
                            <Text className="text-xs text-gray-600 ml-1">
                                {rating}
                            </Text>
                        </View>
                        <Text className="text-xs text-gray-500">
                            Đã bán {sold}
                        </Text>
                    </View>

                    {/* Shop Name */}
                    <View className="flex-row items-center mt-2 pt-2 border-t border-gray-100">
                        <Ionicons name="storefront-outline" size={12} color="#9ca3af" />
                        <Text className="text-xs text-gray-500 ml-1">
                            {shop}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}
