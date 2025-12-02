import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

interface EmptyBannerStateProps {
    message?: string;
}

export function EmptyBannerState({ message = 'Chưa có banner nào' }: EmptyBannerStateProps) {
    return (
        <View className="items-center justify-center py-20">
            <Ionicons name="image-outline" size={64} color="#d1d5db" />
            <Text className="text-gray-400 mt-4">{message}</Text>
        </View>
    );
}
