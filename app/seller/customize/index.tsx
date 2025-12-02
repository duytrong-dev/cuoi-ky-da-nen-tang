import React, { useState } from 'react';
import { Alert, ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';

export default function CustomizeTheme() {
    const [primaryColor, setPrimaryColor] = useState('#EE4D2D');
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [showBanner, setShowBanner] = useState(true);
    const [showCategories, setShowCategories] = useState(true);
    const [showFlashSale, setShowFlashSale] = useState(true);

    const handleSave = () => {
        Alert.alert('Thành công', 'Đã lưu cài đặt giao diện');
    };

    return (
        <ScrollView className="flex-1 bg-gray-50">
            <View className="p-4">
                {/* Color Theme */}
                <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                    <Text className="text-lg font-bold text-gray-800 mb-4">
                        Màu chủ đạo
                    </Text>

                    <TouchableOpacity
                        onPress={() => setShowColorPicker(!showColorPicker)}
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
                                onColorChange={setPrimaryColor}
                                thumbSize={30}
                                sliderSize={30}
                                noSnap={true}
                                row={false}
                            />
                        </View>
                    )}
                </View>

                {/* Layout Options */}
                <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                    <Text className="text-lg font-bold text-gray-800 mb-4">
                        Tùy chỉnh Layout
                    </Text>

                    <View className="flex-row items-center justify-between py-3 border-b border-gray-100">
                        <View className="flex-1">
                            <Text className="text-base text-gray-800 font-medium">
                                Hiển thị Banner
                            </Text>
                            <Text className="text-sm text-gray-500 mt-1">
                                Banner quảng cáo ở đầu trang
                            </Text>
                        </View>
                        <Switch
                            value={showBanner}
                            onValueChange={setShowBanner}
                            trackColor={{ false: '#d1d5db', true: '#FED7D7' }}
                            thumbColor={showBanner ? '#EE4D2D' : '#f4f3f4'}
                        />
                    </View>

                    <View className="flex-row items-center justify-between py-3 border-b border-gray-100">
                        <View className="flex-1">
                            <Text className="text-base text-gray-800 font-medium">
                                Hiển thị Danh mục
                            </Text>
                            <Text className="text-sm text-gray-500 mt-1">
                                Grid danh mục sản phẩm
                            </Text>
                        </View>
                        <Switch
                            value={showCategories}
                            onValueChange={setShowCategories}
                            trackColor={{ false: '#d1d5db', true: '#FED7D7' }}
                            thumbColor={showCategories ? '#EE4D2D' : '#f4f3f4'}
                        />
                    </View>

                    <View className="flex-row items-center justify-between py-3">
                        <View className="flex-1">
                            <Text className="text-base text-gray-800 font-medium">
                                Hiển thị Flash Sale
                            </Text>
                            <Text className="text-sm text-gray-500 mt-1">
                                Section sản phẩm giảm giá
                            </Text>
                        </View>
                        <Switch
                            value={showFlashSale}
                            onValueChange={setShowFlashSale}
                            trackColor={{ false: '#d1d5db', true: '#FED7D7' }}
                            thumbColor={showFlashSale ? '#EE4D2D' : '#f4f3f4'}
                        />
                    </View>
                </View>

                {/* Preview */}
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

                {/* Save Button */}
                <TouchableOpacity
                    onPress={handleSave}
                    className="bg-secondary py-4 rounded-lg mb-6"
                >
                    <Text className="text-center text-white font-semibold text-base">
                        Lưu cài đặt
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
