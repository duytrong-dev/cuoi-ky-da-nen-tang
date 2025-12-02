import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

interface EmptyReviewStateProps {
    message?: string;
}

export function EmptyReviewState({ message = 'Chưa có đánh giá nào' }: EmptyReviewStateProps) {
    return (
        <View className="items-center justify-center py-20">
            <Ionicons name="star-outline" size={64} color="#d1d5db" />
            <Text className="text-gray-400 mt-4">{message}</Text>
        </View>
    );
}
