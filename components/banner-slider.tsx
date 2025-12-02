import { banners } from "@/constants/banner";
import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, Image, TouchableOpacity, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance, Pagination } from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

export default function BannerSlider() {
    const progress = useSharedValue<number>(0);
    const ref = React.useRef<ICarouselInstance>(null);

    const onPressPagination = (index: number) => {
        ref.current?.scrollTo({
            count: index - progress.value,
            animated: true,
        });
    };

    const handlePrev = () => {
        ref.current?.prev();
    };

    const handleNext = () => {
        ref.current?.next();
    };

    return (
        <View className="relative px-2 py-2">
            <View className="rounded-2xl overflow-hidden">
                <Carousel
                    ref={ref}
                    loop
                    width={width - 16}
                    height={200}
                    autoPlay={true}
                    data={banners}
                    scrollAnimationDuration={2000}
                    onProgressChange={progress}
                    renderItem={({ item }) => (
                        <TouchableOpacity key={item.id} activeOpacity={0.9}>
                            <Image
                                source={item.image}
                                style={{ width: width - 16, height: 200 }}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                    )}
                />
            </View>

            {/* Left Arrow */}
            <TouchableOpacity
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 rounded-full w-10 h-10 items-center justify-center"
                onPress={handlePrev}
            >
                <Ionicons name="chevron-back" size={24} color={Colors.light.secondary} />
            </TouchableOpacity>

            {/* Right Arrow */}
            <TouchableOpacity
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 rounded-full w-10 h-10 items-center justify-center"
                onPress={handleNext}
            >
                <Ionicons name="chevron-forward" size={24} color={Colors.light.secondary} />
            </TouchableOpacity>

            {/* Pagination Dots */}
            <View className="absolute bottom-4 left-0 right-0 items-center">
                <Pagination.Basic
                    progress={progress}
                    data={banners}
                    dotStyle={{
                        backgroundColor: "rgba(255,255,255,0.6)",
                        borderRadius: 50,
                        width: 8,
                        height: 8,
                    }}
                    activeDotStyle={{
                        backgroundColor: Colors.light.secondary,
                        borderRadius: 50,
                        width: 8,
                        height: 8,
                    }}
                    containerStyle={{
                        gap: 6,
                    }}
                    onPress={onPressPagination}
                />
            </View>
        </View>
    );
}
