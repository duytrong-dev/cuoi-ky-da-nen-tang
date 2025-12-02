import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

interface ShopProduct {
    name: string;
    price: string;
    rating: number;
    sold: number;
    image: string;
}

interface ShopProductsCarouselProps {
    products?: ShopProduct[];
}

const DEFAULT_PRODUCTS: ShopProduct[] = [
    {
        name: "Mô hình lắp ráp LBX Achilles D9...",
        price: "1.209.465₫",
        rating: 5.0,
        sold: 11,
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp"
    },
    {
        name: "Mô hình lắp ráp HG IBO Gunda...",
        price: "339.822₫",
        rating: 4.8,
        sold: 3,
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp"
    },
    {
        name: "Mô hình lắp ráp LBX 2nd tổng h...",
        price: "283.185₫",
        rating: 4.8,
        sold: 182,
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp"
    },
];

export default function ShopProductsCarousel({ products = DEFAULT_PRODUCTS }: ShopProductsCarouselProps) {
    return (
        <View className="py-3 bg-white border-t-2 border-gray-100">
            <TouchableOpacity className="flex-row items-center justify-between px-4 mb-3">
                <Text className="text-base font-medium text-gray-800">Các sản phẩm khác của Shop</Text>
                <Ionicons name="chevron-forward" size={16} color="#999" />
            </TouchableOpacity>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
                {products.map((product, index) => (
                    <TouchableOpacity key={index} className="mr-3 w-32 border border-gray-100 rounded-lg overflow-hidden">
                        <Image
                            source={{ uri: product.image }}
                            style={{ width: 128, height: 128 }}
                            className="w-full"
                        />
                        <View className="p-2">
                            <Text numberOfLines={2} className="text-xs text-gray-800 mb-1 h-8">
                                {product.name}
                            </Text>
                            <Text className="text-red-500 font-medium text-sm mb-1">{product.price}</Text>
                            <View className="flex-row items-center justify-between">
                                <View className="flex-row items-center">
                                    <Ionicons name="star" size={10} color="#FFD700" />
                                    <Text className="text-[10px] text-gray-600 ml-0.5">{product.rating}</Text>
                                </View>
                                <Text className="text-[10px] text-gray-500">Đã bán {product.sold}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}
