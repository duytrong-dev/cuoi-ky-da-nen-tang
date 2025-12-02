import { formatVND } from "@/utils/formatVND";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export type RecommendationProduct = {
    id: string;
    image: string;
    title: string;
    price: number;
    rating: number;
    sold: number;
    location: string;
    deliveryTime: string;
    isMall?: boolean;
    isPreferred?: boolean;
    hasVoucherXtra?: boolean;
};

type Props = {
    item: RecommendationProduct;
};

export default function RecommendationItem({ item }: Readonly<Props>) {
    return (
        <TouchableOpacity className="bg-white rounded-md overflow-hidden m-1 shadow-sm">
            {/* Image Container */}
            <View className="relative w-full aspect-square">
                <Image source={{ uri: item.image }} className="w-full h-full" resizeMode="cover" />
            </View>

            {/* Content */}
            <View className="p-2">
                {/* Title with Badge */}
                <Text numberOfLines={2} className="text-sm text-gray-800 leading-4 mb-1">
                    {item.isPreferred && (
                        <Text className="text-xs text-white bg-red-500 px-1 mr-1 rounded-[2px]"> Yêu thích+ </Text>
                    )}
                    {item.title}
                </Text>

                {/* Price */}
                <View>
                    <Text className="text-red-500 text-base font-medium">{formatVND(item.price)}</Text>
                </View>

                {/* Rating & Sold */}
                <View className="flex-row items-center mt-1">
                    <Ionicons name="star" size={10} color="#FFD700" />
                    <Text className="text-xs text-gray-500 ml-[2px]">{item.rating}</Text>
                    <View className="w-[1px] h-2 bg-gray-300 mx-1" />
                    <Text className="text-xs text-gray-500">Đã bán {item.sold}</Text>
                </View>

                {/* Delivery & Location */}
                <View className="mt-2 flex-row items-center justify-between">
                    <View className="flex-row items-center">
                        <MaterialCommunityIcons name="truck-delivery-outline" size={16} color="#26AA99" />
                        <Text className="text-sm text-gray-500 ml-1">{item.deliveryTime}</Text>
                    </View>
                    <Text className="text-sm text-gray-400">{item.location}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
