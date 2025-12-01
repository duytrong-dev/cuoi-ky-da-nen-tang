import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export interface Review {
    id: number;
    username: string;
    rating: number;
    helpful: number;
    variant: string;
    comment?: string;
    color?: string;
    quality?: string;
    images?: string[];
    hasVideo?: boolean;
    videoDuration?: string;
}

interface ReviewItemProps {
    review: Review;
}

export default function ReviewItem({ review }: ReviewItemProps) {
    return (
        <View className="mb-4 pb-4 border-b border-gray-100">
            <View className="flex-row items-center justify-between mb-2">
                <View className="flex-row items-center flex-1">
                    <View className="w-6 h-6 rounded-full bg-teal-500 items-center justify-center">
                        <Ionicons name="checkmark" size={14} color="white" />
                    </View>
                    <Text className="text-sm font-medium text-gray-800 ml-2">{review.username}</Text>
                </View>
                <View className="flex-row items-center">
                    <Ionicons name="thumbs-up-outline" size={14} color="#999" />
                    <Text className="text-xs text-gray-500 ml-1">Hữu ích ({review.helpful})</Text>
                </View>
            </View>

            <View className="flex-row mb-2">
                {[...Array(review.rating)].map((_, i) => (
                    <Ionicons key={i} name="star" size={12} color="#FFD700" />
                ))}
            </View>

            <Text className="text-xs text-gray-500 mb-2">Phân loại: {review.variant}</Text>

            {review.comment && (
                <Text className="text-sm text-gray-800 mb-3 leading-5">{review.comment}</Text>
            )}

            {review.color && (
                <Text className="text-xs text-gray-600 mb-1">Bao bì/Mẫu mã: {review.color}</Text>
            )}
            {review.quality && (
                <Text className="text-xs text-gray-600 mb-3">Chất lượng sản phẩm: {review.quality}</Text>
            )}

            {review.images && (
                <View className="flex-row">
                    {review.images.map((img, idx) => (
                        <TouchableOpacity key={idx} className="mr-2 relative">
                            <Image
                                source={{ uri: img }}
                                style={{ width: 80, height: 80 }}
                                className="rounded"
                            />
                            {review.hasVideo && idx === 0 && (
                                <View className="absolute inset-0 items-center justify-center">
                                    <View className="bg-black/60 rounded-full p-1.5">
                                        <Ionicons name="play" size={16} color="white" />
                                    </View>
                                    <View className="absolute bottom-1 left-1 bg-black/70 px-1.5 py-0.5 rounded">
                                        <Text className="text-white text-xs">{review.videoDuration}</Text>
                                    </View>
                                </View>
                            )}
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
}
