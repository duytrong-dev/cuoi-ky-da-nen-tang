import CartIconWithBadge from "@/components/cart-icon-with-badge";
import HeaderIconButton from "@/components/header-icon-button";
import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface ProfileHeaderProps {
    isLoggedIn: boolean;
}

export default function ProfileHeader({ isLoggedIn }: ProfileHeaderProps) {
    const router = useRouter();

    if (isLoggedIn) {
        return (
            <View className="bg-primary-light px-4 pb-8 pt-16">
                {/* Top Icons */}
                <View className="flex-row justify-between items-center mb-10">
                    <View className="flex-row items-center gap-4 bg-white rounded-full">
                        <TouchableOpacity className="flex-row items-center justify-center gap-2 px-4 py-1 rounded-full">
                            <Ionicons name="storefront-outline" size={22} color="black" />
                            <Text className="font-medium text-md">Bắt đầu bán</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row items-center gap-4">
                        <HeaderIconButton
                            iconName="settings-outline"
                            onPress={() => router.push("/settings")}
                            color="white"
                            size={26}
                        />
                        <CartIconWithBadge
                            count={5}
                            onPress={() => router.push("/cart")}
                            color="white"
                            badgeColor="white"
                            badgeTextColor={Colors.light.primary}
                        />
                        <HeaderIconButton
                            iconName="chatbubble-ellipses-outline"
                            onPress={() => router.push("/chat")}
                            color="white"
                            size={26}
                        />
                    </View>
                </View>

                {/* User Profile */}
                <View className="flex-row items-center">
                    <View className="relative">
                        <Image
                            source={{ uri: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp" }}
                            className="w-16 h-16 rounded-full"
                        />
                        <View className="absolute bottom-0 right-0 bg-gray-600 rounded-full p-1">
                            <Ionicons name="camera" size={12} color="white" />
                        </View>
                    </View>
                    <View className="ml-3 flex-1">
                        <View className="flex-row items-center">
                            <Text className="text-white text-xl font-medium">vf28o_pmef</Text>
                            <View className="bg-pink-100 px-2 py-0.5 rounded-full ml-2">
                                <Text className="text-primary text-xs">Thành viên</Text>
                            </View>
                        </View>
                        <View className="flex-row mt-2">
                            <Text className="text-white text-md">0 Người theo dõi</Text>
                            <Text className="text-white text-md ml-4">3 Đang theo dõi</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    // Not logged in view
    return (
        <View className="bg-secondary-light px-4 pb-6 pt-12">
            <View className="flex-row justify-between items-center">
                {/* Avatar Icon */}
                <View className="w-16 h-16 rounded-full bg-white items-center justify-center cursor-pointer mt-4">
                    <Ionicons name="person" size={32} color={Colors.light.secondary} />
                </View>

                {/* Right Icons */}
                <View className="flex-row items-center gap-4">
                    <HeaderIconButton
                        iconName="settings-outline"
                        onPress={() => router.push("/settings")}
                        color="black"
                        size={26}
                    />
                    <HeaderIconButton
                        iconName="cart-outline"
                        onPress={() => router.push("/cart")}
                        color="black"
                        size={26}
                    />
                    <HeaderIconButton
                        iconName="chatbubble-ellipses-outline"
                        onPress={() => router.push("/chat")}
                        color="black"
                        size={26}
                    />
                </View>
            </View>

            {/* Login/Register Buttons */}
            <View className="flex-row gap-3 mt-6">
                <TouchableOpacity
                    className="bg-white px-6 py-2 rounded border border-gray-300"
                    onPress={() => router.push("/login")}
                >
                    <Text className="text-gray-700 font-medium text-base">Đăng nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="bg-secondary px-6 py-2 rounded"
                    onPress={() => router.push("/register")}
                >
                    <Text className="text-white font-medium text-base">Đăng ký</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
