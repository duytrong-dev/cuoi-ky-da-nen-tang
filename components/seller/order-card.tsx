import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

export type OrderStatus = 'pending' | 'processing' | 'shipping' | 'completed' | 'cancelled';

export interface Order {
    id: string;
    customerName: string;
    products: number;
    total: number;
    status: OrderStatus;
    date: string;
}

export const STATUS_CONFIG = {
    pending: { label: 'Chờ xác nhận', color: 'bg-yellow-100', textColor: 'text-yellow-700' },
    processing: { label: 'Đang xử lý', color: 'bg-blue-100', textColor: 'text-blue-700' },
    shipping: { label: 'Đang giao', color: 'bg-purple-100', textColor: 'text-purple-700' },
    completed: { label: 'Hoàn thành', color: 'bg-green-100', textColor: 'text-green-700' },
    cancelled: { label: 'Đã hủy', color: 'bg-red-100', textColor: 'text-red-700' },
};

interface OrderCardProps {
    order: Order;
    onViewDetails?: (order: Order) => void;
}

export function OrderCard({ order, onViewDetails }: OrderCardProps) {
    const statusConfig = STATUS_CONFIG[order.status];

    return (
        <View className="bg-white rounded-lg p-4 mb-3 shadow-sm">
            <View className="flex-row items-center justify-between mb-3">
                <Text className="text-base font-semibold text-gray-800">
                    Đơn hàng #{order.id}
                </Text>
                <View className={`px-3 py-1 rounded ${statusConfig.color}`}>
                    <Text className={`text-xs font-medium ${statusConfig.textColor}`}>
                        {statusConfig.label}
                    </Text>
                </View>
            </View>

            <View className="flex-row items-center mb-2">
                <Ionicons name="person-outline" size={16} color="#6b7280" />
                <Text className="text-sm text-gray-600 ml-2">{order.customerName}</Text>
            </View>

            <View className="flex-row items-center mb-2">
                <Ionicons name="cube-outline" size={16} color="#6b7280" />
                <Text className="text-sm text-gray-600 ml-2">{order.products} sản phẩm</Text>
            </View>

            <View className="flex-row items-center mb-3">
                <Ionicons name="calendar-outline" size={16} color="#6b7280" />
                <Text className="text-sm text-gray-600 ml-2">{order.date}</Text>
            </View>

            <View className="flex-row items-center justify-between pt-3 border-t border-gray-100">
                <Text className="text-base font-bold text-secondary">
                    {order.total.toLocaleString('vi-VN')}đ
                </Text>
                <TouchableOpacity
                    className="bg-secondary px-4 py-2 rounded-lg"
                    onPress={() => onViewDetails?.(order)}
                >
                    <Text className="text-white font-medium">Chi tiết</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
