import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface Category {
    id: string;
    name: string;
    productCount: number;
    icon: keyof typeof Ionicons.glyphMap;
}

const MOCK_CATEGORIES: Category[] = [
    { id: '1', name: 'Thời trang', productCount: 45, icon: 'shirt-outline' },
    { id: '2', name: 'Điện tử', productCount: 23, icon: 'phone-portrait-outline' },
    { id: '3', name: 'Giày dép', productCount: 18, icon: 'footsteps-outline' },
    { id: '4', name: 'Phụ kiện', productCount: 32, icon: 'watch-outline' },
];

export default function CategoriesManagement() {
    const [categories, setCategories] = useState<Category[]>(MOCK_CATEGORIES);
    const [newCategoryName, setNewCategoryName] = useState('');
    const [showAddForm, setShowAddForm] = useState(false);

    const handleAddCategory = () => {
        if (!newCategoryName.trim()) {
            Alert.alert('Lỗi', 'Vui lòng nhập tên danh mục');
            return;
        }

        const newCategory: Category = {
            id: Date.now().toString(),
            name: newCategoryName,
            productCount: 0,
            icon: 'pricetag-outline',
        };

        setCategories([...categories, newCategory]);
        setNewCategoryName('');
        setShowAddForm(false);
        Alert.alert('Thành công', 'Đã thêm danh mục mới');
    };

    const handleDeleteCategory = (id: string) => {
        Alert.alert(
            'Xác nhận',
            'Bạn có chắc muốn xóa danh mục này?',
            [
                { text: 'Hủy', style: 'cancel' },
                {
                    text: 'Xóa',
                    style: 'destructive',
                    onPress: () => {
                        setCategories(categories.filter(cat => cat.id !== id));
                    },
                },
            ]
        );
    };

    const renderCategory = ({ item }: { item: Category }) => (
        <View className="bg-white rounded-lg p-4 mb-3 shadow-sm">
            <View className="flex-row items-center">
                <View className="w-12 h-12 bg-secondary/10 rounded-full items-center justify-center mr-4">
                    <Ionicons name={item.icon} size={24} color="#EE4D2D" />
                </View>
                <View className="flex-1">
                    <Text className="text-base font-semibold text-gray-800">{item.name}</Text>
                    <Text className="text-sm text-gray-500 mt-0.5">
                        {item.productCount} sản phẩm
                    </Text>
                </View>
                <View className="flex-row">
                    <TouchableOpacity className="p-2 mr-2">
                        <Ionicons name="create-outline" size={20} color="#6b7280" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleDeleteCategory(item.id)}
                        className="p-2"
                    >
                        <Ionicons name="trash-outline" size={20} color="#ef4444" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <View className="flex-1 bg-gray-50">
            <FlatList
                data={categories}
                renderItem={renderCategory}
                keyExtractor={item => item.id}
                contentContainerStyle={{ padding: 16 }}
                ListHeaderComponent={
                    showAddForm ? (
                        <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                            <Text className="text-base font-semibold text-gray-800 mb-3">
                                Thêm danh mục mới
                            </Text>
                            <TextInput
                                className="border border-gray-300 rounded-lg px-3 py-2 text-base mb-3"
                                placeholder="Tên danh mục"
                                value={newCategoryName}
                                onChangeText={setNewCategoryName}
                            />
                            <View className="flex-row">
                                <TouchableOpacity
                                    onPress={() => {
                                        setShowAddForm(false);
                                        setNewCategoryName('');
                                    }}
                                    className="flex-1 py-2 border border-gray-300 rounded-lg mr-2"
                                >
                                    <Text className="text-center text-gray-700 font-medium">Hủy</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={handleAddCategory}
                                    className="flex-1 py-2 bg-secondary rounded-lg ml-2"
                                >
                                    <Text className="text-center text-white font-medium">Thêm</Text>
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
