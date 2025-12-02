import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Alert, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ShippingSettings() {
    const [freeShipping, setFreeShipping] = useState(false);
    const [freeShippingMin, setFreeShippingMin] = useState('500000');
    const [standardFee, setStandardFee] = useState('30000');
    const [expressFee, setExpressFee] = useState('50000');

    const handleSave = () => {
        Alert.alert('Thành công', 'Đã lưu cài đặt vận chuyển');
    };

    return (
        <ScrollView className="flex-1 bg-gray-50">
            <View className="p-4">
                {/* Free Shipping */}
                <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                    <View className="flex-row items-center justify-between mb-4">
                        <View className="flex-1">
                            <Text className="text-base font-semibold text-gray-800">
                                Miễn phí vận chuyển
                            </Text>
                            <Text className="text-sm text-gray-500 mt-1">
                                Cho đơn hàng đạt giá trị tối thiểu
                            </Text>
                        </View>
                        <Switch
                            value={freeShipping}
                            onValueChange={setFreeShipping}
                            trackColor={{ false: '#d1d5db', true: '#FED7D7' }}
                            thumbColor={freeShipping ? '#EE4D2D' : '#f4f3f4'}
                        />
                    </View>

                    {freeShipping && (
                        <View>
                            <Text className="text-sm font-medium text-gray-700 mb-2">
                                Giá trị đơn hàng tối thiểu
                            </Text>
                            <TextInput
                                className="border border-gray-300 rounded-lg px-3 py-2 text-base"
                                value={freeShippingMin}
                                onChangeText={setFreeShippingMin}
                                keyboardType="numeric"
                                placeholder="500000"
                                style={{ fontSize: 16, lineHeight: 20 }}
                            />
                            <Text className="text-xs text-gray-500 mt-1">VNĐ</Text>
                        </View>
                    )}
                </View>

                {/* Shipping Methods */}
                <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                    <Text className="text-lg font-bold text-gray-800 mb-4">
                        Phương thức vận chuyển
                    </Text>

                    {/* Standard Shipping */}
                    <View className="mb-4">
                        <View className="flex-row items-center mb-2">
                            <Ionicons name="bicycle-outline" size={20} color="#EE4D2D" />
                            <Text className="text-base font-semibold text-gray-800 ml-2">
                                Giao hàng tiêu chuẩn
                            </Text>
                        </View>
                        <Text className="text-sm text-gray-500 mb-2">
                            Thời gian: 3-5 ngày
                        </Text>
                        <TextInput
                            className="border border-gray-300 rounded-lg px-3 py-2 text-base"
                            value={standardFee}
                            onChangeText={setStandardFee}
                            keyboardType="numeric"
                            placeholder="30000"
                            style={{ fontSize: 16, lineHeight: 20 }}
                        />
                        <Text className="text-xs text-gray-500 mt-1">Phí vận chuyển (VNĐ)</Text>
                    </View>

                    {/* Express Shipping */}
                    <View>
                        <View className="flex-row items-center mb-2">
                            <Ionicons name="rocket-outline" size={20} color="#EE4D2D" />
                            <Text className="text-base font-semibold text-gray-800 ml-2">
                                Giao hàng nhanh
                            </Text>
                        </View>
                        <Text className="text-sm text-gray-500 mb-2">
                            Thời gian: 1-2 ngày
                        </Text>
                        <TextInput
                            className="border border-gray-300 rounded-lg px-3 py-2 text-base"
                            value={expressFee}
                            onChangeText={setExpressFee}
                            keyboardType="numeric"
                            placeholder="50000"
                            style={{ fontSize: 16, lineHeight: 20 }}
                        />
                        <Text className="text-xs text-gray-500 mt-1">Phí vận chuyển (VNĐ)</Text>
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
