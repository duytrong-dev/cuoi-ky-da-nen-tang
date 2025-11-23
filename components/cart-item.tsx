import { Product } from "@/types/cart";
import { formatVND } from "@/utils/formatVND";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type CartItemProps = {
  product: Product;
  checked: boolean;
  onToggle: () => void;
  onChangeQty: (delta: number) => void;
  onRemove: () => void;
};

export default function CartItem({
  product,
  checked,
  onToggle,
  onChangeQty,
  onRemove,
}: Readonly<CartItemProps>) {
  return (
    <View className="flex-row px-3 py-4 bg-white">
      {/* Checkbox */}
      <TouchableOpacity onPress={onToggle} className="mr-3 justify-center">
        <View className={`w-5 h-5 border ${checked ? 'bg-primary border-primary' : 'border-gray-400'} rounded-sm flex items-center justify-center`}>
          {checked && <Ionicons name="checkmark" size={16} color="white" />}
        </View>
      </TouchableOpacity>

      {/* Image */}
      <View className="relative">
        <Image source={{ uri: product.image }} className="w-20 h-20" resizeMode="cover" />
        {product.stock <= 5 && (
          <View className="absolute bottom-0 left-0 right-0 bg-black/60 py-[2px]">
            <Text className="text-white text-[10px] text-center">Chỉ còn {product.stock}</Text>
          </View>
        )}
      </View>

      {/* Content */}
      <View className="flex-1 ml-3 justify-between">
        <Text className="text-sm text-gray-800 leading-5" numberOfLines={2}>
          {product.title}
        </Text>

        {/* Variant & Qty */}
        <View className="flex-row items-center justify-between mt-1">
          <TouchableOpacity className="bg-gray-100 px-2 py-1 rounded-sm flex-row items-center max-w-[70%]">
            <Text className="text-xs text-gray-600 font-medium mr-1" numberOfLines={1}>{product.variant}</Text>
            <Ionicons name="chevron-down" size={12} color="#666" />
          </TouchableOpacity>

          {/* Quantity Control (Small) */}
          <View className="flex-row items-center border border-gray-300 rounded-sm">
            <TouchableOpacity onPress={() => onChangeQty(-1)} className="px-2 py-[2px] border-r border-gray-300">
              <Text className="text-gray-600">-</Text>
            </TouchableOpacity>
            <View className="px-3 py-[2px]">
              <Text className="text-sm">{product.qty}</Text>
            </View>
            <TouchableOpacity onPress={() => onChangeQty(1)} className="px-2 py-[2px] border-l border-gray-300">
              <Text className="text-gray-600">+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Voucher Tag */}
        <View className="mt-1 flex-row">
          <View className="border border-primary px-1 rounded-[2px]">
            <Text className="text-[10px] text-primary">VOUCHER GIẢM 50%</Text>
          </View>
        </View>

        {/* Price */}
        <View className="mt-1">
          <Text className="text-primary font-medium text-base">{formatVND(product.price)}</Text>
        </View>
      </View>
    </View>
  );
}
