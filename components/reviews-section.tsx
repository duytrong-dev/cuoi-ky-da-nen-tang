import ReviewItem, { Review } from "@/components/review-item";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface ReviewsSectionProps {
    reviews: Review[];
    averageRating?: number;
}

export default function ReviewsSection({ reviews, averageRating = 5 }: ReviewsSectionProps) {
    return (
        <View className="px-4 py-4 bg-white border-t-8 border-gray-100">
            <View className="flex-row items-center justify-between mb-4">
                <View className="flex-row items-center">
                    <Text className="text-xl font-bold text-gray-800">{averageRating}</Text>
                    <Ionicons name="star" size={18} color="#FFD700" style={{ marginLeft: 4 }} />
                    <Text className="text-base text-black ml-2">Đánh Giá Sản Phẩm</Text>
                </View>
                <TouchableOpacity className="flex-row items-center">
                    <Text className="text-sm text-black">Tất cả</Text>
                    <Ionicons name="chevron-forward" size={16} color="black" style={{ marginLeft: 2 }} />
                </TouchableOpacity>
            </View>

            {/* Review Items */}
            {reviews.map((review) => (
                <ReviewItem key={review.id} review={review} />
            ))}
        </View>
    );
}
