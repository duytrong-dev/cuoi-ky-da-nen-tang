import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

interface AddBannerButtonProps {
    onPress: () => void;
}

export function AddBannerButton({ onPress }: AddBannerButtonProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="absolute bottom-6 right-6 bg-secondary w-14 h-14 rounded-full items-center justify-center shadow-lg"
            style={{ elevation: 5 }}
        >
            <Ionicons name="add" size={28} color="white" />
        </TouchableOpacity>
    );
}
