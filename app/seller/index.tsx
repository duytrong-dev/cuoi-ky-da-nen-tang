import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View, useColorScheme } from 'react-native';

interface StatCardProps {
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
    value: string;
    trend?: string;
    trendUp?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, trend, trendUp }) => {
    const colorScheme = useColorScheme();

    return (
        <View className="bg-white rounded-lg p-4 shadow-sm flex-1 mx-1">
            <View className="flex-row items-center justify-between mb-2">
                <Ionicons name={icon} size={24} color={Colors[colorScheme ?? 'light'].secondary} />
                {trend && (
                    <View className={`flex-row items-center ${trendUp ? 'bg-green-100' : 'bg-red-100'} px-2 py-1 rounded`}>
                        <Ionicons
                            name={trendUp ? 'trending-up' : 'trending-down'}
                            size={12}
                            color={trendUp ? '#10b981' : '#ef4444'}
                        />
                        <Text className={`text-xs ml-1 ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
                            {trend}
                        </Text>
                    </View>
                )}
            </View>
            <Text className="text-2xl font-bold text-gray-800 mb-1">{value}</Text>
            <Text className="text-sm text-gray-500">{title}</Text>
        </View>
    );
};

interface MenuItemProps {
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
    subtitle: string;
    onPress: () => void;
    color?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, title, subtitle, onPress, color }) => {
    const colorScheme = useColorScheme();
    const iconColor = color || Colors[colorScheme ?? 'light'].secondary;

    return (
        <TouchableOpacity
            onPress={onPress}
            className="bg-white rounded-lg p-4 mb-3 shadow-sm flex-row items-center"
        >
            <View className="w-12 h-12 rounded-full items-center justify-center mr-4" style={{ backgroundColor: `${iconColor}20` }}>
                <Ionicons name={icon} size={24} color={iconColor} />
            </View>
            <View className="flex-1">
                <Text className="text-base font-semibold text-gray-800">{title}</Text>
                <Text className="text-sm text-gray-500 mt-0.5">{subtitle}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
        </TouchableOpacity>
    );
};

export default function SellerDashboard() {
    const router = useRouter();
    const colorScheme = useColorScheme();

    return (
        <ScrollView className="flex-1 bg-gray-50">
            {/* Welcome Banner */}
            <View className="bg-secondary p-6">
                <Text className="text-white text-2xl font-bold mb-1">Xin chào, Shop Owner! 👋</Text>
                <Text className="text-white/90">Quản lý shop của bạn một cách dễ dàng</Text>
            </View>

            {/* Statistics */}
            <View className="px-4 py-6">
                <Text className="text-lg font-bold text-gray-800 mb-4">Thống kê hôm nay</Text>
                <View className="flex-row mb-4">
                    <StatCard
                        icon="cash-outline"
                        title="Doanh thu"
                        value="12.5M"
                        trend="+12%"
                        trendUp={true}
                    />
                    <StatCard
                        icon="cart-outline"
                        title="Đơn hàng"
                        value="48"
                        trend="+8%"
                        trendUp={true}
                    />
                </View>
                <View className="flex-row">
                    <StatCard
                        icon="cube-outline"
                        title="Sản phẩm"
                        value="156"
                    />
                    <StatCard
                        icon="people-outline"
                        title="Khách hàng"
                        value="1.2K"
                        trend="+5%"
                        trendUp={true}
                    />
                </View>
            </View>

            {/* Quick Actions */}
            <View className="px-4 pb-6">
                <Text className="text-lg font-bold text-gray-800 mb-4">Quản lý</Text>

                <MenuItem
                    icon="cube-outline"
                    title="Quản lý Sản phẩm"
                    subtitle="Thêm, sửa, xóa sản phẩm"
                    onPress={() => router.push('/seller/products')}
                />

                <MenuItem
                    icon="list-outline"
                    title="Quản lý Danh mục"
                    subtitle="Tổ chức danh mục sản phẩm"
                    onPress={() => router.push('/seller/categories')}
                />

                <MenuItem
                    icon="image-outline"
                    title="Quản lý Banner"
                    subtitle="Upload và quản lý banner shop"
                    onPress={() => router.push('/seller/banners')}
                    color="#8b5cf6"
                />

                <MenuItem
                    icon="receipt-outline"
                    title="Quản lý Đơn hàng"
                    subtitle="Xem và xử lý đơn hàng"
                    onPress={() => router.push('/seller/orders')}
                    color="#f59e0b"
                />

                <MenuItem
                    icon="star-outline"
                    title="Quản lý Đánh giá"
                    subtitle="Phản hồi đánh giá khách hàng"
                    onPress={() => router.push('/seller/reviews')}
                    color="#10b981"
                />

                <MenuItem
                    icon="gift-outline"
                    title="Quản lý Khuyến mãi"
                    subtitle="Tạo voucher và flash sale"
                    onPress={() => router.push('/seller/promotions')}
                    color="#ec4899"
                />

                <MenuItem
                    icon="color-palette-outline"
                    title="Tùy chỉnh Giao diện"
                    subtitle="Thay đổi màu sắc và layout shop"
                    onPress={() => router.push('/seller/customize')}
                    color="#6366f1"
                />

                <MenuItem
                    icon="settings-outline"
                    title="Cài đặt Shop"
                    subtitle="Thông tin, vận chuyển, thanh toán"
                    onPress={() => router.push('/seller/settings/shop')}
                    color="#64748b"
                />
            </View>
        </ScrollView>
    );
}
