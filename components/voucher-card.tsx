import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

export interface Voucher {
    id: number;
    title: string;
    minSpend: string;
    progress?: number;
    expiry: string;
    count: number;
    type: string;
    tag?: string;
}

interface VoucherCardProps {
    voucher: Voucher;
}

export default function VoucherCard({ voucher: v }: VoucherCardProps) {
    return (
        <View className="bg-white rounded-md mb-3 flex-row overflow-hidden shadow-sm relative">
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
}
