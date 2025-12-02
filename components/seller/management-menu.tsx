import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import { MenuItem } from './menu-item';

interface MenuItemConfig {
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
    subtitle: string;
    route: string;
    color?: string;
}

const menuItems: MenuItemConfig[] = [
    {
        icon: 'cube-outline',
        title: 'Quản lý Sản phẩm',
        subtitle: 'Thêm, sửa, xóa sản phẩm',
        route: '/seller/products',
    },
    {
        icon: 'list-outline',
        title: 'Quản lý Danh mục',
        subtitle: 'Tổ chức danh mục sản phẩm',
        route: '/seller/categories',
    },
    {
        icon: 'image-outline',
        title: 'Quản lý Banner',
        subtitle: 'Upload và quản lý banner shop',
        route: '/seller/banners',
        color: '#8b5cf6',
    },
    {
        icon: 'receipt-outline',
        title: 'Quản lý Đơn hàng',
        subtitle: 'Xem và xử lý đơn hàng',
        route: '/seller/orders',
        color: '#f59e0b',
    },
    {
        icon: 'star-outline',
        title: 'Quản lý Đánh giá',
        subtitle: 'Phản hồi đánh giá khách hàng',
        route: '/seller/reviews',
        color: '#10b981',
    },
    {
        icon: 'gift-outline',
        title: 'Quản lý Khuyến mãi',
        subtitle: 'Tạo voucher và flash sale',
        route: '/seller/promotions',
        color: '#ec4899',
    },
    {
        icon: 'color-palette-outline',
        title: 'Tùy chỉnh Giao diện',
        subtitle: 'Thay đổi màu sắc và layout shop',
        route: '/seller/customize',
        color: '#6366f1',
    },
    {
        icon: 'card-outline',
        title: 'Cài đặt Thanh toán',
        subtitle: 'Phương thức thanh toán',
        route: '/seller/settings/payment',
        color: '#14b8a6',
    },
    {
        icon: 'car-outline',
        title: 'Cài đặt Vận chuyển',
        subtitle: 'Phương thức và phí vận chuyển',
        route: '/seller/settings/shipping',
        color: '#0ea5e9',
    },
    {
        icon: 'settings-outline',
        title: 'Cài đặt Shop',
        subtitle: 'Thông tin và cấu hình shop',
        route: '/seller/settings/shop',
        color: '#64748b',
    },
];

export function ManagementMenu() {
    const router = useRouter();

    return (
        <View className="px-4 pb-6">
            <Text className="text-lg font-bold text-gray-800 mb-4">Quản lý</Text>
            {menuItems.map((item) => (
                <MenuItem
                    key={item.route}
                    icon={item.icon}
                    title={item.title}
                    subtitle={item.subtitle}
                    onPress={() => router.push(item.route as any)}
                    color={item.color}
                />
            ))}
        </View>
    );
}
