import ProductItem from "@/components/product-item";
import ShopBannerWithOverlay from "@/components/shop-banner-with-overlay";
import ShopCategoriesList from "@/components/shop-categories-list";
import ShopFlashSale from "@/components/shop-flash-sale";
import ShopHeaderAnimated from "@/components/shop-header-animated";
import ShopProductFilters from "@/components/shop-product-filters";
import ShopPromoBanner from "@/components/shop-promo-banner";
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
    },
    {
        id: "2",
        discount: "Giảm 2,5kđ",
        minOrder: "100kđ",
        validUntil: "18.12.2025",
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

const CATEGORIES = [
    {
        id: "1",
        name: "Áo sơ mi tay ngắn",
        productCount: 2,
        thumbnail: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp",
    },
    {
        id: "2",
        name: "áo sơ mi tay dài",
        productCount: 1,
        thumbnail: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7aba9df.webp",
    },
    {
        id: "3",
        name: "Áo Thun",
        productCount: 4,
        thumbnail: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7bpup65.webp",
    },
    {
        id: "4",
        name: "Áo Ba Lỗ",
        productCount: 1,
        thumbnail: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7eiq5f8.webp",
    },
    {
        id: "5",
        name: "Áo Polo",
        productCount: 2,
        thumbnail: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp",
    },
    {
        id: "6",
        name: "Quần Đùi/Quần Short",
        productCount: 1,
        thumbnail: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7aba9df.webp",
    },
    {
        id: "7",
        name: "Sản phẩm",
        productCount: 36,
        thumbnail: "package",
    },
];

export default function ShopDetailScreen() {
    const insets = useSafeAreaInsets();
    const params = useLocalSearchParams();
    const [activeTab, setActiveTab] = useState("Shop");
    const [selectedProductFilter, setSelectedProductFilter] = useState("popular");
    const scrollY = useRef(new Animated.Value(0)).current;

    // Flash sale end time (1 hour from now)
    const flashSaleEndTime = new Date(Date.now() + 60 * 60 * 1000);

    return (
        <View className="flex-1 bg-gray-50">
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

                {/* Product Filters - Only show when "Sản phẩm" tab is active */}
                {activeTab === "Sản phẩm" && (
                    <ShopProductFilters
                        selectedFilter={selectedProductFilter}
                        onFilterChange={setSelectedProductFilter}
                    />
                )}

                {/* Content based on active tab */}
                {activeTab === "Shop" && (
                    <>
                        {/* Vouchers */}
                        <ShopVoucherSection vouchers={VOUCHERS} />

                        {/* Flash Sale */}
                        <View className="mt-2">
                            <ShopFlashSale products={FLASH_SALE_PRODUCTS} endTime={flashSaleEndTime} />
                        </View>

                        {/* Promo Banner & Shop Introduction */}
                        <View className="mt-2">
                            <ShopPromoBanner
                                shopName={SHOP_DATA.name}
                                shopAvatar={SHOP_DATA.avatar}
                                rating={SHOP_DATA.rating}
                                productCount={36}
                                responseRate="99%"
                            />
                        </View>
                    </>
                )}

                {activeTab === "Sản phẩm" && (
                    <>
                        {/* Product Grid */}
                        <View className="bg-white px-2 py-2">
                            <View className="flex-row flex-wrap">
                                {RECOMMENDED_PRODUCTS.map((product) => (
                                    <View key={product.id} style={{ width: '50%' }}>
                                        <ProductItem item={product} />
                                    </View>
                                ))}
                            </View>
                        </View>
                    </>
                )}

                {activeTab === "Danh mục hàng" && (
                    <View className="mt-2">
                        <ShopCategoriesList categories={CATEGORIES} />
                    </View>
                )}
            </Animated.ScrollView>
        </View>
    );
}
