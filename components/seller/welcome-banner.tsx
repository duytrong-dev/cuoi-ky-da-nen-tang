import { Text, View } from 'react-native';

interface WelcomeBannerProps {
    shopName?: string;
}

export function WelcomeBanner({ shopName = 'Shop Owner' }: WelcomeBannerProps) {
    return (
        <View className="bg-secondary p-6">
            <Text className="text-white text-2xl font-bold mb-1">Xin chào, {shopName}! 👋</Text>
            <Text className="text-white/90">Quản lý shop của bạn một cách dễ dàng</Text>
        </View>
    );
}
