import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function OtherUtilitiesSection() {
    return (
        <View className="bg-white mt-2 p-4">
            <View className="flex-row items-center justify-between mb-4">
                <Text className="text-lg font-medium text-black">Tiện ích khác</Text>
                <TouchableOpacity className="flex-row items-center">
                    <Text className="text-md text-black">Xem tất cả</Text>
                    <Ionicons name="chevron-forward" size={16} color="black" />
                </TouchableOpacity>
            </View>
            <View className="flex-row flex-wrap">
                <TouchableOpacity className="w-[49%] border border-gray-400 p-4 flex-row items-center mb-2 mr-[2%]">
                    <Ionicons name="person-outline" size={24} color={Colors.light.secondary} />
                    <View className="ml-3 flex-1">
                        <Text className="text-sm text-black">Khách hàng thân thiết</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={16} color="black" />
                </TouchableOpacity>
                <TouchableOpacity className="w-[49%] border border-gray-400 p-4 flex-row items-center mb-2">
                    <Ionicons name="bag-outline" size={24} color={Colors.light.secondary} />
                    <View className="ml-3 flex-1">
                        <Text className="text-sm text-black">Mua lại</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={16} color="black" />
                </TouchableOpacity>
                <TouchableOpacity className="w-[49%] border border-gray-400 p-4 flex-row items-center mb-2 mr-[2%]">
                    <Ionicons name="people-outline" size={24} color={Colors.light.secondary} />
                    <View className="ml-3 flex-1">
                        <Text className="text-sm text-black">Kênh người sáng tạo</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={16} color="black" />
                </TouchableOpacity>
                <TouchableOpacity className="w-[49%] border border-gray-400 p-4 flex-row items-center mb-2">
                    <Ionicons name="card-outline" size={24} color={Colors.light.secondary} />
                    <View className="ml-3 flex-1">
                        <Text className="text-sm text-black">Số dư TK Shopee</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={16} color="black" />
                </TouchableOpacity>
                <TouchableOpacity className="w-[49%] border border-gray-400 p-4 flex-row items-center mr-[2%]">
                    <Ionicons name="storefront-outline" size={24} color={Colors.light.secondary} />
                    <View className="ml-3 flex-1">
                        <Text className="text-sm text-black">Shopee Tiếp Thị Liên Kết</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={16} color="black" />
                </TouchableOpacity>
                <TouchableOpacity className="w-[49%] border border-gray-400 p-4 flex-row items-center">
                    <Ionicons name="heart-outline" size={24} color={Colors.light.secondary} />
                    <View className="ml-3 flex-1">
                        <Text className="text-sm text-black">Đã thích</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={16} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
