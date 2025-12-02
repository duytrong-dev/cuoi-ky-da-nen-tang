import { AddBannerButton } from '@/components/seller/add-banner-button';
import { Banner, BannerCard } from '@/components/seller/banner-card';
import { EmptyBannerState } from '@/components/seller/empty-banner-state';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Alert, FlatList, View } from 'react-native';

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
            mediaTypes: ['images'],
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

    return (
        <View className="flex-1 bg-gray-50">
            <FlatList
                data={banners}
                renderItem={({ item }) => (
                    <BannerCard
                        banner={item}
                        onToggleStatus={toggleBannerStatus}
                        onDelete={deleteBanner}
                    />
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={{ padding: 16 }}
                ListEmptyComponent={<EmptyBannerState />}
            />

            <AddBannerButton onPress={pickBanner} />
        </View>
    );
}
