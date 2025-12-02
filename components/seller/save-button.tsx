import { Text, TouchableOpacity } from 'react-native';

interface SaveButtonProps {
    onPress: () => void;
}

export function SaveButton({ onPress }: SaveButtonProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="bg-secondary py-4 rounded-lg mb-6"
        >
            <Text className="text-center text-white font-semibold text-base">
                Lưu cài đặt
            </Text>
        </TouchableOpacity>
    );
}
