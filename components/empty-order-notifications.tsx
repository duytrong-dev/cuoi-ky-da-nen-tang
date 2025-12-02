import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface EmptyOrderNotificationsProps {
    onShopNow: () => void;
}

export default function EmptyOrderNotifications({ onShopNow }: EmptyOrderNotificationsProps) {
    return (
        <View className="items-center justify-center py-10">
            {/* Shopping Cart Illustration */}
            <View className="flex items-center">
                <Image
                    className="w-80 h-80"
                    source={require("@/assets/images/none-product.png")}
                />
            </View>

            {/* Call to Action Button */}
            <TouchableOpacity
                className="border border-secondary rounded-lg px-8 py-3 bg-white"
                onPress={onShopNow}
            >
                <Text className="text-secondary text-md font-medium">Mua sắm ngay</Text>
            </TouchableOpacity>
        </View>
    );
}
