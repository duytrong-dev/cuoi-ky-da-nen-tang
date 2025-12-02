import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View, useColorScheme } from 'react-native';

interface MenuItemProps {
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
    subtitle: string;
    onPress: () => void;
    color?: string;
}

export function MenuItem({ icon, title, subtitle, onPress, color }: MenuItemProps) {
    const colorScheme = useColorScheme();
    const iconColor = color || Colors[colorScheme ?? 'light'].secondary;

    return (
        <TouchableOpacity
            onPress={onPress}
            className="bg-white rounded-lg p-4 mb-3 shadow-sm flex-row items-center"
        >
            <View className="w-12 h-12 rounded-full items-center justify-center mr-4" style={{ backgroundColor: `${iconColor}20` }}>
                <Ionicons name={icon} size={24} color={iconColor} />
            </View>
            <View className="flex-1">
                <Text className="text-base font-semibold text-gray-800">{title}</Text>
                <Text className="text-sm text-gray-500 mt-0.5">{subtitle}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
        </TouchableOpacity>
    );
}
