import { createSellerRegisterScreenOptions, createStandardSellerScreenOptions } from '@/components/screen-options';
import { Stack, useRouter } from 'expo-router';

export default function SellerLayout() {
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
        <Stack>
            <Stack.Screen
                name="index"
                options={createStandardSellerScreenOptions("Quản lý shop", screenOptionsParams)} />

            <Stack.Screen
                name="products/index"
                options={createStandardSellerScreenOptions("Quản lý Sản phẩm", screenOptionsParams)}
            />
            <Stack.Screen
                name="products/add"
                options={createStandardSellerScreenOptions("Thêm Sản phẩm", screenOptionsParams)}
            />
            <Stack.Screen
                name="categories/index"
                options={createStandardSellerScreenOptions("Quản lý Danh mục", screenOptionsParams)}
            />
            <Stack.Screen
                name="banners/index"
                options={createStandardSellerScreenOptions("Quản lý Banner", screenOptionsParams)}
            />
            <Stack.Screen
                name="settings/shop"
                options={createStandardSellerScreenOptions("Cài đặt Shop", screenOptionsParams)}
            />
            <Stack.Screen
                name="settings/shipping"
                options={createStandardSellerScreenOptions("Cài đặt Vận chuyển", screenOptionsParams)}
            />
            <Stack.Screen
                name="settings/payment"
                options={createStandardSellerScreenOptions("Cài đặt Thanh toán", screenOptionsParams)}
            />
            <Stack.Screen
                name="customize/index"
                options={createStandardSellerScreenOptions("Tùy chỉnh Giao diện", screenOptionsParams)}
            />
            <Stack.Screen
                name="orders/index"
                options={createStandardSellerScreenOptions("Quản lý Đơn hàng", screenOptionsParams)}
            />
            <Stack.Screen
                name="reviews/index"
                options={createStandardSellerScreenOptions("Quản lý Đánh giá", screenOptionsParams)}
            />
            <Stack.Screen
                name="promotions/index"
                options={createStandardSellerScreenOptions("Quản lý Khuyến mãi", screenOptionsParams)}
            />
            <Stack.Screen
                name="register/index"
                options={createSellerRegisterScreenOptions(screenOptionsParams)} />
        </Stack>
    );
}
