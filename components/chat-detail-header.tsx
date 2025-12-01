import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface ChatDetailHeaderProps {
    shopName: string;
    shopAvatar: string;
    badge?: string;
    isOnline?: boolean;
    onMenuPress?: () => void;
}

export default function ChatDetailHeader({
    shopName,
    shopAvatar,
    badge = "Yêu thích",
    isOnline = true,
    onMenuPress,
}: ChatDetailHeaderProps) {
    const router = useRouter();

    return (
        <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
            {/* Left: Back button */}
            <TouchableOpacity
                onPress={() => router.back()}
                className="mr-3"
            >
                <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>

            {/* Center: Shop info */}
            <View className="flex-1 flex-row items-center">
                {/* Avatar */}
                <Image
                    source={{ uri: shopAvatar }}
                    className="w-10 h-10 rounded-full"
                />

                {/* Shop name and status */}
                <View className="ml-3 flex-1">
                    <View className="flex-row items-center">
                        <Text className="text-base font-medium text-gray-800" numberOfLines={1}>
                            {shopName}
                        </Text>
                        {badge && (
                            <View className="bg-primary px-2 py-0.5 rounded-sm ml-2">
                                <Text className="text-white text-xs font-medium">{badge}</Text>
                            </View>
                        )}
                    </View>
                    <View className="flex-row items-center mt-0.5">
                        {isOnline && (
                            <>
                                <View className="w-2 h-2 rounded-full bg-green-500 mr-1" />
                                <Text className="text-xs text-green-600">Trực tuyến</Text>
                            </>
                        )}
                    </View>
                </View>
            </View>

            {/* Right: Menu button */}
            <TouchableOpacity
                onPress={onMenuPress}
                className="ml-3"
            >
                <Ionicons name="ellipsis-vertical" size={20} color="#666" />
            </TouchableOpacity>
        </View>
    );
}
