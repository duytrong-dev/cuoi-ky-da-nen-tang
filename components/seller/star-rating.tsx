import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

interface StarRatingProps {
    rating: number;
    size?: number;
}

export function StarRating({ rating, size = 16 }: StarRatingProps) {
    return (
        <View className="flex-row">
            {[1, 2, 3, 4, 5].map(star => (
                <Ionicons
                    key={star}
                    name={star <= rating ? 'star' : 'star-outline'}
                    size={size}
                    color="#f59e0b"
                />
            ))}
        </View>
    );
}
