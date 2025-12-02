import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { Text, View, useColorScheme } from 'react-native';

interface StatCardProps {
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
    value: string;
    trend?: string;
    trendUp?: boolean;
}

export function StatCard({ icon, title, value, trend, trendUp }: StatCardProps) {
    const colorScheme = useColorScheme();

    return (
        <View className="bg-white rounded-lg p-4 shadow-sm flex-1 mx-1">
            <View className="flex-row items-center justify-between mb-2">
                <Ionicons name={icon} size={24} color={Colors[colorScheme ?? 'light'].secondary} />
                {trend && (
                    <View className={`flex-row items-center ${trendUp ? 'bg-green-100' : 'bg-red-100'} px-2 py-1 rounded`}>
                        <Ionicons
                            name={trendUp ? 'trending-up' : 'trending-down'}
                            size={12}
                            color={trendUp ? '#10b981' : '#ef4444'}
                        />
                        <Text className={`text-xs ml-1 ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
                            {trend}
                        </Text>
                    </View>
                )}
            </View>
            <Text className="text-2xl font-bold text-gray-800 mb-1">{value}</Text>
            <Text className="text-sm text-gray-500">{title}</Text>
        </View>
    );
}
