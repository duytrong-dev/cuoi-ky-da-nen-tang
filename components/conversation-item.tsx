import React from "react";
import {
    Image,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export interface Conversation {
    id: string;
    shopName: string;
    shopAvatar: string;
    badge: string | null;
    lastMessage: string;
    date: string;
    isOnline: boolean;
}

interface ConversationItemProps {
    conversation: Conversation;
    onPress: () => void;
}

export default function ConversationItem({ conversation: item, onPress }: ConversationItemProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="flex-row items-center px-4 py-3 bg-white border-b border-gray-100"
        >
            {/* Avatar with Badge */}
            <View className="relative mr-3">
                <Image
                    source={{ uri: item.shopAvatar }}
                    className="w-16 aspect-square rounded-full"
                />
                {item.badge && (
                    <View className="absolute -bottom-1 left-0 right-0 bg-primary px-1 py-0.5 rounded-sm">
                        <Text className="text-white text-[8px] font-bold text-center">
                            {item.badge}
                        </Text>
                    </View>
                )}
                {item.isOnline && (
                    <View className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                )}
            </View>

            {/* Content */}
            <View className="flex-1">
                <Text className="text-base font-medium text-gray-800 mb-1">
                    {item.shopName}
                </Text>
                <Text className="text-sm text-gray-500" numberOfLines={1}>
                    {item.lastMessage}
                </Text>
            </View>

            {/* Date */}
            <Text className="text-sm text-gray-400 ml-2">{item.date}</Text>
        </TouchableOpacity>
    );
}
