import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ShopInfoScreen() {
    const router = useRouter();
    const insets = useSafeAreaInsets();

    return (
        <View className="flex-1 bg-gray-50" style={{ paddingTop: insets.top }}>
            {/* Header */}
            <View className="bg-white px-4 py-3 flex-row items-center border-b border-gray-200">
                <TouchableOpacity onPress={() => router.back()} className="mr-3">
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text className="text-lg font-medium flex-1 text-center">Chi tiết Shop</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView className="flex-1">
                {/* Shop Header */}
                <View className="bg-white px-4 py-4 border-b-8 border-gray-100">
                    <View className="flex-row items-center">
                        <Image
                            source={{ uri: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp" }}
                            style={{ width: 64, height: 64 }}
                            className="rounded-full"
                        />
                        <View className="ml-3 flex-1">
                            <Text className="text-lg font-semibold text-gray-800">GLO OO</Text>
                            <Text className="text-sm text-gray-500 mt-1">Online 7 phút trước</Text>
                            <View className="flex-row items-center mt-2">
                                <Text className="text-sm text-gray-600">Người theo dõi 3,6k</Text>
                                <Text className="text-sm text-gray-600 ml-4">Đang Theo 0</Text>
                            </View>
                        </View>
                        <View className="bg-red-500 px-2 py-1 rounded">
                            <Text className="text-white text-xs font-bold">Yêu thích+</Text>
                        </View>
                    </View>
                </View>

                {/* Shop Stats */}
                <View className="bg-white">
                    {/* Rating */}
                    <TouchableOpacity className="flex-row items-center justify-between px-4 py-4 border-b border-gray-100">
                        <View className="flex-row items-center flex-1">
                            <Ionicons name="star-outline" size={20} color="#666" />
                            <Text className="text-base text-gray-700 ml-3">Đánh giá</Text>
                        </View>
                        <View className="flex-row items-center">
                            <Text className="text-red-500 text-base mr-1">4.9 / 5</Text>
                            <Text className="text-gray-400 text-sm">(8,4k Đánh giá)</Text>
                            <Ionicons name="chevron-forward" size={20} color="#999" className="ml-2" />
                        </View>
                    </TouchableOpacity>

                    {/* Chat Response */}
                    <View className="flex-row items-center justify-between px-4 py-4 border-b border-gray-100">
                        <View className="flex-row items-center flex-1">
                            <Ionicons name="chatbubble-outline" size={20} color="#666" />
                            <Text className="text-base text-gray-700 ml-3">Tỉ lệ phản hồi Chat</Text>
                        </View>
                        <View className="flex-row items-center">
                            <Text className="text-red-500 text-base mr-1">99%</Text>
                            <Text className="text-gray-400 text-sm">(Trong vòng vài tiếng)</Text>
                            <Ionicons name="help-circle-outline" size={16} color="#999" className="ml-1" />
                        </View>
                    </View>

                    {/* Products */}
                    <View className="flex-row items-center justify-between px-4 py-4 border-b border-gray-100">
                        <View className="flex-row items-center flex-1">
                            <Ionicons name="grid-outline" size={20} color="#666" />
                            <Text className="text-base text-gray-700 ml-3">Sản phẩm</Text>
                        </View>
                        <Text className="text-red-500 text-base">36</Text>
                    </View>

                    {/* Joined */}
                    <View className="flex-row items-center justify-between px-4 py-4 border-b border-gray-100">
                        <View className="flex-row items-center flex-1">
                            <Ionicons name="person-outline" size={20} color="#666" />
                            <Text className="text-base text-gray-700 ml-3">Đã tham gia</Text>
                        </View>
                        <Text className="text-red-500 text-base">1 năm</Text>
                    </View>

                    {/* Description */}
                    <View className="px-4 py-4 border-b border-gray-100">
                        <View className="flex-row items-start">
                            <Ionicons name="document-text-outline" size={20} color="#666" />
                            <View className="ml-3 flex-1">
                                <Text className="text-base text-gray-700 mb-2">Mô tả Shop</Text>
                                <Text className="text-sm text-gray-600 leading-5">
                                    Xưởng sản xuất/ shop thời trang nam thương hiệu GLO{"\n"}
                                    GLO CHUYÊN THỜI TRANG NAM{"\n\n"}
                                    GLO Thanh lịch,{"\n"}
                                    GLO thoải mái,
                                </Text>
                                <TouchableOpacity className="mt-2">
                                    <Text className="text-red-500 text-sm">Tìm hiểu ngay</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Shop Link */}
                    <View className="flex-row items-center justify-between px-4 py-4 border-b border-gray-100">
                        <View className="flex-row items-center flex-1">
                            <Ionicons name="location-outline" size={20} color="#666" />
                            <Text className="text-base text-gray-700 ml-3">Link của Shop</Text>
                        </View>
                        <Text className="text-red-500 text-sm">shopee.vn/glo_2019</Text>
                    </View>

                    {/* Verified */}
                    <View className="px-4 py-4">
                        <View className="flex-row items-start">
                            <Ionicons name="shield-checkmark-outline" size={20} color="#666" />
                            <View className="ml-3 flex-1">
                                <Text className="text-base text-gray-700 mb-2">Tài khoản đã được xác minh</Text>
                                <View className="flex-row items-center gap-2">
                                    <View className="bg-cyan-500 w-8 h-8 rounded items-center justify-center">
                                        <Ionicons name="mail" size={16} color="white" />
                                    </View>
                                    <View className="bg-pink-500 w-8 h-8 rounded items-center justify-center">
                                        <Ionicons name="logo-instagram" size={16} color="white" />
                                    </View>
                                    <View className="bg-gray-300 w-8 h-8 rounded items-center justify-center">
                                        <Ionicons name="logo-facebook" size={16} color="white" />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Button */}
            <View className="bg-white px-4 py-3 border-t border-gray-200" style={{ paddingBottom: insets.bottom + 12 }}>
                <TouchableOpacity className="bg-red-500 py-3 rounded-md">
                    <Text className="text-white text-center font-semibold text-base">Xem tất cả sản phẩm</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
