import { Product } from "@/types/cart";
import { formatVND } from "@/utils/formatVND";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
    Image,
    Modal,
    Pressable,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

type Props = {
    visible: boolean;
    product: Product | null;
    currentVariant: string;
    currentQty: number;
    onClose: () => void;
    onConfirm: (product: Product, newVariant: string, newQty: number) => void;
};

export default function VariantModal({
    visible,
    product,
    currentVariant,
    currentQty,
    onClose,
    onConfirm,
}: Readonly<Props>) {
    const [selectedVariant, setSelectedVariant] = useState(currentVariant);
    const [qty, setQty] = useState(currentQty);

    useEffect(() => {
        if (visible) {
            setSelectedVariant(currentVariant);
            setQty(currentQty);
        }
    }, [visible, currentVariant, currentQty]);

    if (!product) return null;

    const handleConfirm = () => {
        onConfirm(product, selectedVariant, qty);
        onClose();
    };

    return (
        <Modal visible={visible} transparent animationType="slide">
            <Pressable
                style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
                onPress={onClose}
            />
            <View className="bg-white rounded-t-xl absolute bottom-0 left-0 right-0 h-[70%]">
                {/* Close Button */}
                <TouchableOpacity
                    onPress={onClose}
                    className="absolute top-3 right-3 z-10 p-2"
                >
                    <Ionicons name="close" size={24} color="#666" />
                </TouchableOpacity>

                <View className="p-4 flex-1">
                    {/* Header Info */}
                    <View className="flex-row border-b border-gray-100 pb-4 rounded-md overflow-hidden">
                        <Image
                            source={{ uri: product.image }}
                            className="w-24 h-24 rounded-md"
                            resizeMode="cover"
                        />
                        <View className="ml-3 flex-1 justify-end">
                            <Text className="text-red-500 text-xl font-medium">
                                {formatVND(product.price)}
                            </Text>
                            <Text className="text-gray-500 mt-1">Kho: {product.stock}</Text>
                        </View>
                    </View>

                    <ScrollView className="flex-1 mt-4">
                        {/* Variant Section */}
                        <Text className="text-base font-medium mb-3">Loại RAM</Text>
                        <View className="flex-row flex-wrap gap-3">
                            {product.variants.map((v) => {
                                const isSelected = v === selectedVariant;
                                return (
                                    <TouchableOpacity
                                        key={v}
                                        onPress={() => setSelectedVariant(v)}
                                        className={`rounded-md border mb-2 relative ${isSelected
                                            ? "bg-white border-primary"
                                            : "bg-gray-50 border-transparent"
                                            }`}
                                    >
                                        <View className="flex-row items-center px-4 py-2">
                                            {isSelected && (
                                                <View className="absolute top-0 left-0 bg-primary w-3 h-3 rounded-br-sm items-center justify-center">
                                                    <Ionicons name="checkmark" size={8} color="white" />
                                                </View>
                                            )}
                                            <Text
                                                className={`${isSelected ? "text-primary" : "text-gray-800"
                                                    }`}
                                            >
                                                {v}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>

                        {/* Quantity Section */}
                        <View className="flex-row justify-between items-center mt-6 border-t border-gray-100 pt-4">
                            <Text className="text-base font-medium">Số lượng</Text>
                            <View className="flex-row items-center border border-gray-300 rounded-md">
                                <TouchableOpacity
                                    onPress={() => setQty(Math.max(1, qty - 1))}
                                    className="px-3 py-1 border-r border-gray-300"
                                >
                                    <Text className="text-gray-600 font-medium">-</Text>
                                </TouchableOpacity>
                                <View className="px-4 py-1">
                                    <Text className="text-base font-medium text-primary">
                                        {qty}
                                    </Text>
                                </View>
                                <TouchableOpacity
                                    onPress={() =>
                                        setQty(Math.min(product.stock, qty + 1))
                                    }
                                    className="px-3 py-1 border-l border-gray-300"
                                >
                                    <Text className="text-gray-600 font-medium">+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                {/* Footer Button */}
                <View className="p-4 border-t border-gray-100 my-6">
                    <TouchableOpacity
                        onPress={handleConfirm}
                        className="bg-primary py-3 rounded-md"
                    >
                        <Text className="text-white text-center font-bold text-base">
                            Xác nhận
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}
