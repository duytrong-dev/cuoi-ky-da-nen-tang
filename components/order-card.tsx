import DeliveryDateInfo from "@/components/delivery-date-info";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from "react-native";

export interface OrderProduct {
    name: string;
    variant: string;
    image: string;
    quantity: number;
    originalPrice: number;
    price: number;
}

export interface Order {
    id: number;
    shopName: string;
    isFavorite: boolean;
    isLive?: boolean;
    status: string;
    deliveryDate?: string;
    products: OrderProduct[];
    totalAmount: number;
    totalItems: number;
    hasMore?: boolean;
}

interface OrderCardProps {
    order: Order;
    isExpanded: boolean;
    onToggleExpand: () => void;
}

export default function OrderCard({ order, isExpanded, onToggleExpand }: OrderCardProps) {
    const displayedProducts = isExpanded ? order.products : order.products.slice(0, 1);

    return (
        <View className="bg-white mb-2 border-b border-gray-100">
            {/* Shop Header */}
            <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-100">
                <View className="flex-row items-center gap-2">
                    {order.isFavorite && (
                        <View className="bg-primary px-2 py-0.5 rounded">
                            <Text className="text-white text-xs font-medium">Yêu thích+</Text>
                        </View>
                    )}
                    <Text className="font-medium text-sm">{order.shopName}</Text>
                    {order.isLive && (
                        <View className="bg-primary px-2 py-0.5 rounded flex-row items-center gap-1">
                            <Text className="text-white text-xs font-bold">LIVE</Text>
                        </View>
                    )}
                </View>
                <Text className="text-primary text-sm">{order.status}</Text>
            </View>

            {/* Product Info */}
            {displayedProducts.map((product, index) => (
                <View key={index} className="flex-row p-4 gap-3">
                    <Image
                        source={{ uri: product.image }}
                        className="w-20 h-20 rounded bg-gray-100"
                    />
                    <View className="flex-1">
                        <Text className="text-sm mb-1" numberOfLines={2}>
                            {product.name}
                        </Text>
                        <Text className="text-gray-500 text-xs mb-2">{product.variant}</Text>
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center gap-2">
                                <Text className="text-gray-400 text-xs line-through">
                                    {product.originalPrice.toLocaleString('vi-VN')}đ
                                </Text>
                                <Text className="text-sm font-medium">
                                    {product.price.toLocaleString('vi-VN')}đ
                                </Text>
                            </View>
                            <Text className="text-gray-500 text-xs">x{product.quantity}</Text>
                        </View>
                    </View>
                </View>
            ))}

            {/* Show More Button */}
            {order.hasMore && (
                <TouchableOpacity
                    className="items-center py-2 border-t border-gray-100"
                    onPress={onToggleExpand}
                >
                    <View className="flex-row items-center gap-1">
                        <Text className="text-sm text-gray-600">
                            {isExpanded ? "Thu gọn" : "Xem thêm"}
                        </Text>
                        <Ionicons
                            name={isExpanded ? "chevron-up" : "chevron-down"}
                            size={16}
                            color="#666"
                        />
                    </View>
                </TouchableOpacity>
            )}

            {/* Delivery Date Info (for pickup/shipping orders) */}
            {order.deliveryDate && (
                <DeliveryDateInfo deliveryDate={order.deliveryDate} />
            )}

            {/* Total Amount */}
            <View className="px-4 py-3 border-t border-gray-100">
                <Text className="text-right text-sm">
                    Tổng số tiền ({order.totalItems} sản phẩm):{" "}
                    <Text className="font-medium">
                        {order.totalAmount.toLocaleString('vi-VN')}đ
                    </Text>
                </Text>
            </View>

            {/* Action Button(s) */}
            {order.status === "Đã hủy" ? (
                <View className="px-4 pb-4 flex-row gap-2 justify-end">
                    <TouchableOpacity className="border border-gray-300 rounded px-4 py-2 flex-1">
                        <Text className="text-gray-700 font-medium text-center">Xem Chi tiết đơn hủy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="border border-primary rounded px-4 py-2 flex-1">
                        <Text className="text-primary font-medium text-center">Mua lại</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View className="px-4 pb-4 items-end">
                    <TouchableOpacity className="border border-primary rounded px-6 py-2">
                        <Text className="text-primary font-medium">
                            {(order.status === "Chờ thanh toán" || order.status === "Chờ lấy hàng") ? "Liên hệ Shop" : "Mua lại"}
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}
