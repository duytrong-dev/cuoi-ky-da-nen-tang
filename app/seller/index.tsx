import { ManagementMenu } from '@/components/seller/management-menu';
import { StatisticsSection } from '@/components/seller/statistics-section';
import { WelcomeBanner } from '@/components/seller/welcome-banner';
import { ScrollView } from 'react-native';

export default function SellerDashboard() {
    // Mock data - replace with real data from API
    const statisticsData = {
        revenue: {
            value: '12.5M',
            trend: '+12%',
            trendUp: true,
        },
        orders: {
            value: '48',
            trend: '+8%',
            trendUp: true,
        },
        products: {
            value: '156',
        },
        customers: {
            value: '1.2K',
            trend: '+5%',
            trendUp: true,
        },
    };

    return (
        <ScrollView className="flex-1 bg-gray-50" bounces={false} overScrollMode="never">
            <WelcomeBanner />
            <StatisticsSection data={statisticsData} />
            <ManagementMenu />
        </ScrollView>
    );
}
