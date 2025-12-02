import { Colors } from "@/constants/theme";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
    Text,
    TouchableOpacity,
    View
} from "react-native";

interface PaymentMethodSectionProps {
    selectedMethod: "cod" | "shopeepay";
    onMethodChange: (method: "cod" | "shopeepay") => void;
    onViewAll?: () => void;
}

export default function PaymentMethodSection({
    selectedMethod,
    onMethodChange,
    onViewAll
}: PaymentMethodSectionProps) {
    return (
        <View className="bg-white px-4 py-3 mb-2">
            <TouchableOpacity className="flex-row items-center justify-between mb-3" onPress={onViewAll}>
                <Text className="text-sm font-medium">Phương thức thanh toán</Text>
                <View className="flex-row items-center">
                    <Text className="text-gray-600 text-sm mr-2">Xem tất cả</Text>
                    <Ionicons name="chevron-forward" size={16} color="#999" />
                </View>
            </TouchableOpacity>

            {/* COD */}
            <TouchableOpacity
                className="flex-row items-center justify-between py-3"
                onPress={() => onMethodChange("cod")}
            >
                <View className="flex-row items-center">
                    <MaterialCommunityIcons name="cash" size={20} color={Colors.light.secondary} />
                    <Text className="ml-3 text-md">Thanh toán khi nhận hàng</Text>
                </View>
                <View className={`w-5 h-5 rounded-full border-2 items-center justify-center ${selectedMethod === "cod" ? "border-secondary" : "border-gray-300"}`}>
                    {selectedMethod === "cod" && (
                        <View className="w-3 h-3 rounded-full bg-secondary" />
                    )}
                </View>
            </TouchableOpacity>

            {/* ShopeePay */}
            <View className="border-t border-gray-100">
                <TouchableOpacity
                    className="flex-row items-center justify-between py-3"
                    onPress={() => onMethodChange("shopeepay")}
                >
                    <View className="flex-row items-center">
                        <MaterialCommunityIcons name="wallet-outline" size={20} color={Colors.light.secondary} />
                        <Text className="ml-3 text-md">Thẻ ngân hàng</Text>
                    </View>
                    <View className={`w-5 h-5 rounded-full border-2 items-center justify-center ${selectedMethod === "shopeepay" ? "border-secondary" : "border-gray-300"}`}>
                        {selectedMethod === "shopeepay" && (
                            <View className="w-3 h-3 rounded-full bg-secondary" />
                        )}
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
