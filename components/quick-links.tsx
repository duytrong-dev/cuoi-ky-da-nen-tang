import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const links = [
    { id: 1, title: "ShopeeFood\nGiảm 50%", icon: "food-fork-drink", color: "#EE4D2D" },
    { id: 2, title: "Deal Từ\n1.000Đ", icon: "tag-outline", color: "#FFC107" },
    { id: 3, title: "ShopeeVIP", icon: "crown-outline", color: "#FF9800" },
    { id: 4, title: "Shopee\nXử Lý", icon: "shopping-outline", color: "#EE4D2D" },
    { id: 5, title: "Mã Giảm\nGiá", icon: "ticket-percent-outline", color: "#2196F3" },
    { id: 6, title: "Nạp Thẻ &\nDịch Vụ", icon: "cellphone", color: "#4CAF50" },
    { id: 7, title: "Shopee\nSiêu Rẻ", icon: "cart-percent", color: "#E91E63" },
    { id: 8, title: "Hàng\nQuốc Tế", icon: "airplane", color: "#9C27B0" },
    { id: 9, title: "Bắt Trend\n-50%", icon: "trending-up", color: "#FF5722" },
    { id: 10, title: "Săn Thưởng\n100K Xu", icon: "gamepad-variant-outline", color: "#795548" },
];

export default function QuickLinks() {

    const handleOnPress = (index: number) => {
        console.log(`Quick link ${index} pressed`);
    };

    return (
        <View className="flex-row flex-wrap bg-white py-4 mt-2">
            {links.map((link) => (
                <TouchableOpacity
                    key={link.id}
                    className="w-[20%] items-center mb-4"
                    onPress={() => handleOnPress(link.id)}
                >
                    <View className="w-10 h-10 rounded-xl border border-gray-100 items-center justify-center mb-1 bg-white shadow-sm">
                        {/* Using Icons as placeholders for the actual images */}
                        <MaterialCommunityIcons name={link.icon as any} size={24} color={link.color} />
                    </View>
                    <Text className="text-[10px] text-center text-gray-700 leading-3">
                        {link.title}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}
