import OrderCard, { Order } from "@/components/order-card";
import OrderTabs, { OrderStatus } from "@/components/order-tabs";
import RecommendationSection from "@/components/recommendation-section";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    ScrollView,
    Text,
    View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ORDER_TABS: { key: OrderStatus; label: string }[] = [
    { key: "pending", label: "Chờ xác nhận" },
    { key: "pickup", label: "Chờ lấy hàng" },
    { key: "shipping", label: "Chờ giao hàng" },
    { key: "delivered", label: "Đã giao" },
    { key: "return", label: "Trả hàng" },
    { key: "cancelled", label: "Đã hủy" },
];

// Mock data for delivered orders
const DELIVERED_ORDERS: Order[] = [
    {
        id: 1,
        shopName: "WoO Clothes- Thời trang UNISEX",
        isFavorite: true,
        status: "Hoàn thành",
        deliveryDate: "",
        isLive: false,
        products: [
            {
                name: "Quần âu nam, quần tây nam chất liệu cao...",
                variant: "Đen, 30",
                image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lx8z8z8z8z8z8z",
                quantity: 1,
                originalPrice: 200000,
                price: 149000,
            }
        ],
        totalAmount: 125100,
        totalItems: 1,
        hasMore: false,
    },
    {
        id: 2,
        shopName: "POMEN",
        isFavorite: true,
        status: "Hoàn thành",
        deliveryDate: "",
        isLive: false,
        products: [
            {
                name: "Áo sơ mi ngắn tay form rộng, thời trang hi...",
                variant: "Đen, M",
                image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lx8z8z8z8z8z8z",
                quantity: 1,
                originalPrice: 95000,
                price: 87000,
            }
        ],
        totalAmount: 67000,
        totalItems: 1,
        hasMore: false,
    },
    {
        id: 3,
        shopName: "Nana flowers",
        isFavorite: false,
        status: "Hoàn thành",
        deliveryDate: "",
        isLive: false,
        products: [
            {
                name: "Kẹm nhung loại 1 làm hoa bó 100 cây lông...",
                variant: "Hồng đào, 50 cây",
                image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lx8z8z8z8z8z8z",
                quantity: 1,
                originalPrice: 25000,
                price: 16990,
            },
            {
                name: "Kẹm nhung loại 1 màu pastel cao cấp lông...",
                variant: "Trắng, 50 sợi",
                image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lx8z8z8z8z8z8z",
                quantity: 1,
                originalPrice: 24000,
                price: 16990,
            },
            {
                name: "Đèn led, đèn nháy trang trí hoa buổi tiệc l...",
                variant: "Màu vàng 1m, 1 cái",
                image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lx8z8z8z8z8z8z",
                quantity: 1,
                originalPrice: 15000,
                price: 9900,
            }
        ],
        totalAmount: 33880,
        totalItems: 3,
        hasMore: true,
    },
];

// Mock data for pending orders
const PENDING_ORDERS: Order[] = [
    {
        id: 4,
        shopName: "Mohicha",
        isFavorite: true,
        status: "Chờ thanh toán",
        deliveryDate: "",
        isLive: false,
        products: [
            {
                name: "Khăn da cửu thất chuyên dụng lau ống kín...",
                variant: "30x30 cm",
                image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lx8z8z8z8z8z8z",
                quantity: 1,
                originalPrice: 28000,
                price: 28000,
            }
        ],
        totalAmount: 8000,
        totalItems: 1,
        hasMore: false,
    },
];

// Mock data for pickup orders (Chờ lấy hàng)
const PICKUP_ORDERS: Order[] = [
    {
        id: 5,
        shopName: "Mohicha",
        isFavorite: true,
        status: "Chờ lấy hàng",
        deliveryDate: "2 Th12 - 3 Th12",
        isLive: false,
        products: [
            {
                name: "Khăn da cửu thất chuyên dụng lau ống kín...",
                variant: "30x30 cm",
                image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lx8z8z8z8z8z8z",
                quantity: 1,
                originalPrice: 28000,
                price: 28000,
            }
        ],
        totalAmount: 8000,
        totalItems: 1,
        hasMore: false,
    },
];

// Mock data for shipping orders (Chờ giao hàng)
const SHIPPING_ORDERS: Order[] = [
    {
        id: 6,
        shopName: "Fashion House",
        isFavorite: true,
        status: "Đang giao",
        deliveryDate: "5 Th12 - 7 Th12",
        isLive: false,
        products: [
            {
                name: "Áo thun nam basic cotton 100%",
                variant: "Trắng, L",
                image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lx8z8z8z8z8z8z",
                quantity: 2,
                originalPrice: 99000,
                price: 79000,
            }
        ],
        totalAmount: 158000,
        totalItems: 2,
        hasMore: false,
    },
];

// Mock data for return orders (Trả hàng)
const RETURN_ORDERS: Order[] = [
    {
        id: 7,
        shopName: "Electronics Shop",
        isFavorite: false,
        status: "Đang trả hàng",
        deliveryDate: "",
        isLive: false,
        products: [
            {
                name: "Chuột máy tính không dây",
                variant: "Đen",
                image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lx8z8z8z8z8z8z",
                quantity: 1,
                originalPrice: 200000,
                price: 180000,
            }
        ],
        totalAmount: 180000,
        totalItems: 1,
        hasMore: false,
    },
];

// Mock data for cancelled orders (Đã hủy)
const CANCELLED_ORDERS: Order[] = [
    {
        id: 8,
        shopName: "Ok Man Thời Trang Nam",
        isFavorite: true,
        isLive: true,
        status: "Đã hủy",
        deliveryDate: "",
        products: [
            {
                name: "Quần tây âu nam dáng Slim ôm vừa 8 mà...",
                variant: "Đen, 30",
                image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lx8z8z8z8z8z8z",
                quantity: 1,
                originalPrice: 600000,
                price: 279000,
            }
        ],
        totalAmount: 269000,
        totalItems: 1,
        hasMore: false,
    },
];

export default function MyOrdersScreen() {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<OrderStatus>("pending");
    const [expandedOrders, setExpandedOrders] = useState<number[]>([]);

    const toggleOrderExpansion = (orderId: number) => {
        setExpandedOrders(prev =>
            prev.includes(orderId)
                ? prev.filter(id => id !== orderId)
                : [...prev, orderId]
        );
    };

    const getOrdersForTab = (tab: OrderStatus): Order[] => {
        switch (tab) {
            case "pending": return PENDING_ORDERS;
            case "pickup": return PICKUP_ORDERS;
            case "shipping": return SHIPPING_ORDERS;
            case "delivered": return DELIVERED_ORDERS;
            case "return": return RETURN_ORDERS;
            case "cancelled": return CANCELLED_ORDERS;
            default: return [];
        }
    };

    const currentOrders = getOrdersForTab(activeTab);

    return (
        <View className="flex-1 bg-gray-50">
            {/* Tabs */}
            <OrderTabs
                tabs={ORDER_TABS}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />

            {/* Content */}
            <ScrollView className="flex-1">
                {currentOrders.length > 0 ? (
                    <View>
                        {currentOrders.map(order => (
                            <OrderCard
                                key={order.id}
                                order={order}
                                isExpanded={expandedOrders.includes(order.id)}
                                onToggleExpand={() => toggleOrderExpansion(order.id)}
                            />
                        ))}
                    </View>
                ) : (
                    <View className="items-center justify-center py-16 bg-white">
                        {/* Clipboard Illustration */}
                        <View className="relative mb-4">
                            <View className="bg-gray-100 rounded-2xl p-8">
                                <Ionicons name="clipboard-outline" size={80} color="#999" />
                            </View>
                            {/* Decorative dots */}
                            <View className="absolute -top-2 -left-2">
                                <View className="w-3 h-3 rounded-full bg-orange-300" />
                            </View>
                            <View className="absolute -top-2 -right-2">
                                <View className="w-3 h-3 rounded-full bg-blue-300" />
                            </View>
                            <View className="absolute -bottom-2 -left-2">
                                <View className="w-3 h-3 rounded-full bg-yellow-300" />
                            </View>
                        </View>

                        <Text className="text-gray-500 text-sm mb-6">Bạn chưa có đơn hàng nào cả</Text>
                    </View>
                )}

                {/* Recommendations */}
                <RecommendationSection />
            </ScrollView>
        </View>
    );
}
