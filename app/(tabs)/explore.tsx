import ProductsGrid from "@/components/products-grid";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Text,
  View
} from "react-native";

export default function ExploreScreen() {

  return (
    <View className="flex-1 bg-transparent">
      {/* Badges */}
      <View className="bg-yellow-50 flex-row items-center justify-center py-4 border-b border-gray-200">
        <View className="flex-row items-center mr-6">
          <Ionicons name="checkmark-circle" size={18} color="#666" />
          <Text className="text-sm text-gray-700 ml-1 font-medium italic">Hàng Hot Trend</Text>
        </View>
        <View className="flex-row items-center ml-6">
          <Ionicons name="checkmark-circle" size={18} color="#666" />
          <Text className="text-sm text-gray-700 ml-1 font-medium italic">Miễn phí vận chuyển</Text>
        </View>
      </View>

      {/* Product Grid */}
      <ProductsGrid />
    </View>
  );
}

