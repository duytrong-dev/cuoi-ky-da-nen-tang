import { ProductItemType } from "@/constants/product";
import { Colors } from "@/constants/theme";
import { formatVND } from "@/utils/formatVND";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type ProductItemProps = {
    item: ProductItemType;
};

export default function ProductItem({ item }: ProductItemProps) {

    const router = useRouter();

    const handleOnPress = (id: string) => {
        router.push(`/products/${id}`);
    };
    return (
        <TouchableOpacity className="p-1" onPress={() => handleOnPress(item.id)}>
            <View className="bg-white rounded-md overflow-hidden shadow-sm border border-black">
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
                            <Text className="text-[10px] font-bold text-black">VOUCHER</Text>
                            <Text className="text-[10px] font-bold text-black leading-3">XTRA</Text>
                        </View>
                    )}
                    {item.discount && (
                        <View className="absolute top-0 right-0 bg-primary px-1">
                            <Text className="text-xs font-bold text-black">{item.discount}</Text>
                        </View>
                    )}
                </View>

                {/* Content */}
                <View className="p-2">
                    {/* Title with badges */}
                    <View className="mb-2">
                        <Text numberOfLines={2} className="text-sm text-black leading-4">
                            {item.title}
                        </Text>
                    </View>

                    {/* Trending Badge */}
                    {item.isTrending && (
                        <View className="flex-row items-center mb-2">
                            <Text className="text-sm text-red-500 border border-red-500 px-2 rounded-[2px]">Đang bán chạy</Text>
                        </View>
                    )}

                    {/* Price */}
                    <View className="flex-row items-center mb-1">
                        <Text className="text-red-500 font-medium text-base">{formatVND(item.price)}</Text>
                        {item.originalPrice && (
                            <Text className="text-xs text-gray-400 line-through ml-2">{formatVND(item.originalPrice)}</Text>
                        )}
                    </View>

                    {/* Rating */}
                    <View className="flex-row items-center mb-2">
                        <Ionicons name="star" size={12} color="#FFD700" />
                        <Text className="text-xs text-gray-600 ml-1">{item.rating}</Text>
                        <Text className="text-xs text-gray-400 ml-2">Đã bán {item.sold}</Text>
                    </View>

                    {/* Location & Delivery */}
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center flex-1">
                            <MaterialCommunityIcons name="truck-delivery-outline" size={16} color={Colors.light.secondary} />
                            <Text className="text-sm text-gray-500 ml-1" numberOfLines={1}>
                                {item.deliveryTime}
                            </Text>
                        </View>
                        <Text className="text-sm text-gray-400 ml-2" numberOfLines={1}>
                            {item.location}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
