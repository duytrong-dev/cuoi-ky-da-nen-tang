import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface EmptyOrderNotificationsProps {
    onShopNow: () => void;
}

export default function EmptyOrderNotifications({ onShopNow }: EmptyOrderNotificationsProps) {
    return (
        <View className="items-center justify-center py-10">
            {/* Shopping Cart Illustration */}
            <View className="relative mb-6">
                <View className="bg-primary rounded-full p-8">
                    <Ionicons name="cart-outline" size={72} color={Colors.light.secondary} />
                </View>
                {/* Sparkle effects */}
                <View className="absolute -top-2 -left-2">
                    <Text className="text-3xl">✨</Text>
                </View>
                <View className="absolute -top-2 -right-2">
                    <Text className="text-3xl">✨</Text>
                </View>
            </View>

            {/* Call to Action Button */}
            <TouchableOpacity
                className="border border-black rounded-lg px-8 py-3 bg-primary"
                onPress={onShopNow}
            >
                <Text className="text-black text-md font-medium">Mua sắm ngay</Text>
            </TouchableOpacity>
        </View>
    );
}
