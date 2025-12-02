import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

export interface Promotion {
    id: string;
    code: string;
    discount: number;
    type: 'percentage' | 'fixed';
    minOrder: number;
    maxDiscount?: number;
    usageLimit: number;
    used: number;
    startDate: string;
    endDate: string;
    active: boolean;
}

interface PromotionCardProps {
    promotion: Promotion;
    onToggleStatus: (id: string) => void;
    onDelete: (id: string) => void;
}

export function PromotionCard({ promotion, onToggleStatus, onDelete }: PromotionCardProps) {
    return (
        <View className="bg-white rounded-lg p-4 mb-3 shadow-sm">
            <View className="flex-row items-start justify-between mb-3">
                <View className="flex-1">
                    <View className="flex-row items-center mb-2">
                        <View className="bg-secondary/10 px-3 py-1 rounded">
                            <Text className="text-secondary font-bold">{promotion.code}</Text>
                        </View>
                        <View className={`ml-2 px-2 py-1 rounded ${promotion.active ? 'bg-green-100' : 'bg-gray-100'}`}>
                            <Text className={`text-xs ${promotion.active ? 'text-green-600' : 'text-gray-600'}`}>
                                {promotion.active ? 'Đang hoạt động' : 'Đã tắt'}
                            </Text>
                        </View>
                    </View>
                    <Text className="text-base font-semibold text-gray-800 mb-1">
                        Giảm {promotion.type === 'percentage' ? `${promotion.discount}%` : `${promotion.discount.toLocaleString('vi-VN')}đ`}
                    </Text>
                    {promotion.type === 'percentage' && promotion.maxDiscount && (
                        <Text className="text-sm text-gray-500">
                            Tối đa {promotion.maxDiscount.toLocaleString('vi-VN')}đ
                        </Text>
                    )}
                </View>
            </View>

            <View className="flex-row items-center mb-2">
                <Ionicons name="cart-outline" size={14} color="#6b7280" />
                <Text className="text-sm text-gray-600 ml-2">
                    Đơn tối thiểu: {promotion.minOrder.toLocaleString('vi-VN')}đ
                </Text>
            </View>

            <View className="flex-row items-center mb-2">
                <Ionicons name="people-outline" size={14} color="#6b7280" />
                <Text className="text-sm text-gray-600 ml-2">
                    Đã dùng: {promotion.used}/{promotion.usageLimit}
                </Text>
            </View>

            <View className="flex-row items-center mb-3">
                <Ionicons name="calendar-outline" size={14} color="#6b7280" />
                <Text className="text-sm text-gray-600 ml-2">
                    {promotion.startDate} - {promotion.endDate}
                </Text>
            </View>

            <View className="flex-row pt-3 border-t border-gray-100">
                <TouchableOpacity
                    onPress={() => onToggleStatus(promotion.id)}
                    className="flex-1 flex-row items-center justify-center py-2 border border-gray-300 rounded-lg mr-2"
                >
                    <Ionicons
                        name={promotion.active ? 'eye-off-outline' : 'eye-outline'}
                        size={18}
                        color="#6b7280"
                    />
                    <Text className="text-gray-700 ml-1 font-medium">
                        {promotion.active ? 'Tắt' : 'Bật'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onDelete(promotion.id)}
                    className="flex-1 flex-row items-center justify-center py-2 border border-red-300 rounded-lg"
                >
                    <Ionicons name="trash-outline" size={18} color="#ef4444" />
                    <Text className="text-red-500 ml-1 font-medium">Xóa</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
