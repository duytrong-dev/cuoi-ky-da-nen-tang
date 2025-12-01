import UtilityCard from "@/components/utility-card";
import React from "react";
import { Text, View } from "react-native";

export default function MyUtilitiesSection() {
    return (
        <View className="bg-white mt-2 p-4">
            <View className="flex-row items-center justify-between mb-4">
                <Text className="text-lg font-medium text-black">Tiện ích của tôi</Text>
            </View>
            <View className="flex-row justify-between">
                <UtilityCard
                    icon="wallet-outline"
                    title="Ví OECPay"
                    subtitle="Kích hoạt ngay"
                />
                <UtilityCard
                    icon="credit-card-outline"
                    iconComponent="material"
                    title="Ví trả sau OEC"
                    subtitle="Kích hoạt nhận 150K"
                />
                <UtilityCard
                    icon="logo-usd"
                    title="OECShop Xu"
                    subtitle="Nhận đề nhận Xu mỗi ngày!"
                    badge={true}
                />
                <UtilityCard
                    icon="ticket-outline"
                    title="Kho Voucher"
                    subtitle="50+ Voucher"
                    badge={true}
                />
            </View>
        </View>
    );
}
