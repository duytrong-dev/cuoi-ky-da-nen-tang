import React from "react";
import { FlatList, Text, View } from "react-native";
import RecommendationItem, { RecommendationProduct } from "./recommendation-item";

const MOCK_DATA: RecommendationProduct[] = [
    {
        id: "1",
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz7j1caiwpep17.webp",
        title: "KUMITE WIN 1X COMBO CẦU VAI XANH ĐỎ BUSHIDO",
        price: 899999,
        rating: 5.0,
        sold: 4,
        location: "TP. Hồ Chí Minh",
        deliveryTime: "2 - 3 ngày",
        isPreferred: true,
        hasVoucherXtra: true,
    },
    {
        id: "2",
        image: "https://down-vn.img.susercontent.com/file/vn-11134211-7ras8-mbrnqd7r8r56ff.webp",
        title: "RAM DDR5 8Gb 16Gb BUS 5600MHz cho Laptop, Mini PC",
        price: 879999,
        rating: 5.0,
        sold: 18,
        location: "Quảng Ninh",
        deliveryTime: "2 - 4 ngày",
        hasVoucherXtra: true,
    },
    {
        id: "3",
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz7j1caiwpep17.webp",
        title: "[Sẵn hàng] Kit bàn phím cơ Lucky65 v3 - Nhôm CNC",
        price: 1300500,
        rating: 5.0,
        sold: 280,
        location: "Hà Nội",
        deliveryTime: "1 - 3 ngày",
        isPreferred: true,
        hasVoucherXtra: true,
    },
    {
        id: "4",
        image: "https://down-vn.img.susercontent.com/file/vn-11134211-7ras8-mbrnqd7r34vebe.webp",
        title: "[Bảo Hành 3 Năm] RAM LAPTOP DDR5 Samsung 8GB",
        price: 1799000,
        rating: 4.9,
        sold: 451,
        location: "TP. Hồ Chí Minh",
        deliveryTime: "2 - 3 ngày",
        isPreferred: true,
        hasVoucherXtra: true,
    },
];

export default function RecommendationSection() {
    return (
        <View className="px-2">
            {/* Header */}
            <View className="flex-row items-center justify-center my-6">
                <View className="h-[1px] bg-gray-400 flex-1" />
                <Text className="mx-4 text-black font-medium">Có thể bạn cũng thích</Text>
                <View className="h-[1px] bg-gray-400 flex-1" />
            </View>

            {/* Grid */}
            <FlatList
                data={MOCK_DATA}
                numColumns={2}
                keyExtractor={(item) => item.id}
                scrollEnabled={false}
                renderItem={({ item }) => (
                    <View className="w-1/2">
                        <RecommendationItem item={item} />
                    </View>
                )}
                columnWrapperStyle={{ marginHorizontal: -4 }}
            />
        </View>
    );
}
