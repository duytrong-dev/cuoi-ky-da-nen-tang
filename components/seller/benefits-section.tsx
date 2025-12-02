import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export function BenefitsSection() {
    return (
        <View className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 mb-4">
            <Text className="text-base font-bold text-gray-800 mb-3">
                🎉 Ưu đãi dành cho người bán mới
            </Text>
            <View className="space-y-2">
                <View className="flex-row items-center mb-2">
                    <Ionicons name="checkmark-circle" size={20} color="#EE4D2D" />
                    <Text className="ml-2 text-sm text-gray-700">
                        Miễn phí đăng ký và quản lý shop
                    </Text>
                </View>
                <View className="flex-row items-center mb-2">
                    <Ionicons name="checkmark-circle" size={20} color="#EE4D2D" />
                    <Text className="ml-2 text-sm text-gray-700">
                        Hỗ trợ vận chuyển toàn quốc
                    </Text>
                </View>
                <View className="flex-row items-center mb-2">
                    <Ionicons name="checkmark-circle" size={20} color="#EE4D2D" />
                    <Text className="ml-2 text-sm text-gray-700">
                        Công cụ quản lý bán hàng chuyên nghiệp
                    </Text>
                </View>
                <View className="flex-row items-center">
                    <Ionicons name="checkmark-circle" size={20} color="#EE4D2D" />
                    <Text className="ml-2 text-sm text-gray-700">
                        Tiếp cận hàng triệu khách hàng tiềm năng
                    </Text>
                </View>
            </View>
        </View>
    );
}
