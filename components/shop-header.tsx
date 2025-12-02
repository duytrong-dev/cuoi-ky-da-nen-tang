import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

export default function ShopHeader() {
    const router = useRouter();

    return (
        <View className="bg-white px-4 py-3">
            <View className="flex-row items-center">
                {/* Back Button */}
                <TouchableOpacity onPress={() => router.back()} className="mr-3">
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>

                {/* Search Bar */}
                <View className="flex-1 flex-row items-center bg-gray-100 rounded-md px-3 py-2">
                    <Ionicons name="search" size={18} color="#999" />
                    <TextInput
                        placeholder="Tìm kiếm sản phẩm trong Shop"
                        placeholderTextColor="#999"
                        className="flex-1 ml-2 text-sm"
                    />
                </View>

                {/* More Options */}
                <TouchableOpacity className="ml-3">
                    <Ionicons name="ellipsis-vertical" size={24} color="#000" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
