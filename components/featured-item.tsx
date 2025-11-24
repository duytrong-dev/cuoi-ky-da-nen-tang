import { Colors } from "@/constants/theme";
import { formatVND } from "@/utils/formatVND";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export type FeaturedProductItem = {
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
    isTrending?: boolean;
};

type FeaturedItemProps = {
    item: FeaturedProductItem;
};

export default function FeaturedItem({ item }: FeaturedItemProps) {
    return (
        <TouchableOpacity className="p-1">
            <View className="bg-white rounded-md overflow-hidden shadow-sm border border-gray-100">
                {/* Image */}
                <View className="w-full aspect-square relative">
                    <Image
                        source={{ uri: item.image }}
                        className="w-full h-full"
                        resizeMode="cover"
                    />

                    {/* Voucher Xtra Badge */}
                    {item.hasVoucherXtra && (
                        <View className="absolute bottom-0 left-0 bg-yellow-400 px-1 py-[2px]">
                            <Text className="text-[10px] font-bold text-white">VOUCHER</Text>
                            <Text className="text-[10px] font-bold text-white leading-3">XTRA</Text>
                        </View>
                    )}
                </View>

                {/* Content */}
                <View className="p-2">
                    {/* Title with badges */}
                    <View className="mb-2">
                        <Text numberOfLines={2} className="text-xs text-gray-800 leading-4">
                            {item.isMall && (
                                <Text className="text-[10px] text-white bg-[#D0011B] px-1 mr-1 rounded-[2px]"> Mall </Text>
                            )}
                            {item.isPreferred && !item.isMall && (
                                <Text className="text-[10px] text-white bg-primary px-1 mr-1 rounded-[2px]"> Yêu thích </Text>
                            )}
                            {item.title}
                        </Text>
                    </View>

                    {/* Trending Badge */}
                    {item.isTrending && (
                        <View className="flex-row items-center mb-2">
                            <Text className="text-[10px] text-red-500 border border-red-500 px-1 rounded-[2px]">Đang bán chạy</Text>
                        </View>
                    )}

                    {/* Price */}
                    <Text className="text-primary text-base font-medium mb-1">
                        {formatVND(item.price)}
                    </Text>

                    {/* Rating */}
                    <View className="flex-row items-center mb-2">
                        <Ionicons name="star" size={12} color="#FFD700" />
                        <Text className="text-[10px] text-gray-600 ml-1">{item.rating}</Text>
                        <Text className="text-[10px] text-gray-400 ml-2">Đã bán {item.sold}</Text>
                    </View>

                    {/* Location & Delivery */}
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center flex-1">
                            <MaterialCommunityIcons name="truck-delivery-outline" size={12} color={Colors.light.secondary} />
                            <Text className="text-[10px] text-gray-500 ml-1" numberOfLines={1}>
                                {item.deliveryTime}
                            </Text>
                        </View>
                        <Text className="text-[10px] text-gray-400 ml-2" numberOfLines={1}>
                            {item.location}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
