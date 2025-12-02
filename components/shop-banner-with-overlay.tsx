import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

const { width } = Dimensions.get("window");

interface ShopBannerWithOverlayProps {
    imageUrl: string;
    shopName: string;
    shopAvatar: string;
    rating: number;
    followers: string;
    videoCount: string;
}

export default function ShopBannerWithOverlay({
    imageUrl,
    shopName,
    shopAvatar,
    rating,
    followers,
    videoCount,
}: ShopBannerWithOverlayProps) {
    const router = useRouter();

    return (
        <View className="relative">
            {/* Banner Image */}
            <Image
                source={{ uri: imageUrl }}
                style={{ width: width, height: 280 }}
                resizeMode="cover"
            />

            {/* Dark Overlay */}
            <LinearGradient
                colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.6)"]}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
            />

            {/* Shop Info Overlay */}
            <View className="absolute bottom-0 left-0 right-0 px-4 pb-8">
                <View className="flex-row items-center justify-between mb-8">
                    {/* Left: Avatar and Info */}
                    <View className="flex-row items-center flex-1">
                        <Image
                            source={{ uri: shopAvatar }}
                            style={{ width: 48, height: 48 }}
                            className="rounded-full border-2 border-white"
                        />
                        <View className="ml-3 flex-1">
                            <TouchableOpacity
                                onPress={() => router.push({
                                    pathname: "/shops/[id]/infomation",
                                    params: {
                                        id: shopName,
                                    }
                                })}
                                className="flex-row items-center"
                            >
                                <Text className="text-white text-base font-semibold">{shopName}</Text>
                                <Ionicons name="chevron-forward" size={16} color="#fff" />
                            </TouchableOpacity>
                            <View className="flex-row items-center mt-1">
                                <Ionicons name="star" size={14} color="#FFD700" />
                                <Text className="text-white text-sm ml-1">{rating}</Text>
                                <Text className="text-white text-sm mx-2">|</Text>
                                <Text className="text-white text-sm">{followers} Người theo dõi</Text>
                            </View>
                        </View>
                    </View>

                    {/* Right: Action Buttons */}
                    <View className="flex-row items-center">
                        <TouchableOpacity className="bg-secondary px-4 py-2 rounded mr-2">
                            <Text className="text-white text-sm font-medium">+ Theo dõi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-white/20 px-3 py-2 rounded border border-white/40">
                            <Ionicons name="chatbubble-outline" size={18} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Video Section */}
                <TouchableOpacity className="flex-row items-center bg-white/10 px-3 py-2 rounded border border-white/20">
                    <Ionicons name="play-circle-outline" size={20} color="#fff" />
                    <Text className="text-white text-sm ml-2">Video sản phẩm</Text>
                    <Text className="text-white/70 text-sm ml-2">{videoCount}+ Lượt xem</Text>
                    <Ionicons name="chevron-forward" size={16} color="#fff" style={{ marginLeft: "auto" }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
