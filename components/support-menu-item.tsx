import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface SupportMenuItemProps {
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
    onPress?: () => void;
    showBorder?: boolean;
}

export default function SupportMenuItem({ icon, label, onPress, showBorder = true }: SupportMenuItemProps) {
    return (
        <TouchableOpacity
            className={`flex-row items-center py-3 ${showBorder ? "border-b border-gray-100" : ""}`}
            onPress={onPress}
        >
            <Ionicons name={icon} size={24} color="black" />
            <Text className="text-md text-black ml-3 flex-1">{label}</Text>
            <Ionicons name="chevron-forward" size={16} color="black" />
        </TouchableOpacity>
    );
}
