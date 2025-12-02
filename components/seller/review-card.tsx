import { Ionicons } from '@expo/vector-icons';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StarRating } from './star-rating';

export interface Review {
    id: string;
    customerName: string;
    rating: number;
    comment: string;
    productName: string;
    date: string;
    replied: boolean;
}

interface ReviewCardProps {
    review: Review;
    isReplying: boolean;
    replyText: string;
    onReplyTextChange: (text: string) => void;
    onStartReply: () => void;
    onCancelReply: () => void;
    onSubmitReply: () => void;
}

export function ReviewCard({
    review,
    isReplying,
    replyText,
    onReplyTextChange,
    onStartReply,
    onCancelReply,
    onSubmitReply,
}: ReviewCardProps) {
    return (
        <View className="bg-white rounded-lg p-4 mb-3 shadow-sm">
            <View className="flex-row items-start justify-between mb-2">
                <View className="flex-1">
                    <Text className="text-base font-semibold text-gray-800 mb-1">
                        {review.customerName}
                    </Text>
                    <StarRating rating={review.rating} />
                </View>
                <Text className="text-xs text-gray-500">{review.date}</Text>
            </View>

            <Text className="text-sm text-gray-600 mb-2">{review.productName}</Text>
            <Text className="text-sm text-gray-800 mb-3">{review.comment}</Text>

            {review.replied ? (
                <View className="bg-gray-50 p-3 rounded-lg">
                    <Text className="text-xs text-gray-500 mb-1">Phản hồi của shop:</Text>
                    <Text className="text-sm text-gray-700">
                        Cảm ơn bạn đã tin tưởng và ủng hộ shop!
                    </Text>
                </View>
            ) : isReplying ? (
                <View>
                    <TextInput
                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm mb-2"
                        placeholder="Nhập phản hồi của bạn..."
                        value={replyText}
                        onChangeText={onReplyTextChange}
                        multiline
                        numberOfLines={3}
                        textAlignVertical="top"
                        style={{ fontSize: 16, lineHeight: 20 }}
                    />
                    <View className="flex-row">
                        <TouchableOpacity
                            onPress={onCancelReply}
                            className="flex-1 py-2 border border-gray-300 rounded-lg mr-2"
                        >
                            <Text className="text-center text-gray-700 font-medium">Hủy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={onSubmitReply}
                            className="flex-1 py-2 bg-secondary rounded-lg ml-2"
                        >
                            <Text className="text-center text-white font-medium">Gửi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <TouchableOpacity
                    onPress={onStartReply}
                    className="flex-row items-center justify-center py-2 border border-secondary rounded-lg"
                >
                    <Ionicons name="chatbubble-outline" size={16} color="#EE4D2D" />
                    <Text className="text-secondary font-medium ml-2">Phản hồi</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}
