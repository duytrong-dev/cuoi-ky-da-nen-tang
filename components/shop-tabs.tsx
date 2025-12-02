import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const TABS = ["Shop", "Sản phẩm", "Danh mục hàng"];

interface ShopTabsProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export default function ShopTabs({ activeTab, onTabChange }: ShopTabsProps) {
    return (
        <View className="bg-white border-b border-gray-200">
            <View className="flex-row">
                {TABS.map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        onPress={() => onTabChange(tab)}
                        className="flex-1 py-3 items-center relative"
                    >
                        <Text
                            className={`text-base ${activeTab === tab
                                ? "text-primary font-semibold"
                                : "text-gray-600"
                                }`}
                        >
                            {tab}
                        </Text>
                        {activeTab === tab && (
                            <View className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                        )}
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}
