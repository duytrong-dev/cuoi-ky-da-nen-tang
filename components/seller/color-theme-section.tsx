import { Text, TouchableOpacity, View } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';

interface ColorThemeSectionProps {
    primaryColor: string;
    onColorChange: (color: string) => void;
    showColorPicker: boolean;
    onToggleColorPicker: () => void;
}

export function ColorThemeSection({
    primaryColor,
    onColorChange,
    showColorPicker,
    onToggleColorPicker
}: ColorThemeSectionProps) {
    return (
        <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
            <Text className="text-lg font-bold text-gray-800 mb-4">
                Màu chủ đạo
            </Text>

            <TouchableOpacity
                onPress={onToggleColorPicker}
                className="flex-row items-center justify-between p-3 border border-gray-300 rounded-lg"
            >
                <Text className="text-base text-gray-700">Chọn màu</Text>
                <View
                    className="w-10 h-10 rounded-lg border border-gray-300"
                    style={{ backgroundColor: primaryColor }}
                />
            </TouchableOpacity>

            {showColorPicker && (
                <View className="mt-4" style={{ height: 250 }}>
                    <ColorPicker
                        color={primaryColor}
                        onColorChange={onColorChange}
                        thumbSize={30}
                        sliderSize={30}
                        noSnap={true}
                        row={false}
                    />
                </View>
            )}
        </View>
    );
}
