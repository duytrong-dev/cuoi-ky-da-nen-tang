import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

export interface Category {
    id: string;
    name: string;
    productCount: number;
    icon: keyof typeof Ionicons.glyphMap;
}

interface CategoryCardProps {
    category: Category;
    onEdit?: (category: Category) => void;
    onDelete?: (category: Category) => void;
}

export function CategoryCard({ category, onEdit, onDelete }: CategoryCardProps) {
    return (
        <View className="bg-white rounded-lg p-4 mb-3 shadow-sm">
            <View className="flex-row items-center">
                <View className="w-12 h-12 bg-secondary/10 rounded-full items-center justify-center mr-4">
                    <Ionicons name={category.icon} size={24} color="#EE4D2D" />
                </View>
                <View className="flex-1">
                    <Text className="text-base font-semibold text-gray-800">{category.name}</Text>
                    <Text className="text-sm text-gray-500 mt-0.5">
                        {category.productCount} sản phẩm
                    </Text>
                </View>
                <View className="flex-row">
                    <TouchableOpacity
                        className="p-2 mr-2"
                        onPress={() => onEdit?.(category)}
                    >
                        <Ionicons name="create-outline" size={20} color="#6b7280" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onDelete?.(category)}
                        className="p-2"
                    >
                        <Ionicons name="trash-outline" size={20} color="#ef4444" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
