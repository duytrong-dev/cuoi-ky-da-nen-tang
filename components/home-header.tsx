import { Colors } from "@/constants/theme";
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
                    className="flex-1 flex-row items-center bg-gray-100 rounded-md px-3 py-2 mr-3 border border-gray-200"
                    onPress={() => router.push("/search")}
                    activeOpacity={0.7}
                >
                    <Ionicons name="search" size={20} color="#666" />
                    <Text className="flex-1 ml-2 text-base" style={{ color: "#EE4D2D" }}>
                        Ram DDR5 8gb
                    </Text>
                    <Ionicons name="camera-outline" size={22} color="#666" />
                </TouchableOpacity>

                {/* Icons */}
                <View className="flex-row items-center space-x-4">
                    <TouchableOpacity
                        className="relative mr-4"
                        onPress={() => router.push("/cart")}
                    >
                        <Ionicons name="cart-outline" size={26} color={Colors.light.primary} />
                        <View className="absolute -top-1 -right-2 bg-primary rounded-full min-w-[16px] h-4 items-center justify-center px-1 border border-white">
                            <Text className="text-white text-[10px] font-bold">5</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.push("/chat")}>
                        <Ionicons
                            name="chatbubble-ellipses-outline"
                            size={26}
                            color={Colors.light.primary}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
