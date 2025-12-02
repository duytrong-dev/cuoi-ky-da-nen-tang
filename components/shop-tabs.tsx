import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const TABS = ["Shop", "Sản phẩm", "Danh mục hàng"];

interface ShopTabsProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export default function ShopTabs({ activeTab, onTabChange }: ShopTabsProps) {
    return (
        <View className="bg-white border-b border-gray-200">
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="px-4"
            >
                {TABS.map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        onPress={() => onTabChange(tab)}
                        className="mr-6 py-3"
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
            </ScrollView>
        </View>
    );
}
