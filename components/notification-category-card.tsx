import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface NotificationCategoryCardProps {
    icon: string;
    iconBg: string;
    title: string;
    description: string;
    badge?: number;
    onPress?: () => void;
    showBorder?: boolean;
}

export default function NotificationCategoryCard({
    icon,
    iconBg,
    title,
    description,
    badge,
    onPress,
    showBorder = true,
}: NotificationCategoryCardProps) {
    return (
        <TouchableOpacity
            className={`flex-row items-center px-4 py-4 ${showBorder ? "border-b border-gray-300" : ""}`}
            onPress={onPress}
        >
            <View className="w-10 h-10 rounded-lg items-center justify-center" style={{ backgroundColor: iconBg }}>
                <Ionicons name={icon as any} size={24} color="white" />
            </View>
            <View className="flex-1 ml-3">
                <Text className="text-lg font-medium text-black">{title}</Text>
                <Text className="text-md text-black mt-0.5" numberOfLines={1}>
                    {description}
                </Text>
            </View>
            {badge && badge > 0 && (
                <View className="bg-primary rounded-full w-6 h-6 items-center justify-center mr-2 border">
                    <Text className="text-black text-xs font-bold">{badge}</Text>
                </View>
            )}
            <Ionicons name="chevron-forward" size={20} color="black" />
        </TouchableOpacity>
    );
}
