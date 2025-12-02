import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

interface EmptyOrderStateProps {
    message?: string;
}

export function EmptyOrderState({ message = 'Không có đơn hàng' }: EmptyOrderStateProps) {
    return (
        <View className="items-center justify-center py-20">
            <Ionicons name="receipt-outline" size={64} color="#d1d5db" />
            <Text className="text-gray-400 mt-4">{message}</Text>
        </View>
    );
}
