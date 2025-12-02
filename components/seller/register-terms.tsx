import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export function RegisterTerms() {
    return (
        <View className="flex-row items-start mb-6">
            <Ionicons name="information-circle-outline" size={20} color="#666" style={{ marginTop: 2 }} />
            <Text className="flex-1 ml-2 text-sm text-gray-600 leading-5">
                Bằng việc đăng ký, bạn đồng ý với{" "}
                <Text className="text-secondary font-semibold">
                    Điều khoản dịch vụ
                </Text>{" "}
                và{" "}
                <Text className="text-secondary font-semibold">
                    Chính sách bảo mật
                </Text>{" "}
                của chúng tôi.
            </Text>
        </View>
    );
}
