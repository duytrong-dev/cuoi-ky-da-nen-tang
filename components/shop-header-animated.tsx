import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Animated, TextInput, TouchableOpacity, View } from "react-native";

interface ShopHeaderAnimatedProps {
    scrollY: Animated.Value;
}

export default function ShopHeaderAnimated({ scrollY }: ShopHeaderAnimatedProps) {
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const listenerId = scrollY.addListener(({ value }) => {
            setIsScrolled(value > 50);
        });

        return () => {
            scrollY.removeListener(listenerId);
        };
    }, [scrollY]);

    // Animate background color based on scroll
    const headerBackgroundColor = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"],
        extrapolate: "clamp",
    });

    // Animate search bar visibility
    const searchBarOpacity = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1],
        extrapolate: "clamp",
    });

    // Animate icon background color
    const iconBackgroundColor = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: ["rgba(0, 0, 0, 0.3)", "rgba(0, 0, 0, 0)"],
        extrapolate: "clamp",
    });

    const iconColor = isScrolled ? "#000" : "#fff";

    return (
        <Animated.View
            className="absolute top-0 left-0 right-0 z-10"
            style={{
                backgroundColor: headerBackgroundColor,
                borderBottomWidth: isScrolled ? 1 : 0,
                borderBottomColor: "#f0f0f0",
            }}
        >
            <View className="flex-row items-center px-4 py-3">
                {/* Back Button */}
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="w-10 h-10 rounded-full items-center justify-center mr-3"
                    style={{ backgroundColor: iconBackgroundColor } as any}
                >
                    <Ionicons name="arrow-back" size={24} color={iconColor} />
                </TouchableOpacity>

                {/* Search Bar - Shows when scrolled */}
                <Animated.View
                    className="flex-1"
                    style={{ opacity: searchBarOpacity }}
                    pointerEvents={isScrolled ? "auto" : "none"}
                >
                    <View className="flex-row items-center bg-gray-100 rounded-md px-3 py-2">
                        <Ionicons name="search" size={18} color="#999" />
                        <TextInput
                            placeholder="Tìm kiếm sản phẩm trong Shop"
                            placeholderTextColor="#999"
                            className="flex-1 ml-2 text-sm"
                        />
                    </View>
                </Animated.View>

                {/* More Options */}
                <TouchableOpacity
                    className="w-10 h-10 rounded-full items-center justify-center ml-3"
                    style={{ backgroundColor: iconBackgroundColor } as any}
                >
                    <Ionicons name="ellipsis-vertical" size={24} color={iconColor} />
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
}
