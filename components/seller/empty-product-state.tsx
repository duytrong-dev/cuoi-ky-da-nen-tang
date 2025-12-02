import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

interface EmptyProductStateProps {
    message?: string;
}

export function EmptyProductState({ message = 'Không tìm thấy sản phẩm' }: EmptyProductStateProps) {
    return (
        <View className="items-center justify-center py-20">
            <Ionicons name="cube-outline" size={64} color="#d1d5db" />
            <Text className="text-gray-400 mt-4">{message}</Text>
        </View>
    );
}
