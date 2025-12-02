import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, View } from "react-native";

interface InputFieldProps {
    icon: keyof typeof Ionicons.glyphMap;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
    error?: string;
}

export default function InputField({
    icon,
    placeholder,
    value,
    onChangeText,
    keyboardType = "default",
    error,
}: InputFieldProps) {
    return (
        <View className="mt-2">
            <View className={`flex-row items-center border-b py-3 ${error ? 'border-red-500' : 'border-gray-300'}`}>
                <Ionicons name={icon} size={22} color={error ? "#ef4444" : "gray"} />
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    className="flex-1 ml-3 text-lg text-gray-700"
                    style={{ fontSize: 16, lineHeight: 20 }}
                />
            </View>
            {error && (
                <Text className="text-red-500 text-sm mt-1 ml-1">
                    {error}
                </Text>
            )}
        </View>
    );
}
