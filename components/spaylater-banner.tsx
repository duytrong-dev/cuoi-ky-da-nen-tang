import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function SPayLaterBanner() {
    return (
        <TouchableOpacity className="px-4 py-3 bg-white border-t border-gray-100">
            <View className="flex-row items-center justify-between">
                <View className="flex-row items-center flex-1">
                    <Ionicons name="card-outline" size={18} color={Colors.light.primary} />
                    <Text className="text-sm text-gray-700 ml-2">SPayLater: Mua trước trả sau</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color="#999" />
            </View>
        </TouchableOpacity>
    );
}
