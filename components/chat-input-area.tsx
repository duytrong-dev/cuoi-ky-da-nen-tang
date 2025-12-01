import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

interface ChatInputAreaProps {
    message: string;
    onChangeMessage: (text: string) => void;
    onSend?: () => void;
    onAttach?: () => void;
    onEmoji?: () => void;
}

export default function ChatInputArea({
    message,
    onChangeMessage,
    onSend,
    onAttach,
    onEmoji,
}: ChatInputAreaProps) {
    return (
        <View className="bg-white border-t border-gray-200 px-4 py-4 pb-12">
            <View className="flex-row items-center mb-3">
                <Ionicons name="document-attach-outline" size={20} color={Colors.light.primary} />
                <Text className="text-md text-primary ml-1">Đánh giá mức độ hài lòng</Text>
            </View>
            <View className="flex-row items-center">
                <TouchableOpacity className="mr-2" onPress={onAttach}>
                    <Ionicons name="add-circle-outline" size={28} color="#666" />
                </TouchableOpacity>
                <TextInput
                    placeholder="Gửi tin nhắn ..."
                    className="flex-1 bg-gray-100 rounded-full px-4 py-3 text-base"
                    style={{ fontSize: 16, lineHeight: 20 }}
                    value={message}
                    onChangeText={onChangeMessage}
                    onSubmitEditing={onSend}
                />
                <TouchableOpacity className="ml-2" onPress={onEmoji}>
                    <Ionicons name="happy-outline" size={28} color="#666" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
