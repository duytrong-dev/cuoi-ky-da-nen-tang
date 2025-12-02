import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Alert, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PaymentSettings() {
    const [codEnabled, setCodEnabled] = useState(true);
    const [bankTransferEnabled, setBankTransferEnabled] = useState(true);
    const [bankName, setBankName] = useState('Vietcombank');
    const [accountNumber, setAccountNumber] = useState('1234567890');
    const [accountName, setAccountName] = useState('NGUYEN VAN A');

    const handleSave = () => {
        Alert.alert('Thành công', 'Đã lưu cài đặt thanh toán');
    };

    return (
        <ScrollView className="flex-1 bg-gray-50">
            <View className="p-4">
                {/* Payment Methods */}
                <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                    <Text className="text-lg font-bold text-gray-800 mb-4">
                        Phương thức thanh toán
                    </Text>

                    {/* COD */}
                    <View className="flex-row items-center justify-between py-3 border-b border-gray-100">
                        <View className="flex-row items-center flex-1">
                            <Ionicons name="cash-outline" size={24} color="#EE4D2D" />
                            <View className="ml-3 flex-1">
                                <Text className="text-base font-semibold text-gray-800">
                                    Thanh toán khi nhận hàng (COD)
                                </Text>
                                <Text className="text-sm text-gray-500 mt-1">
                                    Khách hàng thanh toán khi nhận hàng
                                </Text>
                            </View>
                        </View>
                        <Switch
                            value={codEnabled}
                            onValueChange={setCodEnabled}
                            trackColor={{ false: '#d1d5db', true: '#FED7D7' }}
                            thumbColor={codEnabled ? '#EE4D2D' : '#f4f3f4'}
                        />
                    </View>

                    {/* Bank Transfer */}
                    <View className="flex-row items-center justify-between py-3">
                        <View className="flex-row items-center flex-1">
                            <Ionicons name="card-outline" size={24} color="#EE4D2D" />
                            <View className="ml-3 flex-1">
                                <Text className="text-base font-semibold text-gray-800">
                                    Chuyển khoản ngân hàng
                                </Text>
                                <Text className="text-sm text-gray-500 mt-1">
                                    Khách hàng chuyển khoản trước
                                </Text>
                            </View>
                        </View>
                        <Switch
                            value={bankTransferEnabled}
                            onValueChange={setBankTransferEnabled}
                            trackColor={{ false: '#d1d5db', true: '#FED7D7' }}
                            thumbColor={bankTransferEnabled ? '#EE4D2D' : '#f4f3f4'}
                        />
                    </View>
                </View>

                {/* Bank Account Info */}
                {bankTransferEnabled && (
                    <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                        <Text className="text-lg font-bold text-gray-800 mb-4">
                            Thông tin tài khoản ngân hàng
                        </Text>

                        <View className="mb-4">
                            <Text className="text-sm font-medium text-gray-700 mb-2">
                                Ngân hàng
                            </Text>
                            <TextInput
                                className="border border-gray-300 rounded-lg px-3 py-2 text-base"
                                value={bankName}
                                onChangeText={setBankName}
                                placeholder="Vietcombank"
                                style={{ fontSize: 16, lineHeight: 20 }}
                            />
                        </View>

                        <View className="mb-4">
                            <Text className="text-sm font-medium text-gray-700 mb-2">
                                Số tài khoản
                            </Text>
                            <TextInput
                                className="border border-gray-300 rounded-lg px-3 py-2 text-base"
                                value={accountNumber}
                                onChangeText={setAccountNumber}
                                placeholder="1234567890"
                                keyboardType="numeric"
                                style={{ fontSize: 16, lineHeight: 20 }}
                            />
                        </View>

                        <View>
                            <Text className="text-sm font-medium text-gray-700 mb-2">
                                Tên tài khoản
                            </Text>
                            <TextInput
                                className="border border-gray-300 rounded-lg px-3 py-2 text-base"
                                value={accountName}
                                onChangeText={setAccountName}
                                placeholder="NGUYEN VAN A"
                                autoCapitalize="characters"
                                style={{ fontSize: 16, lineHeight: 20 }}
                            />
                        </View>
                    </View>
                )}

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
