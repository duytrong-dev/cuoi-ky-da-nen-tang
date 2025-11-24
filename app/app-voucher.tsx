import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
    FlatList,
    Text,
    TouchableOpacity,
    View
} from "react-native";

type Voucher = {
    id: number;
    title: string;
    minSpend: string;
    progress?: number;
    expiry: string;
    count: number;
    type: string;
    tag?: string;
};

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

    const renderVoucherItem = ({ item: v }: { item: Voucher }) => (
        <View
            className="bg-white rounded-md mb-3 flex-row overflow-hidden shadow-sm relative"
        >
            {/* Left Side - Ticket Stub */}
            <View className="bg-[#66CCB3] w-28 aspect-square items-center justify-center p-2 border-r border-dashed border-white relative">

                <View className="absolute -left-1 top-0 bottom-0 justify-between py-1">
                    {[...Array(10)].map((_, i) => <View key={i} className="w-2 h-2 rounded-full bg-gray-100 mb-1" />)}
                </View>
                <Text className="text-white font-bold text-lg italic text-center">
                    FREE SHIP
                </Text>
                {v.tag && (
                    <Text className="text-white text-[10px] text-center mt-1">
                        {v.tag}
                    </Text>
                )}
            </View>

            {/* Right Side - Content */}
            <View className="flex-1 p-3 justify-between">
                <View className="flex-row justify-between items-start">
                    <View className="flex-1 mr-2">
                        <Text className="text-base font-medium text-gray-800">
                            {v.title}
                        </Text>
                        <Text className="text-xs text-gray-500 mt-1">
                            {v.minSpend}
                        </Text>
                    </View>
                    <View className="w-5 h-5 rounded-full border border-gray-300 bg-gray-100 mt-4" />
                </View>

                <View>
                    {v.progress && (
                        <View className="flex-row items-center mt-2">
                            <View className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden mr-2">
                                <View style={{ width: `${v.progress}%` }} className="h-full bg-[#F6A700]" />
                            </View>
                            <Text className="text-[10px] text-gray-500">Đã dùng {v.progress}%</Text>
                        </View>
                    )}
                    <View className="flex-row items-center justify-between mt-2">
                        <Text className="text-[10px] text-gray-400">HSD: {v.expiry}</Text>
                        <Text className="text-[10px] text-blue-500">Điều kiện</Text>
                    </View>
                </View>
            </View>

            {/* Count Badge */}
            <View className="absolute top-0 right-0 bg-[#FFEEE8] px-1 rounded-bl-sm">
                <Text className="text-[10px] text-primary">x{v.count}</Text>
            </View>

            {/* Bottom Action */}
            <View className="absolute bottom-0 left-28 right-0 border-t border-gray-100 py-2 px-3 flex-row justify-between items-center bg-white">
                <Text className="text-[10px] text-gray-500">Mua thêm sản phẩm để được giảm giá phí vận chuyển</Text>
                <Ionicons name="chevron-forward" size={12} color="#999" />
            </View>
        </View>
    );

    return (
        <View className="flex-1 bg-gray-100">
            {/* Banner */}
            <View className="bg-[#FFF8E4] px-4 py-3 flex-row items-start">
                <Ionicons
                    name="information-circle"
                    size={20}
                    color="#F6A700"
                    style={{ marginTop: 2 }}
                />
                <Text className="ml-2 text-gray-700 flex-1 text-sm leading-5">
                    Chọn sản phẩm trong Giỏ hàng để áp dụng Voucher
                </Text>
            </View>

            <FlatList
                data={vouchers}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderVoucherItem}
                contentContainerStyle={{ paddingHorizontal: 8, paddingTop: 16 }}
                ListHeaderComponent={
                    <Text className="text-gray-600 font-medium mb-3">
                        Voucher không khả dụng
                    </Text>
                }
            />

            {/* Footer */}
            <View className="p-4 border-t border-gray-100 bg-white pb-14">
                <TouchableOpacity
                    className="bg-primary py-3 rounded-md"
                >
                    <Text className="text-white text-center font-bold text-base">
                        Đồng ý
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
