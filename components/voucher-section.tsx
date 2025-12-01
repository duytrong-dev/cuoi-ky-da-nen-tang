import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

export default function VoucherSection() {
    return (
        <View className="px-4 py-2.5 bg-white border-t border-gray-100">
            <View className="flex-row items-center justify-between">
                <View className="flex-row items-center flex-1">
                    <View className="bg-red-50 px-2 py-1 rounded mr-2">
                        <Text className="text-red-500 text-xs font-medium">Mua tối thiểu ₫150k để được giảm 7%</Text>
                    </View>
                    <View className="bg-primary px-2 py-1 rounded">
                        <Text className="text-white text-xs font-bold">SPayLater 0%</Text>
                    </View>
                </View>
                <Ionicons name="chevron-forward" size={18} color="#999" style={{ marginLeft: 8 }} />
            </View>
        </View>
    );
}
