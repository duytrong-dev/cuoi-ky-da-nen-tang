import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface UtilityCardProps {
    icon: any;
    iconComponent?: "ionicons" | "material";
    title: string;
    subtitle?: string;
    badge?: boolean;
    onPress?: () => void;
}

export default function UtilityCard({
    icon,
    iconComponent = "ionicons",
    title,
    subtitle,
    badge,
    onPress,
}: UtilityCardProps) {
    const IconComponent = iconComponent === "ionicons" ? Ionicons : require("@expo/vector-icons").MaterialCommunityIcons;

    return (
        <TouchableOpacity className="items-center flex-1 flex-col" onPress={onPress}>
            <View className="relative">
                <IconComponent name={icon} size={28} color="black" />
                {badge && (
                    <View className="absolute -top-1 -right-1 bg-primary rounded-full w-3 h-3" />
                )}
            </View>
            <Text className="text-xs text-black mt-2 text-center font-medium">{title}</Text>
            {subtitle && (
                <Text className="text-xs text-black mt-1 text-center">{subtitle}</Text>
            )}
        </TouchableOpacity>
    );
}
