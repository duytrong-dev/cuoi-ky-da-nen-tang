import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

interface PasswordInputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    showForgotPassword?: boolean;
}

export default function PasswordInput({
    value,
    onChangeText,
    placeholder = "Mật khẩu",
    showForgotPassword = false,
}: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    return (
        <View className="flex-row items-center border-b border-gray-400 py-3 mt-4">
            <Ionicons name="lock-closed-outline" size={22} color="black" />
            <TextInput
                placeholder={placeholder}
                secureTextEntry={!showPassword}
                className="flex-1 ml-3 text-lg"
                style={{ fontSize: 16, lineHeight: 20 }}
                value={value}
                onChangeText={onChangeText}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    size={22}
                    color="black"
                />
            </TouchableOpacity>
            {showForgotPassword && (
                <>
                    <View className="w-[1px] h-5 bg-gray-300 mx-3" />
                    <TouchableOpacity onPress={() => router.push('/forgot-password')}>
                        <Text className="text-secondary">Quên?</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
}
