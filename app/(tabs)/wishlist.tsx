import WishlistEmptyState from "@/components/wishlist-empty-state";
import WishlistProductCard from "@/components/wishlist-product-card";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface WishlistItem {
  id: string;
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  rating: number;
  sold: number;
  shop: string;
}

// Mock data
const WISHLIST_ITEMS: WishlistItem[] = [
  {
    id: "1",
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp",
    title: "Áo sơ mi nam trắng GLO basic cao cấp",
    price: 78500,
    originalPrice: 84000,
    discount: "45%",
    rating: 4.9,
    sold: 2500,
    shop: "GLO OO",
  },
  {
    id: "2",
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7aba9df.webp",
    title: "Áo polo nam đen GLO premium",
    price: 79500,
    originalPrice: 238000,
    discount: "57%",
    rating: 4.8,
    sold: 1800,
    shop: "GLO OO",
  },
  {
    id: "3",
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7bpup65.webp",
    title: "Áo sơ mi kẻ sọc GLO",
    price: 92000,
    originalPrice: 150000,
    discount: "38%",
    rating: 4.7,
    sold: 3200,
    shop: "GLO OO",
  },
  {
    id: "4",
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7eiq5f8.webp",
    title: "Áo thun nam GLO basic",
    price: 65000,
    originalPrice: 120000,
    discount: "46%",
    rating: 4.9,
    sold: 4100,
    shop: "GLO OO",
  },
];

export default function WishlistScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [wishlistItems, setWishlistItems] = useState(WISHLIST_ITEMS);

  const removeFromWishlist = (id: string) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <View className="flex-1 bg-gray-50">

      {/* Content */}
      {wishlistItems.length === 0 ? (
        <WishlistEmptyState />
      ) : (
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="p-2">
            {/* Product Grid */}
            <View className="flex-row flex-wrap">
              {wishlistItems.map((item) => (
                <WishlistProductCard
                  key={item.id}
                  {...item}
                  onRemove={removeFromWishlist}
                />
              ))}
            </View>
          </View>

          {/* Bottom Spacing */}
          <View style={{ height: insets.bottom + 20 }} />
        </ScrollView>
      )}

      {/* Floating Action Button */}
      {wishlistItems.length > 0 && (
        <TouchableOpacity
          onPress={() => router.push("/")}
          className="absolute bottom-6 right-6 bg-secondary rounded-full p-4 shadow-lg"
          style={{ marginBottom: insets.bottom - 12 }}
        >
          <Ionicons name="add" size={28} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
}
