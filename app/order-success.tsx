import RecommendationSection from "@/components/recommendation-section";
import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";

export default function OrderSuccessScreen() {
    const router = useRouter();

    return (
        <View className="flex-1 bg-gray-50">
            <ScrollView className="flex-1">
                {/* Success Header */}
                <View className="bg-primary px-4 py-6">
                    <View className="items-center mb-4">
                        <View className="w-16 h-16 rounded-full bg-white items-center justify-center mb-3">
                            <Ionicons name="time-outline" size={40} color={Colors.light.secondary} />
                        </View>
                        <Text className="text-white text-2xl font-bold mb-2">Đang chờ thanh toán</Text>
                    </View>

                    <View className="bg-white/10 rounded-lg p-4 mb-4">
                        <Text className="text-white text-md text-center leading-5">
                            Để tránh mất tiền vào tay kẻ lừa đảo mạo danh Shipper, bạn tuyệt đối:{"\n"}
                            <Text className="font-bold">KHÔNG</Text> chuyển khoản cho Shipper khi chưa nhận hàng{"\n"}
                            <Text className="font-bold">KHÔNG</Text> nhận vào đường dẫn (Link) là của Shipper gửi!
                        </Text>
                    </View>

                    <View className="flex-row gap-3">
                        <TouchableOpacity
                            className="flex-1 border border-white rounded-lg py-3"
                            onPress={() => router.push("/")}
                        >
                            <Text className="text-white font-bold text-center text-base">Trang chủ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="flex-1 border border-white rounded-lg py-3"
                            onPress={() => router.push("/")}
                        >
                            <Text className="text-white font-bold text-center text-base">Đơn mua</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Notification Banner */}
                <View className="bg-white mx-4 my-3 rounded-lg shadow-sm mt-4">
                    <View className="flex-row items-start p-4">
                        <View className="bg-orange-100 rounded-full p-2 mr-3">
                            <Ionicons name="notifications" size={20} color="#f97316" />
                        </View>
                        <View className="flex-1">
                            <Text className="font-bold text-base mb-1">
                                Luôn cập nhật trạng thái đơn hàng bạn nhé!
                            </Text>
                            <Text className="text-gray-600 text-sm leading-5">
                                Đồng ý nhận thông báo cập nhật những thông tin mới nhất về đơn hàng, ưu đãi và nhiều nội dung khác nữa.
                            </Text>
                        </View>
                        <TouchableOpacity className="ml-2">
                            <Ionicons name="close" size={24} color="#999" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity className="bg-primary mx-4 mb-4 py-3 rounded-lg">
                        <Text className="text-white font-bold text-center">Đồng ý</Text>
                    </TouchableOpacity>
                </View>
                <RecommendationSection />
            </ScrollView>
        </View>
    );
}
