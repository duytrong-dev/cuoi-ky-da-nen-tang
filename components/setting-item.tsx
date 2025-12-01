import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    Text,
    TouchableOpacity,
    View,
} from "react-native";

interface SettingItemProps {
    title: string;
    subtitle?: string;
    onPress?: () => void;
}

export default function SettingItem({ title, subtitle, onPress }: SettingItemProps) {
    return (
        <TouchableOpacity
            className="bg-white px-4 py-4 flex-row items-center justify-between border-b border-gray-100"
            onPress={onPress}
        >
            <View className="flex-1">
                <Text className="text-base text-black">{title}</Text>
                {subtitle && (
                    <Text className="text-sm text-black mt-1">{subtitle}</Text>
                )}
            </View>
            <Ionicons name="chevron-forward" size={20} color="black" />
        </TouchableOpacity>
    );
}
