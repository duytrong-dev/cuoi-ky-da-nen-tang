import { Text, View } from 'react-native';
import { StatCard } from './stat-card';

interface StatisticsData {
    revenue: {
        value: string;
        trend?: string;
        trendUp?: boolean;
    };
    orders: {
        value: string;
        trend?: string;
        trendUp?: boolean;
    };
    products: {
        value: string;
    };
    customers: {
        value: string;
        trend?: string;
        trendUp?: boolean;
    };
}

interface StatisticsSectionProps {
    data: StatisticsData;
}

export function StatisticsSection({ data }: StatisticsSectionProps) {
    return (
        <View className="px-4 py-6">
            <Text className="text-lg font-bold text-gray-800 mb-4">Thống kê hôm nay</Text>
            <View className="flex-row mb-4">
                <StatCard
                    icon="cash-outline"
                    title="Doanh thu"
                    value={data.revenue.value}
                    trend={data.revenue.trend}
                    trendUp={data.revenue.trendUp}
                />
                <StatCard
                    icon="cart-outline"
                    title="Đơn hàng"
                    value={data.orders.value}
                    trend={data.orders.trend}
                    trendUp={data.orders.trendUp}
                />
            </View>
            <View className="flex-row">
                <StatCard
                    icon="cube-outline"
                    title="Sản phẩm"
                    value={data.products.value}
                />
                <StatCard
                    icon="people-outline"
                    title="Khách hàng"
                    value={data.customers.value}
                    trend={data.customers.trend}
                    trendUp={data.customers.trendUp}
                />
            </View>
        </View>
    );
}
