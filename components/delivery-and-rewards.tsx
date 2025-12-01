import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function DeliveryAndRewards() {
    return (
        <View className="bg-transparent px-3">
            {/* Delivery Address */}
            <TouchableOpacity className="flex-row items-center px-4 py-3 border border-gray-400 rounded-md bg-white">
                <Ionicons name="location-outline" size={24} color="#abe743ff" />
                <View className="flex-1 ml-2">
                    <Text className="text-base font-medium">
                        Giao đến <Text className="font-bold">Nhà - Nguyễn Duy Trọng</Text>
                    </Text>
                </View>
                <Ionicons name="chevron-down" size={20} color="#666" />
            </TouchableOpacity>
        </View>
    );
}
