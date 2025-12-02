import { Text, View } from 'react-native';

interface ThemePreviewSectionProps {
    primaryColor: string;
}

export function ThemePreviewSection({ primaryColor }: ThemePreviewSectionProps) {
    return (
        <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
            <Text className="text-lg font-bold text-gray-800 mb-3">
                Xem trước
            </Text>
            <View className="border border-gray-200 rounded-lg p-4">
                <View
                    className="h-24 rounded-lg mb-3"
                    style={{ backgroundColor: primaryColor }}
                >
                    <Text className="text-white text-center mt-10 font-semibold">
                        Preview Shop Theme
                    </Text>
                </View>
                <Text className="text-sm text-gray-600 text-center">
                    Màu chủ đạo sẽ được áp dụng cho buttons, highlights và accents
                </Text>
            </View>
        </View>
    );
}
