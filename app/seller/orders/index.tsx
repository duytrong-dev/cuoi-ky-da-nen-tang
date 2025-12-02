import { EmptyOrderState } from '@/components/seller/empty-order-state';
import { Order, OrderCard, OrderStatus } from '@/components/seller/order-card';
import { OrderFilterTabs } from '@/components/seller/order-filter-tabs';
import { useState } from 'react';
import { FlatList, View } from 'react-native';

const MOCK_ORDERS: Order[] = [
    {
        id: '1',
        customerName: 'Nguyễn Văn A',
        products: 3,
        total: 1200000,
        status: 'pending',
        date: '02/12/2025',
    },
    {
        id: '2',
        customerName: 'Trần Thị B',
        products: 1,
        total: 599000,
        status: 'processing',
        date: '02/12/2025',
    },
    {
        id: '3',
        customerName: 'Lê Văn C',
        products: 2,
        total: 899000,
        status: 'shipping',
        date: '01/12/2025',
    },
];

export default function OrdersManagement() {
    const [orders] = useState<Order[]>(MOCK_ORDERS);
    const [filter, setFilter] = useState<OrderStatus | 'all'>('all');

    const filteredOrders = filter === 'all'
        ? orders
        : orders.filter(order => order.status === filter);

    const handleViewDetails = (order: Order) => {
        // TODO: Navigate to order details screen
        console.log('View order details:', order.id);
    };

    return (
        <View className="flex-1 bg-gray-50">
            <OrderFilterTabs
                activeFilter={filter}
                onFilterChange={setFilter}
            />

            <FlatList
                data={filteredOrders}
                renderItem={({ item }) => (
                    <OrderCard
                        order={item}
                        onViewDetails={handleViewDetails}
                    />
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={{ padding: 16 }}
                ListEmptyComponent={<EmptyOrderState />}
            />
        </View>
    );
}
