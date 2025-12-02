import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
    ScrollView,
    Text,
    TouchableOpacity
} from "react-native";

interface FilterPill {
    id: string;
    label: string;
    icon?: "flower" | "chevron";
}

interface FilterPillsProps {
    filters?: FilterPill[];
    onFilterPress?: (filterId: string) => void;
}

const DEFAULT_FILTERS: FilterPill[] = [
    { id: "flower", label: "Hỏa tốc", icon: "flower" },
    { id: "favorite", label: "Shop Yêu thích" },
    { id: "rating", label: "Đánh giá", icon: "chevron" },
    { id: "location", label: "Nơi Bán", icon: "chevron" },
];

export default function FilterPills({ filters = DEFAULT_FILTERS, onFilterPress }: FilterPillsProps) {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="px-2 py-3 border-b border-gray-100"
        >
            {filters.map((filter) => (
                <TouchableOpacity
                    key={filter.id}
                    onPress={() => onFilterPress?.(filter.id)}
                    className="flex-row items-center bg-white border border-gray-300 rounded-full px-3 py-1.5 mr-2"
                >
                    {filter.icon === "flower" && (
                        <MaterialCommunityIcons name="flower-tulip" size={16} color="red" />
                    )}
                    <Text className={`text-sm text-gray-700 ${filter.icon === "flower" ? "ml-1" : ""}`}>
                        {filter.label}
                    </Text>
                    {filter.icon === "chevron" && (
                        <Ionicons name="chevron-down" size={14} color="#666" className="ml-1" />
                    )}
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}
