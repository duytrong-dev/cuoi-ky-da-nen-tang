import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ProductDetailHeaderProps {
    scrollY: Animated.Value;
}

export default function ProductDetailHeader({ scrollY }: ProductDetailHeaderProps) {
    const insets = useSafeAreaInsets();
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
        outputRange: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)'],
        extrapolate: 'clamp',
    });

    // Animate search bar opacity
    const searchBarOpacity = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });

    // Animate icon background color
    const iconBackgroundColor = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: ['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0)'],
        extrapolate: 'clamp',
    });

    const iconColor = isScrolled ? 'black' : 'black';

    return (
        <Animated.View
            className="absolute top-0 left-0 right-0 z-10"
            style={{
                paddingTop: insets.top,
                backgroundColor: headerBackgroundColor,
                borderBottomWidth: isScrolled ? 1 : 0,
                borderBottomColor: '#f0f0f0',
            }}
        >
            <View className="flex-row items-center justify-between px-4 py-3">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="w-10 h-10 rounded-full items-center justify-center"
                    style={{ backgroundColor: iconBackgroundColor } as any}
                >
                    <Ionicons name="arrow-back" size={24} color={iconColor} />
                </TouchableOpacity>

                {/* Search Bar - Shows when scrolled */}
                <Animated.View
                    className="flex-1 mx-3"
                    style={{ opacity: searchBarOpacity }}
                    pointerEvents={isScrolled ? 'auto' : 'none'}
                >
                    <TouchableOpacity
                        className="flex-row items-center rounded-md px-3 py-2 border border-black"
                        onPress={() => router.push("/search")}
                        activeOpacity={0.7}
                    >
                        <Ionicons name="search" size={18} color="black" />
                        <Text className="flex-1 ml-2 text-md text-black">
                            Tìm kiếm sản phẩm
                        </Text>
                    </TouchableOpacity>
                </Animated.View>

                <View className="flex-row items-center gap-3">
                    <TouchableOpacity
                        className="w-10 h-10 rounded-full items-center justify-center"
                        style={{ backgroundColor: iconBackgroundColor } as any}
                    >
                        <Ionicons name="share-outline" size={22} color={iconColor} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="w-10 h-10 rounded-full items-center justify-center relative"
                        style={{ backgroundColor: iconBackgroundColor } as any}
                    >
                        <Ionicons name="cart-outline" size={22} color={iconColor} />
                        <View className="absolute -top-1 -right-1 bg-primary rounded-full w-5 h-5 items-center justify-center border">
                            <Text className="text-black text-xs font-bold">2</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="w-10 h-10 rounded-full items-center justify-center"
                        style={{ backgroundColor: iconBackgroundColor } as any}
                    >
                        <Ionicons name="ellipsis-horizontal" size={22} color={iconColor} />
                    </TouchableOpacity>
                </View>
            </View>
        </Animated.View>
    );
}