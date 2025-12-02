import BottomActionBar from "@/components/bottom-action-bar";
import DeliveryInfoSection from "@/components/delivery-info-section";
import FreeShippingBanner from "@/components/free-shipping-banner";
import ProductDescription from "@/components/product-description";
import ProductDetailGallary from "@/components/product-detail-gallary";
import ProductDetailHeader from "@/components/product-detail-header";
import ProductSpecifications from "@/components/product-specifications";
import ProductVideosSection from "@/components/product-videos-section";
import RecommendationSection from "@/components/recommendation-section";
import ReturnPolicyBanner from "@/components/return-policy-banner";
import ReviewFilterTags from "@/components/review-filter-tags";
import { Review } from "@/components/review-item";
import ReviewsSection from "@/components/reviews-section";
import ShopInfoCard from "@/components/shop-info-card";
import ShopProductsCarousel from "@/components/shop-products-carousel";
import SPayLaterBanner from "@/components/spaylater-banner";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Animated,
  View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const PRODUCT_IMAGES = [
  "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp",
  "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7aba9df.webp",
  "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7bpup65.webp",
  "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7eiq5f8.webp",
  "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax78wptcb.webp",
  "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7bpl989.webp",
];

const REVIEWS: Review[] = [
  {
    id: 1,
    username: "gunbi309",
    rating: 5,
    helpful: 6,
    variant: "Achilles",
    comment: "Mới lắp xong luôn, nghịch 1 lúc thì mình thấy khớp của nó rất chắc chắn và gắn như ko có chỗ nào để kẻ lên nên lắp rất...",
    images: [
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp",
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp",
    ],
    hasVideo: true,
    videoDuration: "0:22",
  },
  {
    id: 2,
    username: "nguyennhat297",
    rating: 5,
    helpful: 31,
    variant: "Achilles",
    color: "Hơi cũ với bụi",
    quality: "Tốt",
  },
];

const SHOP_INFO = {
  name: "DNX FIGURE",
  avatar: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp",
  badge: "Yêu thích+",
  location: "Đà Nẵng",
  rating: 5.0,
  productCount: "1,4k",
  chatResponseRate: "100%",
};

export default function ProductDetailScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const params = useLocalSearchParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View className="flex-1 bg-white" style={{ paddingTop: insets.top }}>
      {/* Header */}
      <ProductDetailHeader scrollY={scrollY} />

      <Animated.ScrollView
        className="flex-1"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {/* Image Gallery */}
        <ProductDetailGallary />

        {/* Free Shipping */}
        <FreeShippingBanner />

        {/* Delivery Info */}
        <DeliveryInfoSection />

        {/* Return Policy */}
        <ReturnPolicyBanner />

        {/* SPayLater */}
        <SPayLaterBanner />

        {/* Reviews Section */}
        <ReviewsSection reviews={REVIEWS} averageRating={5} />

        {/* Shop Reviews Filter */}
        <ReviewFilterTags />

        {/* Product Videos */}
        <ProductVideosSection />

        {/* Shop Info */}
        <ShopInfoCard shop={SHOP_INFO} />

        {/* Shop Products */}
        <ShopProductsCarousel />

        {/* Product Specifications */}
        <ProductSpecifications />

        {/* Product Description */}
        <ProductDescription />

        {/* Recommended Products */}
        <RecommendationSection />
      </Animated.ScrollView>

      {/* Bottom Action Bar */}
      <BottomActionBar />
    </View>
  );
}
