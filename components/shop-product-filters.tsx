import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const PRODUCT_FILTERS = [
    { id: "popular", label: "Phổ biến" },
    { id: "latest", label: "Mới nhất" },
    { id: "best-selling", label: "Bán chạy" },
    { id: "price", label: "Giá", hasIcon: true },
];

interface ShopProductFiltersProps {
    selectedFilter: string;
    onFilterChange: (filterId: string) => void;
}

export default function ShopProductFilters({ selectedFilter, onFilterChange }: ShopProductFiltersProps) {
    return (
        <View className="bg-white border-b border-gray-200">
            <View className="flex-row px-4 py-3">
                {PRODUCT_FILTERS.map((filter) => (
                    <TouchableOpacity
                        key={filter.id}
                        onPress={() => onFilterChange(filter.id)}
                        className="flex-1 items-center"
                    >
                        <View className="flex-row items-center">
                            <Text
                                className={`text-sm ${selectedFilter === filter.id
                                    ? "text-red-500 font-medium"
                                    : "text-gray-600"
                                    }`}
                            >
                                {filter.label}
                            </Text>
                            {filter.hasIcon && (
                                <Ionicons
                                    name="chevron-down"
                                    size={14}
                                    color={selectedFilter === filter.id ? "#ef4444" : "#666"}
                                    style={{ marginLeft: 2 }}
                                />
                            )}
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}
