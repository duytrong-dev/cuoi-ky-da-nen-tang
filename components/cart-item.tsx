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
  onOpenVariant: () => void;
};

export default function CartItem({
  product,
  checked,
  onToggle,
  onChangeQty,
  onRemove,
  onOpenVariant,
}: Readonly<CartItemProps>) {

  const handleOpenProduct = () => {
    console.log("Open product:", product);
    // Implement product opening logic here
  };

  return (
    <View className="flex-row px-3 py-4 bg-white">
      {/* Checkbox */}
      <TouchableOpacity onPress={onToggle} className="mr-3 justify-center">
        <View className={`w-5 h-5 border rounded-md ${checked ? 'bg-primary border-primary' : 'border-gray-400'} flex items-center justify-center`}>
          {checked && <Ionicons name="checkmark" size={16} color="white" />}
        </View>
      </TouchableOpacity>

      {/* Image */}
      <TouchableOpacity className="relative w-20 h-20 border border-gray-200 rounded-lg overflow-hidden" onPress={() => handleOpenProduct()}>
        <Image source={{ uri: product.image }} className="w-full h-full" style={{ aspectRatio: 1 }} resizeMode="cover" />
        {product.stock <= 5 && (
          <View className="absolute bottom-0 left-0 right-0 bg-black/60 py-[2px]">
            <Text className="text-white text-[10px] text-center">Chỉ còn {product.stock}</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Content */}
      <View className="flex-1 ml-3 justify-between">
        <Text className="text-sm text-gray-800 leading-5" numberOfLines={1} ellipsizeMode="tail">
          {product.title}
        </Text>

        {/* Variant & Qty */}
        <View className="flex-row items-center justify-between mt-1">
          <TouchableOpacity onPress={onOpenVariant} className="bg-gray-100 px-2 py-1 rounded-md flex-row items-center max-w-[60%]">
            <Text className="text-xs text-gray-600 font-medium mr-1" numberOfLines={1}>{product.variant}</Text>
            <Ionicons name="chevron-down" size={12} color="#666" />
          </TouchableOpacity>

          {/* Quantity Control (Small) */}
          <View className="flex-row items-center">
            <TouchableOpacity onPress={() => onChangeQty(-1)} className="px-2 py-[2px]">
              <Text className="text-gray-700">-</Text>
            </TouchableOpacity>
            <View className="px-3 py-[2px] bg-gray-100 rounded-md">
              <Text className="text-sm">{product.qty}</Text>
            </View>
            <TouchableOpacity onPress={() => onChangeQty(1)} className="px-2 py-[2px]">
              <Text className="text-gray-700">+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Voucher Tag */}
        <View className="my-2 flex-row">
          <View className="border border-red-500 px-1 rounded-md p-1">
            <Text className="text-[10px] text-red-500">VOUCHER GIẢM 50%</Text>
          </View>
        </View>

        {/* Price */}
        <View>
          <Text className="text-red-500 font-medium text-base">{formatVND(product.price)}</Text>
        </View>
      </View>
    </View>
  );
}
