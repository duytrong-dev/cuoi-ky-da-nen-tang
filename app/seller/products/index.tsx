import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native';

interface Product {
    id: string;
    name: string;
    price: number;
    stock: number;
    image: string;
    category: string;
    status: 'active' | 'inactive';
}

const MOCK_PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'Áo thun nam basic',
        price: 199000,
        stock: 50,
        image: 'https://via.placeholder.com/100',
        category: 'Thời trang',
        status: 'active'
    },
    {
        id: '2',
        name: 'Quần jean nữ',
        price: 399000,
        stock: 30,
        image: 'https://via.placeholder.com/100',
        category: 'Thời trang',
        status: 'active'
    },
    {
        id: '3',
        name: 'Giày thể thao',
        price: 599000,
        stock: 0,
        image: 'https://via.placeholder.com/100',
        category: 'Giày dép',
        status: 'inactive'
    },
];

export default function ProductsManagement() {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all');

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = filter === 'all' || product.status === filter;
        return matchesSearch && matchesFilter;
    });

    const renderProduct = ({ item }: { item: Product }) => (
        <View className="bg-white rounded-lg p-4 mb-3 shadow-sm">
            <View className="flex-row">
                <Image
                    source={{ uri: item.image }}
                    className="w-20 h-20 rounded-lg"
                />
                <View className="flex-1 ml-4">
                    <View className="flex-row items-start justify-between">
                        <View className="flex-1">
                            <Text className="text-base font-semibold text-gray-800 mb-1">
                                {item.name}
                            </Text>
                            <Text className="text-sm text-gray-500 mb-1">{item.category}</Text>
                            <Text className="text-base font-bold text-secondary">
                                {item.price.toLocaleString('vi-VN')}đ
                            </Text>
                        </View>
                        <View className={`px-2 py-1 rounded ${item.status === 'active' ? 'bg-green-100' : 'bg-gray-100'}`}>
                            <Text className={`text-xs ${item.status === 'active' ? 'text-green-600' : 'text-gray-600'}`}>
                                {item.status === 'active' ? 'Đang bán' : 'Ngừng bán'}
                            </Text>
                        </View>
                    </View>
                    <View className="flex-row items-center mt-2">
                        <Ionicons name="cube-outline" size={14} color="#9ca3af" />
                        <Text className={`text-sm ml-1 ${item.stock === 0 ? 'text-red-500' : 'text-gray-600'}`}>
                            Kho: {item.stock}
                        </Text>
                    </View>
                </View>
            </View>

            <View className="flex-row mt-3 pt-3 border-t border-gray-100">
                <TouchableOpacity className="flex-1 flex-row items-center justify-center py-2 border border-gray-300 rounded-lg mr-2">
                    <Ionicons name="create-outline" size={18} color="#6b7280" />
                    <Text className="text-gray-700 ml-1 font-medium">Sửa</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 flex-row items-center justify-center py-2 border border-red-300 rounded-lg">
                    <Ionicons name="trash-outline" size={18} color="#ef4444" />
                    <Text className="text-red-500 ml-1 font-medium">Xóa</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View className="flex-1 bg-gray-50">
            {/* Search and Filter */}
            <View className="bg-white p-4 shadow-sm">
                <View className="flex-row items-center bg-gray-100 rounded-lg px-3 py-2 mb-3">
                    <Ionicons name="search" size={20} color="#9ca3af" />
                    <TextInput
                        className="flex-1 ml-2 text-base"
                        placeholder="Tìm kiếm sản phẩm..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>

                <View className="flex-row">
                    <TouchableOpacity
                        onPress={() => setFilter('all')}
                        className={`flex-1 py-2 rounded-lg mr-2 ${filter === 'all' ? 'bg-secondary' : 'bg-gray-100'}`}
                    >
                        <Text className={`text-center font-medium ${filter === 'all' ? 'text-white' : 'text-gray-600'}`}>
                            Tất cả
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setFilter('active')}
                        className={`flex-1 py-2 rounded-lg mr-2 ${filter === 'active' ? 'bg-secondary' : 'bg-gray-100'}`}
                    >
                        <Text className={`text-center font-medium ${filter === 'active' ? 'text-white' : 'text-gray-600'}`}>
                            Đang bán
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setFilter('inactive')}
                        className={`flex-1 py-2 rounded-lg ${filter === 'inactive' ? 'bg-secondary' : 'bg-gray-100'}`}
                    >
                        <Text className={`text-center font-medium ${filter === 'inactive' ? 'text-white' : 'text-gray-600'}`}>
                            Ngừng bán
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Products List */}
            <FlatList
                data={filteredProducts}
                renderItem={renderProduct}
                keyExtractor={item => item.id}
                contentContainerStyle={{ padding: 16 }}
                ListEmptyComponent={
                    <View className="items-center justify-center py-20">
                        <Ionicons name="cube-outline" size={64} color="#d1d5db" />
                        <Text className="text-gray-400 mt-4">Không tìm thấy sản phẩm</Text>
                    </View>
                }
            />

            {/* Add Product Button */}
            <TouchableOpacity
                onPress={() => router.push('/seller/products/add')}
                className="absolute bottom-6 right-6 bg-secondary w-14 h-14 rounded-full items-center justify-center shadow-lg"
                style={{ elevation: 5 }}
            >
                <Ionicons name="add" size={28} color="white" />
            </TouchableOpacity>
        </View>
    );
}
