import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";

type MessageType = "date" | "system" | "product" | "buyer" | "seller" | "image";

type Product = {
    image: string;
    name: string;
    price: string;
    originalPrice: string;
};

export type Message = {
    id: string;
    type: MessageType;
    text?: string;
    link?: string;
    product?: Product;
    timestamp?: string;
    isRead?: boolean;
    status?: string;
    image?: string;
};

type ChatMessageProps = {
    message: Message;
};

export default function ChatMessage({ message }: Readonly<ChatMessageProps>) {
    const msg = message;

    if (msg.type === "date") {
        return (
            <View className="items-center my-2">
                <View className="bg-gray-200 px-3 py-1 rounded-full">
                    <Text className="text-sm text-gray-600">{msg.text}</Text>
                </View>
            </View>
        );
    }

    if (msg.type === "system") {
        return (
            <View className="px-4 my-2">
                <View className="bg-amber-50 p-3 rounded-md border border-amber-200">
                    <View className="flex-row">
                        <Ionicons name="warning-outline" size={16} color="#F59E0B" />
                        <Text className="flex-1 text-sm text-gray-700 ml-2 leading-5">
                            {msg.text}
                        </Text>
                    </View>
                    {msg.link && (
                        <Text className="text-sm text-blue-600 mt-2">{msg.link}</Text>
                    )}
                </View>
            </View>
        );
    }

    if (msg.type === "product") {
        return (
            <View className="px-4 my-2">
                <Text className="text-sm text-gray-600 mb-2">{msg.text}</Text>
                <View className="bg-white border border-gray-200 rounded-md p-2 flex-row">
                    <Image
                        source={{ uri: msg.product?.image }}
                        className="w-16 h-16 rounded"
                    />
                    <View className="flex-1 ml-2">
                        <Text className="text- text-gray-800" numberOfLines={2}>
                            {msg.product?.name}
                        </Text>
                        <View className="flex-row items-center mt-1">
                            <Text className="text-sm font-medium text-primary">
                                {msg.product?.price}
                            </Text>
                            <Text className="text-sm text-gray-400 line-through ml-2">
                                {msg.product?.originalPrice}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    if (msg.type === "buyer") {
        return (
            <View className="px-4 my-1 flex-row justify-end">
                <View className="max-w-[75%]">
                    <View className="bg-[#D1F4CC] px-3 py-2 rounded-lg">
                        <Text className="text-lg text-gray-800">{msg.text}</Text>
                    </View>
                    <View className="flex-row items-center justify-end mt-1">
                        <Text className="text-sm text-gray-400">{msg.timestamp}</Text>
                        {msg.isRead && (
                            <Ionicons name="checkmark-done" size={14} color="#4CAF50" className="ml-1" />
                        )}
                    </View>
                </View>
            </View>
        );
    }

    if (msg.type === "seller") {
        return (
            <View className="px-4 my-1">
                <View className="max-w-[75%]">
                    <View className="bg-white border border-gray-200 px-3 py-2 rounded-lg">
                        <Text className="text-lg text-gray-800">{msg.text}</Text>
                    </View>
                    <View className="flex-row items-center mt-1">
                        {msg.status && (
                            <Text className="text-sm text-gray-400">{msg.status}</Text>
                        )}
                        <Text className="text-sm text-gray-400 ml-2">{msg.timestamp}</Text>
                    </View>
                </View>
            </View>
        );
    }

    if (msg.type === "image") {
        return (
            <View className="px-4 my-1">
                <View className="max-w-[75%] bg-white border border-gray-200 px-3 py-2 rounded-lg">
                    <Image
                        source={{ uri: msg.image }}
                        className="w-48 h-48 rounded-lg"
                        resizeMode="cover"
                    />
                    <Text className="text-lg text-gray-800 mt-1">{msg.text}</Text>
                </View>
                <Text className="text-sm text-gray-400 mt-1">{msg.timestamp}</Text>
            </View>
        );
    }

    return null;
}
