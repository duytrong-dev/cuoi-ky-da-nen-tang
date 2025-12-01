import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface ChatRatingPromptProps {
    onClose: () => void;
    onRate?: (rating: "bad" | "normal" | "good") => void;
}

export default function ChatRatingPrompt({ onClose, onRate }: ChatRatingPromptProps) {
    return (
        <View className="bg-white border-t border-gray-200 px-4 py-3">
            <View className="flex-row items-center justify-between mb-2">
                <Text className="text-lg font-medium text-gray-800">
                    Đánh Giá Dịch Vụ
                </Text>
                <TouchableOpacity onPress={onClose}>
                    <Ionicons name="close" size={20} color="#666" />
                </TouchableOpacity>
            </View>
            <Text className="text-md text-gray-600 mb-3">
                Bạn đánh giá lần hỗ trợ này như thế nào?
            </Text>
            <View className="flex-row justify-around">
                <TouchableOpacity
                    className="items-center"
                    onPress={() => onRate?.("bad")}
                >
                    <Text className="text-3xl mb-1">😞</Text>
                    <Text className="text-md text-gray-600">Kém</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="items-center"
                    onPress={() => onRate?.("normal")}
                >
                    <Text className="text-3xl mb-1">😐</Text>
                    <Text className="text-md text-gray-600">Bình Thường</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="items-center"
                    onPress={() => onRate?.("good")}
                >
                    <Text className="text-3xl mb-1">😊</Text>
                    <Text className="text-md text-gray-600">Tốt</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
