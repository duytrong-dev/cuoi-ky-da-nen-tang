import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

interface TrendingHeaderTitleProps {
    title?: string;
    colorScheme?: 'light' | 'dark';
    icon?: React.ComponentProps<typeof Ionicons>['name'];
}

export default function TrendingHeaderTitle({ title = "XU HƯỚNG", colorScheme = 'light', icon = 'flame' }: TrendingHeaderTitleProps) {
    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name={icon} size={30} color={Colors[colorScheme ?? 'light'].secondary} />
            <Text style={{ color: Colors[colorScheme ?? 'light'].secondary }} className="text-2xl font-bold ml-2">
                {title}
            </Text>
        </View>
    );
}
