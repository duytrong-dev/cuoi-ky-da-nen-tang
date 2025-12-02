import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export function RegisterHero() {
    return (
        <View className="bg-secondary px-6 py-6">
            <View className="items-center">
                <View className="bg-white/20 p-4 rounded-full mb-4">
                    <Ionicons name="storefront" size={48} color="white" />
                </View>
                <Text className="text-white text-2xl font-bold text-center mb-2">
                    Bắt đầu kinh doanh
                </Text>
                <Text className="text-white/90 text-center text-base">
                    Mở shop của bạn và tiếp cận hàng triệu khách hàng
                </Text>
            </View>
        </View>
    );
}
