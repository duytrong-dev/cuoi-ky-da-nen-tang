import React from "react";
import { Text, View } from "react-native";

interface ProductTitleSectionProps {
    title: string;
    hasBadge?: boolean;
}

export default function ProductTitleSection({ title, hasBadge = true }: ProductTitleSectionProps) {
    return (
        <View className="px-4 py-3 bg-white border-t border-gray-100">
            <View className="flex-row items-start">
                {hasBadge && (
                    <View className="bg-primary px-1.5 py-0.5 rounded mr-2 mt-0.5">
                        <Text className="text-white text-xs font-bold">Yêu thích+</Text>
                    </View>
                )}
                <Text className="text-base font-normal text-gray-800 flex-1 leading-5">
                    {title}
                </Text>
            </View>
        </View>
    );
}
