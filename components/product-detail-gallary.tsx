import { PRODUCT_IMAGES } from "@/app/products/[id]";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import ProductTitleSection from "./product-title-section";

const { width, height } = Dimensions.get("window");
const SLIDER_HEIGHT = height * 0.45; // Gần 1/2 chiều cao màn hình

export default function ProductDetailGallary() {
    const carouselRef = useRef<ICarouselInstance>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleThumbnailPress = (index: number) => {
        carouselRef.current?.scrollTo({ index, animated: true });
        setCurrentIndex(index);
    };

    return (
        <View>
            {/* Main Slider */}
            <View className="relative bg-white">
                <Carousel
                    ref={carouselRef}
                    loop={false}
                    width={width}
                    height={SLIDER_HEIGHT}
                    data={PRODUCT_IMAGES}
                    scrollAnimationDuration={300}
                    onSnapToItem={(index) => setCurrentIndex(index)}
                    renderItem={({ item }) => (
                        <View style={{ width, height: SLIDER_HEIGHT }}>
                            <Image
                                source={{ uri: item }}
                                style={{ width: '100%', height: '100%' }}
                                resizeMode="contain"
                            />
                        </View>
                    )}
                />

                {/* Image Counter */}
                <View className="absolute bottom-3 right-3 bg-black/60 px-2.5 py-1 rounded-full">
                    <Text className="text-white text-sm font-medium">
                        {currentIndex + 1}/{PRODUCT_IMAGES.length}
                    </Text>
                </View>

                {/* Voucher XTRA Badge */}
                <View className="absolute bottom-3 left-3 bg-yellow-400 px-2 py-1 rounded">
                    <Text className="text-md font-bold text-black">VOUCHER</Text>
                    <Text className="text-md font-bold text-black">XTRA</Text>
                </View>
            </View>

            {/* Price Section */}
            <View className="px-4 py-3 bg-white">
                <View className="flex-row items-baseline mb-1">
                    <Text className="text-2xl font-bold text-red-500">388.368</Text>
                    <Text className="text-2xl font-bold text-red-500">₫</Text>
                    <View className="bg-gray-100 px-2 py-0.5 rounded ml-2">
                        <Text className="text-xs text-black">Giá Sau Voucher</Text>
                    </View>
                </View>
                <View className="flex-row items-center mb-1">
                    <Text className="text-sm text-black">Chỉ từ 388.368₫ x 1 kỳ với OPayLater</Text>
                    <Ionicons name="chevron-forward" size={14} color="black" style={{ marginLeft: 4 }} />
                </View>
                <View className="flex-row items-center">
                    <Text className="text-sm text-black">Đã bán 85</Text>
                    <Ionicons name="heart-outline" size={16} color="black" style={{ marginLeft: 8 }} />
                </View>
            </View>

            {/* Product Title */}
            <ProductTitleSection title="Mô hình BANDAI đấu sĩ LBX tổng hợp (NEW SEAL)" />

            {/* Thumbnail Gallery */}
            <View className="px-4 py-3 bg-white border-t border-gray-100">
                <Text className="text-sm text-black mb-2">
                    {PRODUCT_IMAGES.length} phân loại có sẵn
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {PRODUCT_IMAGES.map((image, index) => (
                        <TouchableOpacity
                            key={index}
                            className="mr-2"
                            onPress={() => handleThumbnailPress(index)}
                        >
                            <View
                                className={`w-16 h-16 rounded overflow-hidden ${currentIndex === index ? 'border-2 border-secondary' : 'border border-gray-200'
                                    }`}
                            >
                                <Image
                                    source={{ uri: image }}
                                    className="w-full h-full"
                                    resizeMode="cover"
                                />
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}