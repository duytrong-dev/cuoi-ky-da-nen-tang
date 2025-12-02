import React from "react";
import { Text, View } from "react-native";

interface ProductTitleSectionProps {
    title: string;
    hasBadge?: boolean;
}

export default function ProductTitleSection({ title, hasBadge = true }: ProductTitleSectionProps) {
    return (
        <View className="px-4 py-3 bg-white border-t border-gray-100">
            <View className="flex-col items-start">
                {hasBadge && (
                    <View className="bg-white border border-red-500 px-1.5 py-0.5 rounded my-2 mt-0.5">
                        <Text className="text-red-500 text-xs font-bold">Yêu thích +</Text>
                    </View>
                )}
                <Text className="text-base font-normal text-black flex-1 leading-5">
                    {title}
                </Text>
            </View>
        </View>
    );
}
