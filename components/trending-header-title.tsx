import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

interface TrendingHeaderTitleProps {
    title?: string;
    colorScheme?: 'light' | 'dark';
}

export default function TrendingHeaderTitle({ title = "XU HƯỚNG", colorScheme = 'light' }: TrendingHeaderTitleProps) {
    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="flame" size={30} color={Colors[colorScheme ?? 'light'].secondary} />
            <Text style={{ color: Colors[colorScheme ?? 'light'].secondary }} className="text-2xl font-bold ml-2">
                {title}
            </Text>
        </View>
    );
}
