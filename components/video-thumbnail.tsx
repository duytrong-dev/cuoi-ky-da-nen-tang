import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface VideoThumbnailProps {
    thumbnail: string;
    title: string;
    duration?: string;
}

export default function VideoThumbnail({ thumbnail, title, duration }: VideoThumbnailProps) {
    return (
        <TouchableOpacity className="mr-3 relative" style={{ width: 120, height: 180 }}>
            <Image
                source={{ uri: thumbnail }}
                style={{ width: '100%', height: '100%' }}
                className="rounded-lg"
            />
            <View className="absolute inset-0 items-center justify-center">
                <View className="bg-black/60 rounded-full p-2">
                    <Ionicons name="play" size={20} color="white" />
                </View>
            </View>
            <View className="absolute bottom-2 left-2 right-2">
                <Text className="text-white text-xs font-medium" numberOfLines={2}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
