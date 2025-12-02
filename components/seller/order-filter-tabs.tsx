import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { OrderStatus } from './order-card';

interface FilterTab {
    key: OrderStatus | 'all';
    label: string;
}

const FILTER_TABS: FilterTab[] = [
    { key: 'all', label: 'Tất cả' },
    { key: 'pending', label: 'Chờ xác nhận' },
    { key: 'processing', label: 'Đang xử lý' },
    { key: 'shipping', label: 'Đang giao' },
    { key: 'completed', label: 'Hoàn thành' },
];

interface OrderFilterTabsProps {
    activeFilter: OrderStatus | 'all';
    onFilterChange: (filter: OrderStatus | 'all') => void;
}

export function OrderFilterTabs({ activeFilter, onFilterChange }: OrderFilterTabsProps) {
    return (
        <View className="bg-white p-2 shadow-sm">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {FILTER_TABS.map((tab, index) => (
                    <TouchableOpacity
                        key={tab.key}
                        onPress={() => onFilterChange(tab.key)}
                        className={`px-4 py-2 rounded-lg ${index < FILTER_TABS.length - 1 ? 'mr-2' : ''} ${activeFilter === tab.key ? 'bg-secondary' : 'bg-gray-100'
                            }`}
                    >
                        <Text className={`font-medium ${activeFilter === tab.key ? 'text-white' : 'text-gray-600'}`}>
                            {tab.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}
