import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface ReviewTag {
    label: string;
    count: number;
}

interface ReviewFilterTagsProps {
    tags?: ReviewTag[];
}

const DEFAULT_TAGS: ReviewTag[] = [
    { label: "Chất lượng tốt", count: 2 },
    { label: "Giao hàng nhanh", count: 2 },
    { label: "Sản phẩm đẹp", count: 1 },
    { label: "Giao hàng chất lượng", count: 1 },
];

export default function ReviewFilterTags({ tags = DEFAULT_TAGS }: ReviewFilterTagsProps) {
    return (
        <View className="px-4 py-3 bg-white border-t-2 border-gray-100">
            <TouchableOpacity className="flex-row items-center justify-between mb-3">
                <Text className="text-sm font-medium text-gray-800">Các đánh giá về sản phẩm khác của Shop</Text>
                <Ionicons name="chevron-forward" size={16} color="#999" />
            </TouchableOpacity>

            <View className="flex-row flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <TouchableOpacity key={index} className="bg-gray-100 px-2.5 py-1.5 rounded-full">
                        <Text className="text-xs text-gray-700">{tag.label} ({tag.count})</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}
