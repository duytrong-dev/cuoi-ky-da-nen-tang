import React, { useEffect, useRef, useState } from "react";
import { Dimensions, Image, ScrollView, TouchableOpacity, View } from "react-native";

const { width } = Dimensions.get("window");

const banners = [
    "https://down-vn.img.susercontent.com/file/vn-11134258-820l4-mf82135tct8s16@resize_w1594_nl.webp",
    "https://down-vn.img.susercontent.com/file/sg-11134258-821dc-mh9y5ps6n6rzaf@resize_w1594_nl.webp",
    "https://down-vn.img.susercontent.com/file/vn-11134258-820l4-mha512nf4wei2f@resize_w796_nl.webp",
];

export default function BannerSlider() {
    const [active, setActive] = useState(0);
    const scrollRef = useRef<ScrollView>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextSlide = active === banners.length - 1 ? 0 : active + 1;
            scrollRef.current?.scrollTo({ x: nextSlide * width, animated: true });
        }, 4000);

        return () => clearInterval(interval);
    }, [active]);

    const onScroll = (nativeEvent: any) => {
        if (nativeEvent) {
            const slide = Math.ceil(
                nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
            );
            if (slide !== active) {
                setActive(slide);
            }
        }
    };

    const handleOnPress = (index: number) => {
        console.log(`Banner ${index} pressed`);
    };

    return (
        <View className="relative">
            <ScrollView
                ref={scrollRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={({ nativeEvent }) => onScroll(nativeEvent)}
                scrollEventThrottle={16}
                className="w-full h-52"
            >
                {banners.map((image, index) => (
                    <TouchableOpacity key={index} onPress={() => handleOnPress(index)}>
                        <Image
                            source={{ uri: image }}
                            style={{ width, height: 208 }}
                            className="h-full"
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <View className="absolute bottom-2 left-0 right-0 flex-row justify-center space-x-1">
                {banners.map((_, index) => (
                    <View
                        key={index}
                        className={`w-2 h-2 rounded-full mx-1 ${active === index ? "bg-white" : "bg-white/50"}`}
                    />
                ))}
            </View>
        </View>
    );
}
