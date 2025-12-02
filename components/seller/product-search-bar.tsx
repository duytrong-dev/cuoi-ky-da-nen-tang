import { Ionicons } from '@expo/vector-icons';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

type FilterType = 'all' | 'active' | 'inactive';

interface ProductSearchBarProps {
    searchQuery: string;
    onSearchChange: (query: string) => void;
    filter: FilterType;
    onFilterChange: (filter: FilterType) => void;
}

export function ProductSearchBar({
    searchQuery,
    onSearchChange,
    filter,
    onFilterChange
}: ProductSearchBarProps) {
    return (
        <View className="bg-white p-4 shadow-sm">
            {/* Search Input */}
            <View className="flex-row items-center bg-gray-100 rounded-lg px-3 py-2 mb-3">
                <Ionicons name="search" size={20} color="#9ca3af" />
                <TextInput
                    className="flex-1 ml-2 text-base"
                    placeholder="Tìm kiếm sản phẩm..."
                    value={searchQuery}
                    onChangeText={onSearchChange}
                    style={{ fontSize: 16, lineHeight: 20 }}
                />
            </View>

            {/* Filter Buttons */}
            <View className="flex-row">
                <TouchableOpacity
                    onPress={() => onFilterChange('all')}
                    className={`flex-1 py-2 rounded-lg mr-2 ${filter === 'all' ? 'bg-secondary' : 'bg-gray-100'}`}
                >
                    <Text className={`text-center font-medium ${filter === 'all' ? 'text-white' : 'text-gray-600'}`}>
                        Tất cả
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onFilterChange('active')}
                    className={`flex-1 py-2 rounded-lg mr-2 ${filter === 'active' ? 'bg-secondary' : 'bg-gray-100'}`}
                >
                    <Text className={`text-center font-medium ${filter === 'active' ? 'text-white' : 'text-gray-600'}`}>
                        Đang bán
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onFilterChange('inactive')}
                    className={`flex-1 py-2 rounded-lg ${filter === 'inactive' ? 'bg-secondary' : 'bg-gray-100'}`}
                >
                    <Text className={`text-center font-medium ${filter === 'inactive' ? 'text-white' : 'text-gray-600'}`}>
                        Ngừng bán
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
