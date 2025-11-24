import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
    Modal,
    Pressable,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

type Props = {
    visible: boolean;
    shopName: string;
    onClose: () => void;
};

export default function ShopVoucherModal({
    visible,
    shopName,
    onClose,
}: Readonly<Props>) {
    return (
        <Modal visible={visible} transparent animationType="slide">
            <Pressable
                style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
                onPress={onClose}
            />
            <View className="bg-white rounded-t-xl absolute bottom-0 left-0 right-0 h-[80%]">
                {/* Header */}
                <View className="flex-row items-center justify-center p-4 border-b border-gray-100 relative">
                    <Text className="text-lg font-medium text-center max-w-[80%]" numberOfLines={1}>
                        {shopName} Voucher
                    </Text>
                    <TouchableOpacity
                        onPress={onClose}
                        className="absolute right-4 top-4"
                    >
                        <Ionicons name="close" size={24} color="#666" />
                    </TouchableOpacity>
                </View>

                {/* Banner */}
                <View className="bg-[#FFF8E4] px-4 py-3 flex-row items-start">
                    <Ionicons name="information-circle" size={20} color="#F6A700" style={{ marginTop: 2 }} />
                    <Text className="ml-2 text-gray-700 flex-1 text-sm leading-5">
                        Chọn sản phẩm trong Giỏ hàng để áp dụng Voucher
                    </Text>
                </View>

                <View className="flex-1 bg-gray-50">
                    {/* Input Section */}
                    <View className="p-4 bg-white mb-2 ">
                        <View className="flex-row items-center bg-gray-100 rounded-md overflow-hidden border border-gray-200">
                            <TextInput
                                placeholder="Nhập mã voucher của Shop"
                                className="flex-1 px-3 py-3 text-base"
                                placeholderTextColor="#999"
                            />
                            <View className="h-full w-[1px] bg-gray-200" />
                            <TouchableOpacity disabled className="bg-gray-300 px-4 py-3 justify-center rounded-md">
                                <Text className="text-white font-medium">Áp Dụng</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Empty State */}
                    <View className="flex-1 items-center justify-center mt-10 px-10">
                        <MaterialCommunityIcons name="ticket-percent-outline" size={80} color="#E0E0E0" />
                        <Text className="text-gray-500 text-lg font-medium mt-4 text-center">
                            Chưa có mã giảm giá nào của Shop
                        </Text>
                        <Text className="text-gray-400 text-center mt-2 leading-5">
                            Nhập mã giảm giá có thể sử dụng vào thanh bên trên
                        </Text>
                    </View>
                </View>

                {/* Footer Button */}
                <View className="p-4 border-t border-gray-100 bg-white pb-8 my-6">
                    <TouchableOpacity
                        onPress={onClose}
                        className="bg-primary py-3 rounded-md"
                    >
                        <Text className="text-white text-center font-bold text-base">
                            Đồng ý
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}
