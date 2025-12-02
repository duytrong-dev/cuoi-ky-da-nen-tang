import SettingItem from "@/components/setting-item";
import SettingSectionHeader from "@/components/setting-section-header";
import { useLogout } from "@/queries/useAuth";
import { useRouter } from "expo-router";
import React from "react";
import {
    Alert,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function SettingsScreen() {
    const router = useRouter();

    const logoutMutiton = useLogout();

    const handleLogout = async () => {
        Alert.alert("Xác nhận", "Bạn có chắc chắn muốn đăng xuất không?", [
            {
                text: "Hủy",
                onPress: () => { },
                style: "cancel"
            },
            {
                text: "Đăng xuất",
                onPress: async () => {
                    await logoutMutiton.mutateAsync()
                    Alert.alert("Thông báo", "Đăng xuất thành công")
                    router.replace("/(auth)/login")
                }
            }
        ])
    }

    return (
        <View className="flex-1 bg-transparent">
            <ScrollView className="flex-1 pt-2 pb-4">
                {/* Account Section */}
                <SettingSectionHeader title="Tài khoản của tôi" />
                <SettingItem
                    title="Tài khoản & Bảo mật"
                    onPress={() => { }}
                />
                <SettingItem
                    title="Địa Chỉ"
                    onPress={() => { }}
                />
                <SettingItem
                    title="Tài khoản / Thẻ ngân hàng"
                    onPress={() => { }}
                />

                {/* Settings Section */}
                <SettingSectionHeader title="Cài đặt" />
                <SettingItem
                    title="Cài đặt Chat"
                    onPress={() => { }}
                />
                <SettingItem
                    title="Cài đặt Thông báo"
                    onPress={() => { }}
                />
                <SettingItem
                    title="Cài đặt riêng tư"
                    onPress={() => { }}
                />
                <SettingItem
                    title="Người dùng đã bị chặn"
                    onPress={() => { }}
                />
                <SettingItem
                    title="Ngôn ngữ / Language"
                    subtitle="Tiếng Việt"
                    onPress={() => { }}
                />

                {/* Support Section */}
                <SettingSectionHeader title="Hỗ trợ" />
                <SettingItem
                    title="Trung tâm hỗ trợ"
                    onPress={() => { }}
                />
                <SettingItem
                    title="Tiêu chuẩn cộng đồng"
                    onPress={() => { }}
                />
                <SettingItem
                    title="Điều khoản Shopee"
                    onPress={() => { }}
                />
                <SettingItem
                    title="Hài lòng với Shopee? Hãy đánh giá ngay!"
                    onPress={() => { }}
                />
                <SettingItem
                    title="Giới thiệu"
                    onPress={() => { }}
                />
                <SettingItem
                    title="Yêu cầu hủy tài khoản"
                    onPress={() => { }}
                />

                {/* Logout Button */}
                <View className="px-4 py-6">
                    <TouchableOpacity
                        className="bg-white border border-gray-400 rounded py-3 items-center"
                        onPress={handleLogout}
                    >
                        <Text className="text-base text-black">Chuyển tài khoản / Đăng xuất</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
