import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";

interface HeaderBackButtonProps {
    onPress: () => void;
    color?: string;
}

export default function HeaderBackButton({ onPress, color = Colors.light.secondary }: HeaderBackButtonProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Ionicons name="arrow-back" size={24} color={color} />
        </TouchableOpacity>
    );
}
