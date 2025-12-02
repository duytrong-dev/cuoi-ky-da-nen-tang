import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeHeader() {
    const insets = useSafeAreaInsets();
    const router = useRouter();

    return (
        <View
            style={{ paddingTop: insets.top }}
            className="bg-white pb-2"
        >
            <View className="flex-row items-center px-3 pt-2">
                {/* Search Bar */}
                <TouchableOpacity
                    className="flex-1 flex-row items-center bg-white rounded-md px-3 py-2 mr-3 border border-gray-400"
                    onPress={() => router.push("/search")}
                    activeOpacity={0.7}
                >
                    <Ionicons name="search" size={20} color="gray" />
                    <Text className="flex-1 ml-2 text-base text-gray-600">
                        Tìm kiếm sản phẩm
                    </Text>
                    <Ionicons name="camera-outline" size={22} color="gray" />
                </TouchableOpacity>

                {/* Icons */}
                <View className="flex-row items-center space-x-4">
                    <TouchableOpacity
                        className="relative mr-4"
                        onPress={() => router.push("/orders/cart")}
                    >
                        <Ionicons name="cart-outline" size={26} />
                        <View className="absolute -top-1 -right-2 bg-red-500 rounded-full min-w-[16px] h-4 items-center justify-center px-1">
                            <Text className="text-[10px] font-bold text-white">5</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.push("/chats")}>
                        <Ionicons
                            name="chatbubble-ellipses-outline"
                            size={26}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
