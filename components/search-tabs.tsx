import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    Text,
    TouchableOpacity,
    View
} from "react-native";

export type SearchTab = "related" | "latest" | "bestseller" | "price";

interface SearchTabsProps {
    selectedTab: SearchTab;
    onTabChange: (tab: SearchTab) => void;
}

const TABS = [
    { id: "related" as SearchTab, label: "Liên quan" },
    { id: "latest" as SearchTab, label: "Mới nhất" },
    { id: "bestseller" as SearchTab, label: "Bán chạy" },
    { id: "price" as SearchTab, label: "Giá", hasIcon: true },
];

export default function SearchTabs({ selectedTab, onTabChange }: SearchTabsProps) {
    return (
        <View className="flex-row border-b border-gray-200">
            {TABS.map((tab) => (
                <TouchableOpacity
                    key={tab.id}
                    onPress={() => onTabChange(tab.id)}
                    className={`flex-1 py-3 ${tab.hasIcon ? "flex-row items-center justify-center" : ""} ${selectedTab === tab.id ? "border-b-2 border-secondary" : ""}`}
                >
                    <Text className={`text-center text-base ${selectedTab === tab.id ? "text-secondary font-medium" : "text-gray-600"}`}>
                        {tab.label}
                    </Text>
                    {tab.hasIcon && (
                        <Ionicons
                            name="chevron-down"
                            size={16}
                            color={selectedTab === tab.id ? Colors.light.secondary : "#666"}
                        />
                    )}
                </TouchableOpacity>
            ))}
        </View>
    );
}
