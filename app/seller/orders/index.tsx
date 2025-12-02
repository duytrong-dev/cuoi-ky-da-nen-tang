import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';

interface Order {
    id: string;
    customerName: string;
    products: number;
    total: number;
    status: 'pending' | 'processing' | 'shipping' | 'completed' | 'cancelled';
    date: string;
}

const MOCK_ORDERS: Order[] = [
    {
        id: '1',
        customerName: 'Nguyễn Văn A',
        products: 3,
        total: 1200000,
        status: 'pending',
        date: '02/12/2025',
    },
    {
        id: '2',
        customerName: 'Trần Thị B',
        products: 1,
        total: 599000,
        status: 'processing',
        date: '02/12/2025',
    },
    {
        id: '3',
        customerName: 'Lê Văn C',
        products: 2,
        total: 899000,
        status: 'shipping',
        date: '01/12/2025',
    },
];

const STATUS_CONFIG = {
    pending: { label: 'Chờ xác nhận', color: 'bg-yellow-100', textColor: 'text-yellow-700' },
    processing: { label: 'Đang xử lý', color: 'bg-blue-100', textColor: 'text-blue-700' },
    shipping: { label: 'Đang giao', color: 'bg-purple-100', textColor: 'text-purple-700' },
    completed: { label: 'Hoàn thành', color: 'bg-green-100', textColor: 'text-green-700' },
    cancelled: { label: 'Đã hủy', color: 'bg-red-100', textColor: 'text-red-700' },
};

export default function OrdersManagement() {
    const [orders, setOrders] = useState<Order[]>(MOCK_ORDERS);
    const [filter, setFilter] = useState<Order['status'] | 'all'>('all');

    const filteredOrders = filter === 'all'
        ? orders
        : orders.filter(order => order.status === filter);

    const renderOrder = ({ item }: { item: Order }) => {
        const statusConfig = STATUS_CONFIG[item.status];

        return (
            <View className="bg-white rounded-lg p-4 mb-3 shadow-sm">
                <View className="flex-row items-center justify-between mb-3">
                    <Text className="text-base font-semibold text-gray-800">
                        Đơn hàng #{item.id}
                    </Text>
                    <View className={`px-3 py-1 rounded ${statusConfig.color}`}>
                        <Text className={`text-xs font-medium ${statusConfig.textColor}`}>
                            {statusConfig.label}
                        </Text>
                    </View>
                </View>

                <View className="flex-row items-center mb-2">
                    <Ionicons name="person-outline" size={16} color="#6b7280" />
                    <Text className="text-sm text-gray-600 ml-2">{item.customerName}</Text>
                </View>

                <View className="flex-row items-center mb-2">
                    <Ionicons name="cube-outline" size={16} color="#6b7280" />
                    <Text className="text-sm text-gray-600 ml-2">{item.products} sản phẩm</Text>
                </View>

                <View className="flex-row items-center mb-3">
                    <Ionicons name="calendar-outline" size={16} color="#6b7280" />
                    <Text className="text-sm text-gray-600 ml-2">{item.date}</Text>
                </View>

                <View className="flex-row items-center justify-between pt-3 border-t border-gray-100">
                    <Text className="text-base font-bold text-secondary">
                        {item.total.toLocaleString('vi-VN')}đ
                    </Text>
                    <TouchableOpacity className="bg-secondary px-4 py-2 rounded-lg">
                        <Text className="text-white font-medium">Chi tiết</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <View className="flex-1 bg-gray-50">
            {/* Filter Tabs */}
            <View className="bg-white p-2 shadow-sm">
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity
                        onPress={() => setFilter('all')}
                        className={`px-4 py-2 rounded-lg mr-2 ${filter === 'all' ? 'bg-secondary' : 'bg-gray-100'}`}
                    >
                        <Text className={`font-medium ${filter === 'all' ? 'text-white' : 'text-gray-600'}`}>
                            Tất cả
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setFilter('pending')}
                        className={`px-4 py-2 rounded-lg mr-2 ${filter === 'pending' ? 'bg-secondary' : 'bg-gray-100'}`}
                    >
                        <Text className={`font-medium ${filter === 'pending' ? 'text-white' : 'text-gray-600'}`}>
                            Chờ xác nhận
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setFilter('processing')}
                        className={`px-4 py-2 rounded-lg mr-2 ${filter === 'processing' ? 'bg-secondary' : 'bg-gray-100'}`}
                    >
                        <Text className={`font-medium ${filter === 'processing' ? 'text-white' : 'text-gray-600'}`}>
                            Đang xử lý
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setFilter('shipping')}
                        className={`px-4 py-2 rounded-lg mr-2 ${filter === 'shipping' ? 'bg-secondary' : 'bg-gray-100'}`}
                    >
                        <Text className={`font-medium ${filter === 'shipping' ? 'text-white' : 'text-gray-600'}`}>
                            Đang giao
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setFilter('completed')}
                        className={`px-4 py-2 rounded-lg ${filter === 'completed' ? 'bg-secondary' : 'bg-gray-100'}`}
                    >
                        <Text className={`font-medium ${filter === 'completed' ? 'text-white' : 'text-gray-600'}`}>
                            Hoàn thành
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            {/* Orders List */}
            <FlatList
                data={filteredOrders}
                renderItem={renderOrder}
                keyExtractor={item => item.id}
                contentContainerStyle={{ padding: 16 }}
                ListEmptyComponent={
                    <View className="items-center justify-center py-20">
                        <Ionicons name="receipt-outline" size={64} color="#d1d5db" />
                        <Text className="text-gray-400 mt-4">Không có đơn hàng</Text>
                    </View>
                }
            />
        </View>
    );
}
