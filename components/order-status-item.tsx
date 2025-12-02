import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface OrderStatusItemProps {
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
    badge?: number;
    onPress?: () => void;
}

export default function OrderStatusItem({ icon, label, badge, onPress }: OrderStatusItemProps) {
    return (
        <TouchableOpacity className="items-center flex-1" onPress={onPress}>
            <View className="relative">
                <Ionicons name={icon} size={28} color="black" />
                {badge && badge > 0 && (
                    <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 items-center justify-center">
                        <Text className="text-white text-xs font-bold">{badge}</Text>
                    </View>
                )}
            </View>
            <Text className="text-xs text-gray-700 mt-2 text-center">{label}</Text>
        </TouchableOpacity>
    );
}
