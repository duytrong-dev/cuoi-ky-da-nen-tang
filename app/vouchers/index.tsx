import ConfirmButton from "@/components/confirm-button";
import VoucherCard, { Voucher } from "@/components/voucher-card";
import VoucherInfoBanner from "@/components/voucher-info-banner";
import { useRouter } from "expo-router";
import React from "react";
import {
    FlatList,
    Text,
    View
} from "react-native";

export default function ShopeeVoucherScreen() {
    const router = useRouter();

    const vouchers: Voucher[] = [
        {
            id: 1,
            title: "Giảm tối đa 20kđ",
            minSpend: "Đơn tối thiểu 30kđ",
            progress: 84,
            expiry: "30.11.2025",
            count: 10,
            type: "free-ship",
        },
        {
            id: 2,
            title: "Giảm tối đa 150kđ",
            minSpend: "Đơn tối thiểu 500kđ",
            expiry: "30.11.2025",
            count: 10,
            type: "free-ship",
            tag: "Hàng Cồng Kềnh",
        },
        {
            id: 3,
            title: "Giảm tối đa 30kđ",
            minSpend: "Đơn tối thiểu 0đ",
            expiry: "30.11.2025",
            count: 90,
            type: "free-ship",
            tag: "Toàn Ngành Hàng",
        },
        {
            id: 4,
            title: "Giảm tối đa 50kđ",
            minSpend: "Đơn tối thiểu 45kđ",
            progress: 75,
            expiry: "30.11.2025",
            count: 15,
            type: "free-ship",
            tag: "Toàn Ngành Hàng",
        },
    ];

    return (
        <View className="flex-1 bg-gray-100">
            {/* Banner */}
            <VoucherInfoBanner />

            <FlatList
                data={vouchers}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <VoucherCard voucher={item} />}
                contentContainerStyle={{ paddingHorizontal: 8, paddingTop: 16 }}
                ListHeaderComponent={
                    <Text className="text-gray-600 font-medium mb-3">
                        Voucher không khả dụng
                    </Text>
                }
            />

            {/* Footer */}
            <View className="p-4 border-t border-gray-100 bg-white pb-14">
                <ConfirmButton />
            </View>
        </View>
    );
}
