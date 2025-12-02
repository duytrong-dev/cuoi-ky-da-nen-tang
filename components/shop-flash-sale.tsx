import { formatVND } from "@/utils/formatVND";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

interface FlashSaleProduct {
    id: string;
    image: string;
    originalPrice: number;
    salePrice: number;
    discount: string;
    badge?: string;
}

interface ShopFlashSaleProps {
    products: FlashSaleProduct[];
    endTime: Date;
}

export default function ShopFlashSale({ products, endTime }: ShopFlashSaleProps) {
    const router = useRouter();
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = endTime.getTime() - now;

            if (distance < 0) {
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [endTime]);

    const formatTime = (num: number) => String(num).padStart(2, "0");

    return (
        <View className="bg-white py-3">
            {/* Header */}
            <View className="flex-row items-center justify-between px-4 mb-3">
                <View className="flex-row items-center">
                    <Text className="text-lg font-bold text-red-600">FLASH SALE</Text>
                    <View className="flex-row items-center ml-3 bg-black px-2 py-1 rounded">
                        <Text className="text-white text-xs font-bold">
                            {formatTime(timeLeft.hours)}
                        </Text>
                    </View>
                    <Text className="text-black text-xs mx-1">:</Text>
                    <View className="bg-black px-2 py-1 rounded">
                        <Text className="text-white text-xs font-bold">
                            {formatTime(timeLeft.minutes)}
                        </Text>
                    </View>
                    <Text className="text-black text-xs mx-1">:</Text>
                    <View className="bg-black px-2 py-1 rounded">
                        <Text className="text-white text-xs font-bold">
                            {formatTime(timeLeft.seconds)}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity className="flex-row items-center">
                    <Text className="text-red-500 text-sm">Tìm hiểu ngay</Text>
                    <Ionicons name="chevron-forward" size={16} color="red" />
                </TouchableOpacity>
            </View>

            {/* Products */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
                {products.map((product) => (
                    <TouchableOpacity
                        key={product.id}
                        onPress={() => router.push(`/products/${product.id}`)}
                        className="mr-3"
                        style={{ width: 120 }}
                    >
                        <View className="relative">
                            <Image
                                source={{ uri: product.image }}
                                style={{ width: 120, height: 120 }}
                                className="rounded-md"
                            />
                            {product.discount && (
                                <View className="absolute top-0 right-0 bg-yellow-400 px-1.5">
                                    <Text className="text-xs font-bold text-black">
                                        {product.discount}
                                    </Text>
                                </View>
                            )}
                            {product.badge && (
                                <View className="absolute top-0 left-0 bg-primary px-1.5 py-0.5 rounded-br">
                                    <Text className="text-white text-xs font-bold">{product.badge}</Text>
                                </View>
                            )}
                        </View>
                        <View className="mt-2">
                            <Text className="text-xs text-gray-400 line-through">
                                {formatVND(product.originalPrice)}
                            </Text>
                            <Text className="text-red-600 font-bold text-sm">
                                {formatVND(product.salePrice)}
                            </Text>
                        </View>
                        <TouchableOpacity className="bg-primary mt-2 py-1 rounded">
                            <Text className="text-white text-center text-xs font-medium">
                                ĐANG BÁN CHẠY
                            </Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}
