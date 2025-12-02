import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

interface PasswordInputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    showForgotPassword?: boolean;
    error?: string;
}

export default function PasswordInput({
    value,
    onChangeText,
    placeholder = "Mật khẩu",
    showForgotPassword = false,
    error,
}: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    return (
        <View className="mt-2">
            <View className={`flex-row items-center border-b py-3 ${error ? 'border-red-500' : 'border-gray-300'}`}>
                <Ionicons name="lock-closed-outline" size={22} color={error ? "#ef4444" : "gray"} />
                <TextInput
                    placeholder={placeholder}
                    secureTextEntry={!showPassword}
                    className="flex-1 ml-3 text-lg text-gray-700"
                    style={{ fontSize: 16, lineHeight: 20 }}
                    value={value}
                    onChangeText={onChangeText}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons
                        name={showPassword ? "eye-outline" : "eye-off-outline"}
                        size={22}
                        color={error ? "#ef4444" : "gray"}
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
            {error && (
                <Text className="text-red-500 text-sm mt-1 ml-1">
                    {error}
                </Text>
            )}
        </View>
    );
}
