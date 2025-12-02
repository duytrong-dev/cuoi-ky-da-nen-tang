import CartItem from "@/components/cart-item";
import { Colors } from "@/constants/theme";
import { SelectedMap, Shop } from "@/types/cart";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type ShopSectionProps = {
  shop: Shop;
  selected: SelectedMap;
  onToggleProduct: (id: string) => void;
  onChangeQty: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onOpenVariant: (product: any) => void;
  onOpenVoucher: () => void;
};

export default function ShopSection({
  shop,
  selected,
  onToggleProduct,
  onChangeQty,
  onRemove,
  onOpenVariant,
  onOpenVoucher,
}: Readonly<ShopSectionProps>) {
  const allShopProductsSelected = shop.products.every((p) => selected[p.id]);

  const handleOpenShop = (shop: Shop) => {
    console.log("Open shop:", shop);
    // Implement shop opening logic here
  };
  return (
    <View className="bg-white mt-3 pb-2 rounded-md">
      {/* Shop Header */}
      <View className="flex-row items-center px-3 py-3 border-b border-gray-100">
        <TouchableOpacity className="mr-3">
          <View className={`w-5 h-5 border rounded-md ${allShopProductsSelected ? 'bg-primary border-primary' : 'border-gray-400'} flex items-center justify-center`}>
            {allShopProductsSelected && <Ionicons name="checkmark" size={16} color="white" />}
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center flex-1" onPress={() => handleOpenShop(shop)}>
          <MaterialCommunityIcons name="storefront-outline" size={20} color="#333" />
          <Text className="font-bold text-base ml-2">{shop.shopName}</Text>
          <Ionicons name="chevron-forward" size={18} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-gray-500">Sửa</Text>
        </TouchableOpacity>
      </View>

      {/* Free Shipping Banner */}
      {shop.freeShipping && (
        <View className="flex-row items-center bg-teal-50 px-3 py-2 mx-3 mt-2 rounded-sm border border-teal-200">
          <MaterialCommunityIcons name="truck-delivery-outline" size={20} color="#26AA99" />
          <Text className="text-[#26AA99] text-xs ml-2 flex-1">Bạn đã được hưởng Miễn phí vận chuyển!</Text>
          <Ionicons name="chevron-forward" size={16} color="black" />
        </View>
      )}

      {/* Products */}
      {shop.products.map((p) => (
        <CartItem
          key={p.id}
          product={p}
          checked={!!selected[p.id]}
          onToggle={() => onToggleProduct(p.id)}
          onChangeQty={(d) => onChangeQty(p.id, d)}
          onRemove={() => onRemove(p.id)}
          onOpenVariant={() => onOpenVariant(p)}
        />
      ))}

      {/* Shop Voucher */}
      <TouchableOpacity onPress={onOpenVoucher} className="flex-row items-center justify-between px-3 py-3 border-t border-gray-100 mt-1">
        <View className="flex-row items-center">
          <MaterialCommunityIcons name="ticket-percent-outline" size={20} color={Colors.light.primary} />
          <Text className="ml-2 text-gray-700">Thêm Shop Voucher</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#999" />
      </TouchableOpacity>
    </View >
  );
}
