import React from "react";
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";

export type OrderStatus = "pending" | "pickup" | "shipping" | "delivered" | "return" | "cancelled";

interface OrderTab {
    key: OrderStatus;
    label: string;
}

interface OrderTabsProps {
    tabs: OrderTab[];
    activeTab: OrderStatus;
    onTabChange: (tab: OrderStatus) => void;
}

export default function OrderTabs({ tabs, activeTab, onTabChange }: OrderTabsProps) {
    return (
        <View className="bg-white border-b border-gray-200">
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="px-2"
            >
                {tabs.map((tab) => (
                    <TouchableOpacity
                        key={tab.key}
                        onPress={() => onTabChange(tab.key)}
                        className="p-4"
                    >
                        <Text
                            className={`text-sm ${activeTab === tab.key
                                ? "text-primary font-medium"
                                : "text-gray-600"
                                }`}
                        >
                            {tab.label}
                        </Text>
                        {activeTab === tab.key && (
                            <View className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                        )}
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}
