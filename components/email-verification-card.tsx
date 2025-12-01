import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface EmailVerificationCardProps {
    onClose?: () => void;
    onChangeEmail?: () => void;
    onVerify?: () => void;
}

export default function EmailVerificationCard({
    onClose,
    onChangeEmail,
    onVerify,
}: EmailVerificationCardProps) {
    return (
        <View className="bg-white my-2 p-4 rounded-lg">
            <TouchableOpacity className="absolute top-2 right-2" onPress={onClose}>
                <Ionicons name="close" size={20} color="black" />
            </TouchableOpacity>
            <View className="flex-row items-start">
                <Ionicons name="mail-outline" size={24} color="black" />
                <View className="flex-1 ml-3">
                    <Text className="text-lg font-medium text-black">Xác minh email</Text>
                    <Text className="text-md text-gray-700 mt-1">
                        Cập nhật email thường xuyên để đảm bảo bạn luôn có thể đăng nhập vào OEC Shop
                    </Text>
                    <View className="flex-row mt-3">
                        <TouchableOpacity
                            className="border border-gray-400 px-4 py-2 rounded mr-2"
                            onPress={onChangeEmail}
                        >
                            <Text className="text-md text-gray-700">Đổi Email</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="border border-gray-400 px-4 py-2 rounded"
                            onPress={onVerify}
                        >
                            <Text className="text-md text-gray-700">Xác minh ngay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
