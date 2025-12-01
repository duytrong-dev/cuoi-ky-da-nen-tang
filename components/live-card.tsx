import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface LiveCardProps {
    imageUrl: string;
    label: string;
    onPress?: () => void;
}

export default function LiveCard({ imageUrl, label, onPress }: LiveCardProps) {
    return (
        <TouchableOpacity
            className="flex-1 h-44 bg-gray-200 rounded-md mr-1 relative overflow-hidden"
            onPress={onPress}
        >
            {/* LIVE Badge */}
            <View className="absolute top-1 left-1 bg-white px-1 rounded-sm z-10">
                <Text className="text-red-500 text-xs font-bold">LIVE</Text>
            </View>

            {/* Image */}
            <Image
                source={{ uri: imageUrl }}
                className="w-full h-full"
                resizeMode="cover"
            />

            {/* Label */}
            <Text className="absolute bottom-1 left-1 text-white text-sm font-bold shadow-sm">
                {label}
            </Text>
        </TouchableOpacity>
    );
}
