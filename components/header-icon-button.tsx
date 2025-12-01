import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";

interface HeaderIconButtonProps {
    iconName: keyof typeof Ionicons.glyphMap;
    onPress: () => void;
    color?: string;
    size?: number;
}

export default function HeaderIconButton({
    iconName,
    onPress,
    color = Colors.light.secondary,
    size = 24,
}: HeaderIconButtonProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Ionicons name={iconName} size={size} color={color} />
        </TouchableOpacity>
    );
}
