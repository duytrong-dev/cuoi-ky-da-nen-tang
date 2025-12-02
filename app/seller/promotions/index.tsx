import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface Promotion {
    id: string;
    code: string;
    discount: number;
    type: 'percentage' | 'fixed';
    minOrder: number;
    maxDiscount?: number;
    usageLimit: number;
    used: number;
    startDate: string;
    endDate: string;
    active: boolean;
}

const MOCK_PROMOTIONS: Promotion[] = [
    {
        id: '1',
        code: 'SALE50',
        discount: 50000,
        type: 'fixed',
        minOrder: 200000,
        usageLimit: 100,
        used: 45,
        startDate: '01/12/2025',
        endDate: '31/12/2025',
        active: true,
    },
    {
        id: '2',
        code: 'DISCOUNT20',
        discount: 20,
        type: 'percentage',
        minOrder: 100000,
        maxDiscount: 100000,
        usageLimit: 50,
        used: 12,
        startDate: '01/12/2025',
        endDate: '15/12/2025',
        active: true,
    },
];

export default function PromotionsManagement() {
    const [promotions, setPromotions] = useState<Promotion[]>(MOCK_PROMOTIONS);
    const [showAddForm, setShowAddForm] = useState(false);
    const [newCode, setNewCode] = useState('');
    const [newDiscount, setNewDiscount] = useState('');

    const togglePromotionStatus = (id: string) => {
        setPromotions(promotions.map(promo =>
            promo.id === id ? { ...promo, active: !promo.active } : promo
        ));
    };

    const deletePromotion = (id: string) => {
        Alert.alert(
            'Xác nhận',
            'Bạn có chắc muốn xóa mã khuyến mãi này?',
            [
                { text: 'Hủy', style: 'cancel' },
                {
                    text: 'Xóa',
                    style: 'destructive',
                    onPress: () => setPromotions(promotions.filter(p => p.id !== id)),
                },
            ]
        );
    };

    const renderPromotion = ({ item }: { item: Promotion }) => (
        <View className="bg-white rounded-lg p-4 mb-3 shadow-sm">
            <View className="flex-row items-start justify-between mb-3">
                <View className="flex-1">
                    <View className="flex-row items-center mb-2">
                        <View className="bg-secondary/10 px-3 py-1 rounded">
                            <Text className="text-secondary font-bold">{item.code}</Text>
                        </View>
                        <View className={`ml-2 px-2 py-1 rounded ${item.active ? 'bg-green-100' : 'bg-gray-100'}`}>
                            <Text className={`text-xs ${item.active ? 'text-green-600' : 'text-gray-600'}`}>
                                {item.active ? 'Đang hoạt động' : 'Đã tắt'}
                            </Text>
                        </View>
                    </View>
                    <Text className="text-base font-semibold text-gray-800 mb-1">
                        Giảm {item.type === 'percentage' ? `${item.discount}%` : `${item.discount.toLocaleString('vi-VN')}đ`}
                    </Text>
                    {item.type === 'percentage' && item.maxDiscount && (
                        <Text className="text-sm text-gray-500">
                            Tối đa {item.maxDiscount.toLocaleString('vi-VN')}đ
                        </Text>
                    )}
                </View>
            </View>

            <View className="flex-row items-center mb-2">
                <Ionicons name="cart-outline" size={14} color="#6b7280" />
                <Text className="text-sm text-gray-600 ml-2">
                    Đơn tối thiểu: {item.minOrder.toLocaleString('vi-VN')}đ
                </Text>
            </View>

            <View className="flex-row items-center mb-2">
                <Ionicons name="people-outline" size={14} color="#6b7280" />
                <Text className="text-sm text-gray-600 ml-2">
                    Đã dùng: {item.used}/{item.usageLimit}
                </Text>
            </View>

            <View className="flex-row items-center mb-3">
                <Ionicons name="calendar-outline" size={14} color="#6b7280" />
                <Text className="text-sm text-gray-600 ml-2">
                    {item.startDate} - {item.endDate}
                </Text>
            </View>

            <View className="flex-row pt-3 border-t border-gray-100">
                <TouchableOpacity
                    onPress={() => togglePromotionStatus(item.id)}
                    className="flex-1 flex-row items-center justify-center py-2 border border-gray-300 rounded-lg mr-2"
                >
                    <Ionicons
                        name={item.active ? 'eye-off-outline' : 'eye-outline'}
                        size={18}
                        color="#6b7280"
                    />
                    <Text className="text-gray-700 ml-1 font-medium">
                        {item.active ? 'Tắt' : 'Bật'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => deletePromotion(item.id)}
                    className="flex-1 flex-row items-center justify-center py-2 border border-red-300 rounded-lg"
                >
                    <Ionicons name="trash-outline" size={18} color="#ef4444" />
                    <Text className="text-red-500 ml-1 font-medium">Xóa</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View className="flex-1 bg-gray-50">
            <FlatList
                data={promotions}
                renderItem={renderPromotion}
                keyExtractor={item => item.id}
                contentContainerStyle={{ padding: 16 }}
                ListHeaderComponent={
                    showAddForm ? (
                        <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                            <Text className="text-base font-semibold text-gray-800 mb-3">
                                Tạo mã khuyến mãi mới
                            </Text>
                            <TextInput
                                className="border border-gray-300 rounded-lg px-3 py-2 text-base mb-3"
                                placeholder="Mã khuyến mãi (VD: SALE50)"
                                value={newCode}
                                onChangeText={setNewCode}
                                autoCapitalize="characters"
                            />
                            <TextInput
                                className="border border-gray-300 rounded-lg px-3 py-2 text-base mb-3"
                                placeholder="Giá trị giảm"
                                value={newDiscount}
                                onChangeText={setNewDiscount}
                                keyboardType="numeric"
                            />
                            <View className="flex-row">
                                <TouchableOpacity
                                    onPress={() => {
                                        setShowAddForm(false);
                                        setNewCode('');
                                        setNewDiscount('');
                                    }}
                                    className="flex-1 py-2 border border-gray-300 rounded-lg mr-2"
                                >
                                    <Text className="text-center text-gray-700 font-medium">Hủy</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        Alert.alert('Thành công', 'Đã tạo mã khuyến mãi mới');
                                        setShowAddForm(false);
                                    }}
                                    className="flex-1 py-2 bg-secondary rounded-lg ml-2"
                                >
                                    <Text className="text-center text-white font-medium">Tạo</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : null
                }
            />

            {!showAddForm && (
                <TouchableOpacity
                    onPress={() => setShowAddForm(true)}
                    className="absolute bottom-6 right-6 bg-secondary w-14 h-14 rounded-full items-center justify-center shadow-lg"
                    style={{ elevation: 5 }}
                >
                    <Ionicons name="add" size={28} color="white" />
                </TouchableOpacity>
            )}
        </View>
    );
}
