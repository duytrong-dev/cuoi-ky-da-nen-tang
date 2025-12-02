import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

interface ContinueButtonProps {
    disabled: boolean;
    onPress: () => void;
    text?: string;
    isLoading?: boolean;
}

export default function ContinueButton({
    disabled,
    onPress,
    text = "Tiếp tục",
    isLoading = false,
}: ContinueButtonProps) {
    const isDisabled = disabled || isLoading;

    return (
        <TouchableOpacity
            disabled={isDisabled}
            onPress={onPress}
            className={`w-full py-4 rounded-lg mt-6 ${isDisabled ? "bg-gray-200" : "bg-primary"
                }`}
        >
            {isLoading ? (
                <ActivityIndicator color={isDisabled ? "#6b7280" : "#ffffff"} />
            ) : (
                <Text
                    className={`text-center font-semibold ${isDisabled ? "text-gray-500" : "text-white"
                        }`}
                >
                    {text}
                </Text>
            )}
        </TouchableOpacity>
    );
}
