import SupportMenuItem from "@/components/support-menu-item";
import React from "react";
import { Text, View } from "react-native";

export default function SupportSection() {
    return (
        <View className="bg-white mt-2 p-4">
            <Text className="text-lg font-medium text-gray-700 mb-4">Hỗ trợ</Text>
            <SupportMenuItem
                icon="help-circle-outline"
                label="Trung tâm trợ giúp"
            />
            <SupportMenuItem
                icon="headset-outline"
                label="Trò Chuyện Với Shopee"
            />
            <SupportMenuItem
                icon="document-text-outline"
                label="Shopee Blog"
                showBorder={false}
            />
        </View>
    );
}
