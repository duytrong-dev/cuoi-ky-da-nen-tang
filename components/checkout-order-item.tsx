import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

interface CheckoutOrderItemProps {
    shopName: string;
    product: {
        name: string;
        variant: string;
        image: string;
        price: number;
        quantity: number;
    };
    note: string;
    onNoteChange: (text: string) => void;
    onVoucherPress?: () => void;
}

export default function CheckoutOrderItem({
    shopName,
    product,
    note,
    onNoteChange,
    onVoucherPress
}: CheckoutOrderItemProps) {
    return (
        <View className="bg-white px-4 py-3 mb-2">
            {/* Shop Name */}
            <View className="flex-row items-center mb-3">
                <Ionicons name="storefront-outline" size={22} color="#666" />
                <Text className="font-medium text-lg ml-2">{shopName}</Text>
            </View>

            {/* Product */}
            <View className="flex-row mb-3">
                <Image
                    source={{ uri: product.image }}
                    className="w-20 h-20 rounded bg-gray-100"
                />
                <View className="flex-1 ml-3">
                    <Text className="text-sm mb-1" numberOfLines={2}>
                        {product.name}
                    </Text>
                    <Text className="text-gray-500 text-xs mb-2">{product.variant}</Text>
                    <View className="flex-row items-center justify-between">
                        <Text className="text-red-500 font-medium text-md">
                            {product.price.toLocaleString('vi-VN')}đ
                        </Text>
                        <Text className="text-gray-500 text-sm">x{product.quantity}</Text>
                    </View>
                </View>
            </View>

            {/* Voucher của Shop */}
            <TouchableOpacity
                className="flex-row items-center justify-between py-3 border-t border-gray-100"
                onPress={onVoucherPress}
            >
                <Text className="text-md">Voucher của Shop</Text>
                <View className="flex-row items-center">
                    <Text className="text-gray-400 text-sm mr-2">Chọn hoặc nhập mã</Text>
                    <Ionicons name="chevron-forward" size={16} color="#999" />
                </View>
            </TouchableOpacity>

            {/* Lời nhắn cho Shop */}
            <View className="flex-row items-center justify-between py-3 border-t border-gray-100">
                <Text className="text-md">Lời nhắn cho Shop</Text>
                <TextInput
                    placeholder="Để lại lời nhắn"
                    value={note}
                    onChangeText={onNoteChange}
                    className="flex-1 text-right text-gray-400 text-sm ml-4"
                />
                <Ionicons name="chevron-forward" size={16} color="#999" className="ml-2" />
            </View>
        </View>
    );
}
