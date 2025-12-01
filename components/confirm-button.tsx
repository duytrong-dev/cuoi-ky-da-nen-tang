import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface ConfirmButtonProps {
    onPress?: () => void;
    label?: string;
}

export default function ConfirmButton({
    onPress,
    label = "Đồng ý"
}: ConfirmButtonProps) {
    return (
        <TouchableOpacity
            className="bg-primary py-3 rounded-md"
            onPress={onPress}
        >
            <Text className="text-white text-center font-bold text-base">
                {label}
            </Text>
        </TouchableOpacity>
    );
}
