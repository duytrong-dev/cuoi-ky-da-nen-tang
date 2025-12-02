import { ProductItemType } from "@/constants/product";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import ProductItem from "./product-item";

interface ShopRecommendationsProps {
    products: ProductItemType[];
}

export default function ShopRecommendations({ products }: ShopRecommendationsProps) {
    return (
        <View className="bg-white py-3">
            {/* Header */}
            <View className="flex-row items-center justify-between px-4 mb-3">
                <Text className="text-base font-semibold">Gợi ý cho bạn</Text>
                <TouchableOpacity className="flex-row items-center">
                    <Text className="text-primary text-sm">Tìm hiểu ngay</Text>
                    <Ionicons name="chevron-forward" size={16} color="#EE4D2D" />
                </TouchableOpacity>
            </View>

            {/* Products Grid */}
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductItem item={item} />}
                keyExtractor={(item) => item.id}
                numColumns={2}
                scrollEnabled={false}
                columnWrapperStyle={{ paddingHorizontal: 12 }}
            />
        </View>
    );
}
