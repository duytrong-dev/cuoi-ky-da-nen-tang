import React from "react";
import {
    Text,
    View,
} from "react-native";

interface SettingSectionHeaderProps {
    title: string;
}

export default function SettingSectionHeader({ title }: SettingSectionHeaderProps) {
    return (
        <View className="bg-gray-50 px-4 py-2">
            <Text className="text-sm text-gray-500">{title}</Text>
        </View>
    );
}
