import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";

interface InputFieldProps {
    icon: keyof typeof Ionicons.glyphMap;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
}

export default function InputField({
    icon,
    placeholder,
    value,
    onChangeText,
    keyboardType = "default",
}: InputFieldProps) {
    return (
        <View className="flex-row items-center border-b border-gray-400 py-3">
            <Ionicons name={icon} size={22} color="black" />
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                className="flex-1 ml-3 text-lg"
                style={{ fontSize: 16, lineHeight: 20 }}
            />
        </View>
    );
}
