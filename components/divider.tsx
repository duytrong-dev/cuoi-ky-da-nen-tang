import React from "react";
import { Text, View } from "react-native";

interface DividerProps {
    text?: string;
}

export default function Divider({ text = "Hoặc" }: DividerProps) {
    return (
        <View className="flex-row items-center justify-center my-8">
            <View className="flex-1 h-[1px] bg-gray-300" />
            <Text className="mx-3 text-gray-700">{text}</Text>
            <View className="flex-1 h-[1px] bg-gray-300" />
        </View>
    );
}
