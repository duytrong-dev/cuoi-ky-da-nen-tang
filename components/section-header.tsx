import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

interface SectionHeaderProps {
    title: string;
    onPress?: () => void;
}

export default function SectionHeader({ title, onPress }: SectionHeaderProps) {
    return (
        <View className="p-2 flex-row items-center">
            <Text className="text-black font-bold text-lg">{title}</Text>
            <Ionicons name="chevron-forward-outline" size={16} color="black" />
        </View>
    );
}
