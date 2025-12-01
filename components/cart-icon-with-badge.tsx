import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface CartIconWithBadgeProps {
    count: number;
    onPress: () => void;
    color?: string;
    badgeColor?: string;
    badgeTextColor?: string;
    colorScheme?: "light" | "dark";
}

export default function CartIconWithBadge({
    count,
    onPress,
    color,
    badgeColor,
    badgeTextColor,
    colorScheme = "light",
}: CartIconWithBadgeProps) {
    const finalBadgeColor = badgeColor || Colors[colorScheme].primary;
    const finalBadgeTextColor = badgeTextColor || "white";

    return (
        <TouchableOpacity
            style={{ position: "relative" }}
            onPress={onPress}
        >
            <Ionicons name="cart-outline" size={26} color={color} />
            {count > 0 && (
                <View
                    style={{
                        position: "absolute",
                        top: -4,
                        right: -8,
                        backgroundColor: finalBadgeColor,
                        borderRadius: 10,
                        minWidth: 16,
                        height: 16,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingHorizontal: 4,
                        borderWidth: badgeTextColor === "white" ? 0 : 1,
                        borderColor: "black",
                    }}
                >
                    <Text style={{ color: finalBadgeTextColor, fontSize: 10, fontWeight: "bold" }}>
                        {count}
                    </Text>
                </View>
            )}
        </TouchableOpacity>
    );
}
