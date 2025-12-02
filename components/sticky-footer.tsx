import { Colors } from "@/constants/theme";
import { formatVND } from "@/utils/formatVND";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type StickyFooterProps = {
  allSelected: boolean;
  onToggleAll: () => void;
  total: number;
  totalItems: number;
  onCheckout: () => void;
  appliedVoucher?: string | null;
  onApplyVoucher?: (code: string | null) => void;
};

export default function StickyFooter({
  allSelected,
  onToggleAll,
  total,
  totalItems,
  onCheckout,
  appliedVoucher,
  onApplyVoucher,
}: Readonly<StickyFooterProps>) {
  const router = useRouter();
  const [useCoins, setUseCoins] = useState(false);
  const insets = useSafeAreaInsets();

  return (
    <View
      className="absolute left-0 right-0 bottom-0 bg-white border-t border-gray-200"
      style={{ paddingBottom: insets.bottom }}
    >
      {/* Shopee Voucher */}
      <TouchableOpacity
        className="w-full px-3 py-3 flex-row justify-between items-center border-b border-gray-100"
        onPress={() => router.push("/vouchers")}
      >
        <View className="flex-row items-center">
          <MaterialCommunityIcons
            name="ticket-percent-outline"
            size={20}
            color={Colors.light.secondary}
          />
          <Text className="ml-2 text-gray-700">Shop Voucher</Text>
        </View>
        <View className="flex-row items-center">
          <Text className="text-gray-400">Chọn hoặc nhập mã</Text>
          <Ionicons name="chevron-forward" size={18} color="#999" />
        </View>
      </TouchableOpacity>

      {/* Bottom Bar */}
      <View className="flex-row justify-between items-center w-full px-3 py-3">
        <View className="flex-row items-center">
          <TouchableOpacity
            onPress={onToggleAll}
            className="flex-row items-center mr-4"
          >
            <View
              className={`w-5 h-5 border ${allSelected ? "bg-primary border-primary" : "border-gray-400"
                } rounded-md flex items-center justify-center mr-2`}
            >
              {allSelected && (
                <Ionicons name="checkmark" size={16} color="white" />
              )}
            </View>
            <Text className="text-gray-600">Tất cả</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center">
          <View className="mr-3 items-end">
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name="truck-delivery-outline"
                size={14}
                color="#26AA99"
              />
              <Text className="text-gray-600 text-xs ml-1">Miễn phí</Text>
            </View>
            <View className="flex-row items-baseline">
              <Text className="text-red-500 text-xl font-bold max-w-[170px] overflow-hidden" numberOfLines={1}>
                {formatVND(total)}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            className="bg-red-500 px-6 py-3 rounded-md"
            onPress={onCheckout}
          >
            <Text className="text-white font-bold text-base">
              Mua hàng ({totalItems})
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
