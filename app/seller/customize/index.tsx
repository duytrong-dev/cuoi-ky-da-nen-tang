import { ColorThemeSection } from '@/components/seller/color-theme-section';
import { LayoutOptionsSection } from '@/components/seller/layout-options-section';
import { SaveButton } from '@/components/seller/save-button';
import { ThemePreviewSection } from '@/components/seller/theme-preview-section';
import { useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';

export default function CustomizeTheme() {
    const [primaryColor, setPrimaryColor] = useState('#EE4D2D');
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [layoutOptions, setLayoutOptions] = useState({
        showBanner: true,
        showCategories: true,
        showFlashSale: true,
    });

    const handleLayoutToggle = (key: string, value: boolean) => {
        setLayoutOptions(prev => ({ ...prev, [key]: value }));
    };

    const handleSave = () => {
        Alert.alert('Thành công', 'Đã lưu cài đặt giao diện');
    };

    const layoutOptionsList = [
        {
            key: 'showBanner',
            title: 'Hiển thị Banner',
            description: 'Banner quảng cáo ở đầu trang',
            value: layoutOptions.showBanner,
        },
        {
            key: 'showCategories',
            title: 'Hiển thị Danh mục',
            description: 'Grid danh mục sản phẩm',
            value: layoutOptions.showCategories,
        },
        {
            key: 'showFlashSale',
            title: 'Hiển thị Flash Sale',
            description: 'Section sản phẩm giảm giá',
            value: layoutOptions.showFlashSale,
        },
    ];

    return (
        <ScrollView className="flex-1 bg-gray-50">
            <View className="p-4">
                <ColorThemeSection
                    primaryColor={primaryColor}
                    onColorChange={setPrimaryColor}
                    showColorPicker={showColorPicker}
                    onToggleColorPicker={() => setShowColorPicker(!showColorPicker)}
                />

                <LayoutOptionsSection
                    options={layoutOptionsList}
                    onToggle={handleLayoutToggle}
                />

                <ThemePreviewSection primaryColor={primaryColor} />

                <SaveButton onPress={handleSave} />
            </View>
        </ScrollView>
    );
}
