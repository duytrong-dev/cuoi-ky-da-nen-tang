import { Ionicons } from '@expo/vector-icons';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export interface Product {
    id: string;
    name: string;
    price: number;
    stock: number;
    image: string;
    category: string;
    status: 'active' | 'inactive';
}

interface ProductCardProps {
    product: Product;
    onEdit?: (product: Product) => void;
    onDelete?: (product: Product) => void;
}

export function ProductCard({ product, onEdit, onDelete }: ProductCardProps) {
    return (
        <View className="bg-white rounded-lg p-4 mb-3 shadow-sm">
            <View className="flex-row">
                <Image
                    source={{ uri: product.image }}
                    className="w-20 h-20 rounded-lg"
                />
                <View className="flex-1 ml-4">
                    <View className="flex-row items-start justify-between">
                        <View className="flex-1">
                            <Text className="text-base font-semibold text-gray-800 mb-1">
                                {product.name}
                            </Text>
                            <Text className="text-sm text-gray-500 mb-1">{product.category}</Text>
                            <Text className="text-base font-bold text-secondary">
                                {product.price.toLocaleString('vi-VN')}đ
                            </Text>
                        </View>
                        <View className={`px-2 py-1 rounded ${product.status === 'active' ? 'bg-green-100' : 'bg-gray-100'}`}>
                            <Text className={`text-xs ${product.status === 'active' ? 'text-green-600' : 'text-gray-600'}`}>
                                {product.status === 'active' ? 'Đang bán' : 'Ngừng bán'}
                            </Text>
                        </View>
                    </View>
                    <View className="flex-row items-center mt-2">
                        <Ionicons name="cube-outline" size={14} color="#9ca3af" />
                        <Text className={`text-sm ml-1 ${product.stock === 0 ? 'text-red-500' : 'text-gray-600'}`}>
                            Kho: {product.stock}
                        </Text>
                    </View>
                </View>
            </View>

            <View className="flex-row mt-3 pt-3 border-t border-gray-100">
                <TouchableOpacity
                    className="flex-1 flex-row items-center justify-center py-2 border border-gray-300 rounded-lg mr-2"
                    onPress={() => onEdit?.(product)}
                >
                    <Ionicons name="create-outline" size={18} color="#6b7280" />
                    <Text className="text-gray-700 ml-1 font-medium">Sửa</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="flex-1 flex-row items-center justify-center py-2 border border-red-300 rounded-lg"
                    onPress={() => onDelete?.(product)}
                >
                    <Ionicons name="trash-outline" size={18} color="#ef4444" />
                    <Text className="text-red-500 ml-1 font-medium">Xóa</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
