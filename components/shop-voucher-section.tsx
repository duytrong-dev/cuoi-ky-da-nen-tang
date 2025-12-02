import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

interface Voucher {
    id: string;
    discount: string;
    minOrder: string;
    validUntil: string;
}

interface ShopVoucherSectionProps {
    vouchers: Voucher[];
}

export default function ShopVoucherSection({ vouchers }: ShopVoucherSectionProps) {
    return (
        <View className="bg-white px-4 py-3">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {vouchers.map((voucher) => (
                    <View
                        key={voucher.id}
                        className="mr-3 border border-secondary rounded-md overflow-hidden"
                        style={{ width: 160 }}
                    >
                        <View className="p-3">
                            <Text className="text-secondary text-base font-bold">
                                {voucher.discount}
                            </Text>
                            <Text className="text-xs text-gray-600 mt-1">
                                Đơn tối thiểu {voucher.minOrder}
                            </Text>
                            <Text className="text-xs text-gray-400 mt-1">
                                HSD: {voucher.validUntil}
                            </Text>
                        </View>
                        <TouchableOpacity className="bg-secondary py-2">
                            <Text className="text-white text-center text-sm font-medium">
                                Lưu
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
                <TouchableOpacity className="justify-center items-center px-4">
                    <Text className="text-secondary text-sm">Tìm hiểu ngay →</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
