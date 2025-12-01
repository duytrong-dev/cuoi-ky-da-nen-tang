import { Ionicons } from "@expo/vector-icons";
import { VideoPlayer, VideoView } from "expo-video";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface VideoCardProps {
    player: VideoPlayer;
    viewCount: string;
    onPress?: () => void;
}

export default function VideoCard({ player, viewCount, onPress }: VideoCardProps) {
    return (
        <TouchableOpacity
            className="flex-1 h-44 bg-gray-200 rounded-md mr-1 relative overflow-hidden"
            onPress={onPress}
        >
            {/* View Count Badge */}
            <View className="absolute top-1 left-1 flex-row items-center z-10">
                <Ionicons name="play" size={8} color="white" />
                <Text className="text-white text-sm font-bold ml-0.5">{viewCount}</Text>
            </View>

            {/* Video */}
            <VideoView
                player={player}
                style={{ width: "100%", height: "100%" }}
                contentFit="cover"
                nativeControls={false}
            />
        </TouchableOpacity>
    );
}
