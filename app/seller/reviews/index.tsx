import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface Review {
    id: string;
    customerName: string;
    rating: number;
    comment: string;
    productName: string;
    date: string;
    replied: boolean;
}

const MOCK_REVIEWS: Review[] = [
    {
        id: '1',
        customerName: 'Nguyễn Văn A',
        rating: 5,
        comment: 'Sản phẩm rất tốt, giao hàng nhanh!',
        productName: 'Áo thun nam basic',
        date: '02/12/2025',
        replied: false,
    },
    {
        id: '2',
        customerName: 'Trần Thị B',
        rating: 4,
        comment: 'Chất lượng ổn, đóng gói cẩn thận',
        productName: 'Quần jean nữ',
        date: '01/12/2025',
        replied: true,
    },
];

export default function ReviewsManagement() {
    const [reviews, setReviews] = useState<Review[]>(MOCK_REVIEWS);
    const [replyingTo, setReplyingTo] = useState<string | null>(null);
    const [replyText, setReplyText] = useState('');

    const handleReply = (reviewId: string) => {
        if (!replyText.trim()) return;

        setReviews(reviews.map(review =>
            review.id === reviewId ? { ...review, replied: true } : review
        ));
        setReplyingTo(null);
        setReplyText('');
    };

    const renderStars = (rating: number) => {
        return (
            <View className="flex-row">
                {[1, 2, 3, 4, 5].map(star => (
                    <Ionicons
                        key={star}
                        name={star <= rating ? 'star' : 'star-outline'}
                        size={16}
                        color="#f59e0b"
                    />
                ))}
            </View>
        );
    };

    const renderReview = ({ item }: { item: Review }) => (
        <View className="bg-white rounded-lg p-4 mb-3 shadow-sm">
            <View className="flex-row items-start justify-between mb-2">
                <View className="flex-1">
                    <Text className="text-base font-semibold text-gray-800 mb-1">
                        {item.customerName}
                    </Text>
                    {renderStars(item.rating)}
                </View>
                <Text className="text-xs text-gray-500">{item.date}</Text>
            </View>

            <Text className="text-sm text-gray-600 mb-2">{item.productName}</Text>
            <Text className="text-sm text-gray-800 mb-3">{item.comment}</Text>

            {item.replied ? (
                <View className="bg-gray-50 p-3 rounded-lg">
                    <Text className="text-xs text-gray-500 mb-1">Phản hồi của shop:</Text>
                    <Text className="text-sm text-gray-700">
                        Cảm ơn bạn đã tin tưởng và ủng hộ shop!
                    </Text>
                </View>
            ) : replyingTo === item.id ? (
                <View>
                    <TextInput
                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm mb-2"
                        placeholder="Nhập phản hồi của bạn..."
                        value={replyText}
                        onChangeText={setReplyText}
                        multiline
                        numberOfLines={3}
                        textAlignVertical="top"
                    />
                    <View className="flex-row">
                        <TouchableOpacity
                            onPress={() => {
                                setReplyingTo(null);
                                setReplyText('');
                            }}
                            className="flex-1 py-2 border border-gray-300 rounded-lg mr-2"
                        >
                            <Text className="text-center text-gray-700 font-medium">Hủy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleReply(item.id)}
                            className="flex-1 py-2 bg-secondary rounded-lg ml-2"
                        >
                            <Text className="text-center text-white font-medium">Gửi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <TouchableOpacity
                    onPress={() => setReplyingTo(item.id)}
                    className="flex-row items-center justify-center py-2 border border-secondary rounded-lg"
                >
                    <Ionicons name="chatbubble-outline" size={16} color="#EE4D2D" />
                    <Text className="text-secondary font-medium ml-2">Phản hồi</Text>
                </TouchableOpacity>
            )}
        </View>
    );

    return (
        <View className="flex-1 bg-gray-50">
            <FlatList
                data={reviews}
                renderItem={renderReview}
                keyExtractor={item => item.id}
                contentContainerStyle={{ padding: 16 }}
                ListEmptyComponent={
                    <View className="items-center justify-center py-20">
                        <Ionicons name="star-outline" size={64} color="#d1d5db" />
                        <Text className="text-gray-400 mt-4">Chưa có đánh giá nào</Text>
                    </View>
                }
            />
        </View>
    );
}
