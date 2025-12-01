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
            className="bg-transparent pb-2"
        >
            <View className="flex-row items-center px-3 pt-2">
                {/* Search Bar */}
                <TouchableOpacity
                    className="flex-1 flex-row items-center bg-gray-100 rounded-md px-3 py-2 mr-3 border border-black"
                    onPress={() => router.push("/search")}
                    activeOpacity={0.7}
                >
                    <Ionicons name="search" size={20} />
                    <Text className="flex-1 ml-2 text-base">
                        Tìm kiếm
                    </Text>
                    <Ionicons name="camera-outline" size={22} />
                </TouchableOpacity>

                {/* Icons */}
                <View className="flex-row items-center space-x-4">
                    <TouchableOpacity
                        className="relative mr-4"
                        onPress={() => router.push("/cart")}
                    >
                        <Ionicons name="cart-outline" size={26} />
                        <View className="absolute -top-1 -right-2 bg-primary rounded-full min-w-[16px] h-4 items-center justify-center px-1 border border-black">
                            <Text className="text-[10px] font-bold">5</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.push("/chat")}>
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
