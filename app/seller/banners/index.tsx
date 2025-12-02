import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

interface Banner {
    id: string;
    image: string;
    position: number;
    active: boolean;
}

const MOCK_BANNERS: Banner[] = [
    { id: '1', image: 'https://via.placeholder.com/400x200', position: 1, active: true },
    { id: '2', image: 'https://via.placeholder.com/400x200', position: 2, active: true },
];

export default function BannersManagement() {
    const [banners, setBanners] = useState<Banner[]>(MOCK_BANNERS);

    const pickBanner = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert('Cần quyền truy cập', 'Vui lòng cấp quyền truy cập thư viện ảnh.');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [2, 1],
            quality: 0.8,
        });

        if (!result.canceled && result.assets[0]) {
            const newBanner: Banner = {
                id: Date.now().toString(),
                image: result.assets[0].uri,
                position: banners.length + 1,
                active: true,
            };
            setBanners([...banners, newBanner]);
        }
    };

    const toggleBannerStatus = (id: string) => {
        setBanners(banners.map(banner =>
            banner.id === id ? { ...banner, active: !banner.active } : banner
        ));
    };

    const deleteBanner = (id: string) => {
        Alert.alert(
            'Xác nhận',
            'Bạn có chắc muốn xóa banner này?',
            [
                { text: 'Hủy', style: 'cancel' },
                {
                    text: 'Xóa',
                    style: 'destructive',
                    onPress: () => setBanners(banners.filter(b => b.id !== id)),
                },
            ]
        );
    };

    const renderBanner = ({ item }: { item: Banner }) => (
        <View className="bg-white rounded-lg overflow-hidden mb-4 shadow-sm">
            <Image
                source={{ uri: item.image }}
                className="w-full h-40"
                resizeMode="cover"
            />
            <View className="p-4">
                <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center">
                        <Text className="text-sm text-gray-600 mr-3">Vị trí: {item.position}</Text>
                        <View className={`px-2 py-1 rounded ${item.active ? 'bg-green-100' : 'bg-gray-100'}`}>
                            <Text className={`text-xs ${item.active ? 'text-green-600' : 'text-gray-600'}`}>
                                {item.active ? 'Đang hiển thị' : 'Đã ẩn'}
                            </Text>
                        </View>
                    </View>
                    <View className="flex-row">
                        <TouchableOpacity
                            onPress={() => toggleBannerStatus(item.id)}
                            className="p-2 mr-2"
                        >
                            <Ionicons
                                name={item.active ? 'eye-off-outline' : 'eye-outline'}
                                size={20}
                                color="#6b7280"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => deleteBanner(item.id)}
                            className="p-2"
                        >
                            <Ionicons name="trash-outline" size={20} color="#ef4444" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );

    return (
        <View className="flex-1 bg-gray-50">
            <FlatList
                data={banners}
                renderItem={renderBanner}
                keyExtractor={item => item.id}
                contentContainerStyle={{ padding: 16 }}
                ListEmptyComponent={
                    <View className="items-center justify-center py-20">
                        <Ionicons name="image-outline" size={64} color="#d1d5db" />
                        <Text className="text-gray-400 mt-4">Chưa có banner nào</Text>
                    </View>
                }
            />

            <TouchableOpacity
                onPress={pickBanner}
                className="absolute bottom-6 right-6 bg-secondary w-14 h-14 rounded-full items-center justify-center shadow-lg"
                style={{ elevation: 5 }}
            >
                <Ionicons name="add" size={28} color="white" />
            </TouchableOpacity>
        </View>
    );
}
