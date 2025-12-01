import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface ContinueButtonProps {
    disabled: boolean;
    onPress: () => void;
    text?: string;
}

export default function ContinueButton({
    disabled,
    onPress,
    text = "Tiếp tục",
}: ContinueButtonProps) {
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            className={`w-full py-4 rounded-lg mt-6 ${disabled ? "bg-gray-200" : "bg-primary"
                }`}
        >
            <Text
                className={`text-center font-semibold ${disabled ? "text-gray-500" : "text-black"
                    }`}
            >
                {text}
            </Text>
        </TouchableOpacity>
    );
}
