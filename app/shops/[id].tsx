import ShopBannerWithOverlay from "@/components/shop-banner-with-overlay";
import ShopFlashSale from "@/components/shop-flash-sale";
import ShopHeaderAnimated from "@/components/shop-header-animated";
import ShopRecommendations from "@/components/shop-recommendations";
import ShopTabs from "@/components/shop-tabs";
import ShopVoucherSection from "@/components/shop-voucher-section";
import { ProductItemType } from "@/constants/product";
import { useLocalSearchParams } from "expo-router";
import React, { useRef, useState } from "react";
import { Animated, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Mock data
const SHOP_DATA = {
    name: "GLO OO",
    avatar: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp",
    banner: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp",
    rating: 4.9,
    followers: "3,6k",
    videoCount: "100k",
    viewCount: "100k+",
};

const VOUCHERS = [
    {
        id: "1",
        discount: "Giảm 2,5kđ",
        minOrder: "100kđ",
        validUntil: "18.12.2025",
        isNew: true,
    },
    {
        id: "2",
        discount: "Giảm 2,5kđ",
        minOrder: "100kđ",
        validUntil: "18.12.2025",
        isNew: false,
    },
];

const FLASH_SALE_PRODUCTS = [
    {
        id: "1",
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp",
        originalPrice: 84000,
        salePrice: 78500,
        discount: "45%",
        badge: "GLO",
    },
    {
        id: "2",
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7aba9df.webp",
        originalPrice: 238000,
        salePrice: 79500,
        discount: "57%",
        badge: "GLO",
    },
    {
        id: "3",
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7bpup65.webp",
        originalPrice: 150000,
        salePrice: 92000,
        discount: "38%",
    },
];

const RECOMMENDED_PRODUCTS: ProductItemType[] = [
    {
        id: "1",
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp",
        title: "Áo sơ mi nam trắng GLO basic",
        price: 78500,
        originalPrice: 84000,
        rating: 4.9,
        sold: 2500,
        location: "TP. Hồ Chí Minh",
        deliveryTime: "Giao thứ 2",
        hasVoucherXtra: true,
        discount: "45%",
    },
    {
        id: "2",
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7aba9df.webp",
        title: "Áo polo nam đen GLO premium",
        price: 79500,
        originalPrice: 238000,
        rating: 4.8,
        sold: 1800,
        location: "TP. Hồ Chí Minh",
        deliveryTime: "Giao thứ 3",
        discount: "57%",
        isTrending: true,
    },
    {
        id: "3",
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7bpup65.webp",
        title: "Áo sơ mi kẻ sọc GLO",
        price: 92000,
        originalPrice: 150000,
        rating: 4.7,
        sold: 3200,
        location: "TP. Hồ Chí Minh",
        deliveryTime: "Giao thứ 2",
        discount: "38%",
    },
    {
        id: "4",
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7eiq5f8.webp",
        title: "Áo thun nam GLO basic",
        price: 65000,
        originalPrice: 120000,
        rating: 4.9,
        sold: 4100,
        location: "TP. Hồ Chí Minh",
        deliveryTime: "Giao thứ 4",
        hasVoucherXtra: true,
        discount: "46%",
    },
];

export default function ShopDetailScreen() {
    const insets = useSafeAreaInsets();
    const params = useLocalSearchParams();
    const [activeTab, setActiveTab] = useState("Shop");
    const scrollY = useRef(new Animated.Value(0)).current;

    // Flash sale end time (1 hour from now)
    const flashSaleEndTime = new Date(Date.now() + 60 * 60 * 1000);

    return (
        <View className="flex-1 bg-gray-50" style={{ paddingTop: insets.top }}>
            {/* Animated Header */}
            <ShopHeaderAnimated scrollY={scrollY} />

            <Animated.ScrollView
                className="flex-1"
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
            >
                {/* Banner with Overlay */}
                <ShopBannerWithOverlay
                    imageUrl={SHOP_DATA.banner}
                    shopName={SHOP_DATA.name}
                    shopAvatar={SHOP_DATA.avatar}
                    rating={SHOP_DATA.rating}
                    followers={SHOP_DATA.followers}
                    videoCount={SHOP_DATA.videoCount}
                />

                {/* Tabs */}
                <ShopTabs activeTab={activeTab} onTabChange={setActiveTab} />

                {/* Vouchers */}
                <ShopVoucherSection vouchers={VOUCHERS} />

                {/* Flash Sale */}
                <View className="mt-2">
                    <ShopFlashSale products={FLASH_SALE_PRODUCTS} endTime={flashSaleEndTime} />
                </View>

                {/* Recommendations */}
                <View className="mt-2">
                    <ShopRecommendations products={RECOMMENDED_PRODUCTS} />
                </View>
            </Animated.ScrollView>
        </View>
    );
}
