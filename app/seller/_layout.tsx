import { createSellerRegisterScreenOptions } from '@/components/screen-options';
import { Colors } from '@/constants/theme';
import { Stack, useRouter } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function SellerLayout() {
    const colorScheme = useColorScheme();
    const router = useRouter();

    const goBack = () => {
        if (router.canGoBack()) {
            router.back();
        } else {
            router.replace("/");
        }
    };

    const screenOptionsParams = { goBack, router };

    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors[colorScheme ?? 'light'].secondary,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    title: 'Quản lý Shop',
                    headerShown: true
                }}
            />
            <Stack.Screen
                name="products/index"
                options={{ title: 'Quản lý Sản phẩm' }}
            />
            <Stack.Screen
                name="products/add"
                options={{ title: 'Thêm Sản phẩm' }}
            />
            <Stack.Screen
                name="categories/index"
                options={{ title: 'Quản lý Danh mục' }}
            />
            <Stack.Screen
                name="banners/index"
                options={{ title: 'Quản lý Banner' }}
            />
            <Stack.Screen
                name="settings/shop"
                options={{ title: 'Cài đặt Shop' }}
            />
            <Stack.Screen
                name="settings/shipping"
                options={{ title: 'Cài đặt Vận chuyển' }}
            />
            <Stack.Screen
                name="settings/payment"
                options={{ title: 'Cài đặt Thanh toán' }}
            />
            <Stack.Screen
                name="customize/index"
                options={{ title: 'Tùy chỉnh Giao diện' }}
            />
            <Stack.Screen
                name="orders/index"
                options={{ title: 'Quản lý Đơn hàng' }}
            />
            <Stack.Screen
                name="reviews/index"
                options={{ title: 'Quản lý Đánh giá' }}
            />
            <Stack.Screen
                name="promotions/index"
                options={{ title: 'Quản lý Khuyến mãi' }}
            />
            <Stack.Screen name="register/index" options={createSellerRegisterScreenOptions(screenOptionsParams)} />
        </Stack>
    );
}
