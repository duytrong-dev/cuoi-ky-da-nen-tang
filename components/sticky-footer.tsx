import { Colors } from "@/constants/theme";
import { formatVND } from "@/utils/formatVND";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal, Pressable, ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
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

const vouchers = ["SALE50K", "FREESHIP", "DISCOUNT10"];

export default function StickyFooter({
  allSelected,
  onToggleAll,
  total,
  totalItems,
  onCheckout,
  appliedVoucher,
  onApplyVoucher,
}: Readonly<StickyFooterProps>) {
  const [showVoucherModal, setShowVoucherModal] = useState(false);
  const [useCoins, setUseCoins] = useState(false);
  const insets = useSafeAreaInsets();

  return (
    <View className="absolute left-0 right-0 bottom-0 bg-white border-t border-gray-200" style={{ paddingBottom: insets.bottom }}>

      {/* Shopee Voucher */}
      <TouchableOpacity
        className="w-full px-3 py-3 flex-row justify-between items-center border-b border-gray-100"
        onPress={() => setShowVoucherModal(true)}
      >
        <View className="flex-row items-center">
          <MaterialCommunityIcons name="ticket-percent-outline" size={20} color={Colors.light.primary} />
          <Text className="ml-2 text-gray-700">Shopee Voucher</Text>
        </View>
        <View className="flex-row items-center">
          <View className="border border-secondary rounded-sm px-1 mr-2">
            <Text className="text-secondary text-[10px]">Miễn Phí Vận Chuyển</Text>
          </View>
          <Text className="text-gray-400 text-xs">Chọn hoặc nhập mã</Text>
          <Ionicons name="chevron-forward" size={18} color="#999" />
        </View>
      </TouchableOpacity>

      {/* Shopee Coins */}
      <View className="w-full px-3 py-3 flex-row justify-between items-center border-b border-gray-100">
        <View className="flex-row items-center">
          <View className="w-5 h-5 rounded-full border border-orange-400 items-center justify-center mr-2">
            <Text className="text-orange-400 font-bold text-xs">$</Text>
          </View>
          <Text className="text-gray-700">Dùng 100 Shopee Xu</Text>
          <Ionicons name="help-circle-outline" size={16} color="#999" className="ml-1" />
        </View>
        <Switch
          trackColor={{ false: "#767577", true: Colors.light.primary }}
          thumbColor={useCoins ? "#f4f3f4" : "#f4f3f4"}
          onValueChange={setUseCoins}
          value={useCoins}
          style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
        />
      </View>

      {/* Bottom Bar */}
      <View className="flex-row justify-between items-center w-full px-3 py-3">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={onToggleAll} className="flex-row items-center mr-4">
            <View className={`w-5 h-5 border ${allSelected ? 'bg-primary border-primary' : 'border-gray-400'} rounded-sm flex items-center justify-center mr-2`}>
              {allSelected && <Ionicons name="checkmark" size={16} color="white" />}
            </View>
            <Text className="text-gray-600">Tất cả</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center">
          <View className="mr-3 items-end">
            <View className="flex-row items-center">
              <MaterialCommunityIcons name="truck-delivery-outline" size={14} color={Colors.light.secondary} />
              <Text className="text-secondary text-xs ml-1">Miễn phí</Text>
            </View>
            <View className="flex-row items-baseline">
              <Text className="text-sm text-gray-600 mr-1">Tổng thanh toán</Text>
              <Text className="text-primary text-lg font-bold">{formatVND(total)}</Text>
            </View>
          </View>

          <TouchableOpacity className="bg-primary px-6 py-3 rounded-sm" onPress={onCheckout}>
            <Text className="text-white font-bold text-base">Mua hàng ({totalItems})</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Voucher Modal */}
      <Modal visible={showVoucherModal} transparent animationType="slide">
        <Pressable
          style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.4)" }}
          onPress={() => setShowVoucherModal(false)}
        />
        <View className="bg-white rounded-t-xl p-4" style={{ maxHeight: 400 }}>
          <Text className="text-lg font-semibold mb-3">Chọn Shopee Voucher</Text>
          <ScrollView>
            {vouchers.map((v) => (
              <TouchableOpacity
                key={v}
                className="py-3 border-b border-gray-100 flex-row justify-between items-center"
                onPress={() => {
                  onApplyVoucher?.(v);
                  setShowVoucherModal(false);
                }}
              >
                <View>
                  <Text className="font-bold text-base">{v}</Text>
                  <Text className="text-gray-500 text-xs">Giảm giá đặc biệt</Text>
                </View>
                <Text className="text-primary">Áp dụng</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <TouchableOpacity
            onPress={() => setShowVoucherModal(false)}
            className="mt-3 py-3 bg-gray-100 rounded-lg items-center"
          >
            <Text>Đóng</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
