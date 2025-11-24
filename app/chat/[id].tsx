import ChatMessage, { Message } from "@/components/chat-message";
import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
    FlatList,
    KeyboardAvoidingView,
    Modal,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Sample messages data
const MESSAGES: Message[] = [
    {
        id: "1",
        type: "date",
        text: "08 thg 11",
    },
    {
        id: "2",
        type: "system",
        text: "*LƯU Ý: Shopee KHÔNG cho phép hành vi: Đặt cọc/Chuyển khoản riêng/Giao dịch ngoài nền tảng/Tuyên CTV/Tặng quà miễn phí/Cung cấp thông tin liên hệ hoặc Hủy đơn theo yêu cầu người Bán, ...\n\nVui lòng chỉ Mua-Bán trực tiếp trên Shopee để tránh bị lừa đảo. Shopee sẽ thu thập và xử lý thông tin theo Chính sách bảo mật của Shopee.",
    },
    {
        id: "3",
        type: "system",
        text: "Tìm hiểu thêm\nTố cáo người dùng này!",
        link: "Tìm hiểu thêm",
    },
    {
        id: "4",
        type: "product",
        product: {
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp",
            name: "Ram máy tính ADATA PREMIER DDR5 16G...",
            price: "934.150đ - 1.699.150đ",
            originalPrice: "1.099.000đ - 1.999.00...",
        },
        text: "Bạn đang hỏi về sản phẩm này",
    },
    {
        id: "5",
        type: "buyer",
        text: "Cho em hỏi",
        timestamp: "13:06",
        isRead: true,
    },
    {
        id: "6",
        type: "seller",
        text: "Cảm ơn anh/chị đã quan tâm đến Kho Công Nghệ Online. Kho Công Nghệ Online sẽ phản hồi tin nhắn của anh/chị sớm nhất có thể trong giờ làm việc!!\n\nĐơn hàng gặp vấn đề về sản phẩm hoặc shop giao thiếu/sai hàng, anh/chị vui lòng inbox lại sẽ có CSKH xử lý ngay nha!!",
        timestamp: "13:06",
        status: "Tin nhắn tự động",
    },
    {
        id: "7",
        type: "buyer",
        text: "Asus tuf F15 có phù hợp ko a",
        timestamp: "13:06",
        isRead: true,
    },
    {
        id: "8",
        type: "buyer",
        text: "Cho em xin ảnh ram thực tế với a",
        timestamp: "13:06",
        isRead: true,
    },
    {
        id: "9",
        type: "image",
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp",
        text: "Shop gửi bạn nhé",
        timestamp: "13:17",
    },
    {
        id: "10",
        type: "seller",
        text: "khocongngheonline:main sẽ phản hồi bạn.",
        timestamp: "13:18",
        status: "Tin nhắn tự động",
    },
];

const OPTIONS_MENU = [
    { id: "1", icon: "person-outline", label: "Xem hồ sơ" },
    { id: "2", icon: "home-outline", label: "Trở về trang chủ" },
    { id: "3", icon: "search-outline", label: "Tìm kiếm" },
    { id: "4", icon: "notifications-off-outline", label: "Tắt thông báo" },
    { id: "5", icon: "flag-outline", label: "Tô cáo người dùng này" },
    { id: "6", icon: "megaphone-outline", label: "Chặn quảng bá" },
    { id: "7", icon: "help-circle-outline", label: "Cần trợ giúp?" },
];

export default function ChatDetailScreen() {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const [message, setMessage] = useState("");
    const [showMenu, setShowMenu] = useState(false);
    const [showRating, setShowRating] = useState(true);
    const flatListRef = useRef<FlatList>(null);

    // Auto scroll to bottom when component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            flatListRef.current?.scrollToEnd({ animated: true });
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const shopInfo = {
        name: "Kho Công Nghệ Online",
        avatar: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp",
        badge: "Yêu thích",
        isOnline: true,
    };



    return (
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={insets.bottom + 22}
            className="flex-1 bg-gray-50"
        >

            {/* Messages */}
            <FlatList
                ref={flatListRef}
                data={MESSAGES}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ChatMessage message={item} />}
                className="flex-1 bg-gray-50"
                contentContainerStyle={{ paddingBottom: 10 }}
            />

            {/* Rating Prompt */}
            {showRating && (
                <View className="bg-white border-t border-gray-200 px-4 py-3">
                    <View className="flex-row items-center justify-between mb-2">
                        <Text className="text-lg font-medium text-gray-800">
                            Đánh Giá Dịch Vụ
                        </Text>
                        <TouchableOpacity onPress={() => setShowRating(false)}>
                            <Ionicons name="close" size={20} color="#666" />
                        </TouchableOpacity>
                    </View>
                    <Text className="text-md text-gray-600 mb-3">
                        Bạn đánh giá lần hỗ trợ này như thế nào?
                    </Text>
                    <View className="flex-row justify-around">
                        <TouchableOpacity className="items-center">
                            <Text className="text-3xl mb-1">😞</Text>
                            <Text className="text-md text-gray-600">Kém</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="items-center">
                            <Text className="text-3xl mb-1">😐</Text>
                            <Text className="text-md text-gray-600">Bình Thường</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="items-center">
                            <Text className="text-3xl mb-1">😊</Text>
                            <Text className="text-md text-gray-600">Tốt</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {/* Input Area */}
            <View className="bg-white border-t border-gray-200 px-4 py-4 pb-12">
                <View className="flex-row items-center mb-3">
                    <Ionicons name="document-attach-outline" size={20} color={Colors.light.primary} />
                    <Text className="text-md text-primary ml-1">Đánh giá mức độ hài lòng</Text>
                </View>
                <View className="flex-row items-center">
                    <TouchableOpacity className="mr-2">
                        <Ionicons name="add-circle-outline" size={28} color="#666" />
                    </TouchableOpacity>
                    <TextInput
                        placeholder="Gửi tin nhắn ..."
                        className="flex-1 bg-gray-100 rounded-full px-4 py-3 text-base"
                        style={{ fontSize: 16, lineHeight: 20 }}
                        value={message}
                        onChangeText={setMessage}
                    />
                    <TouchableOpacity className="ml-2">
                        <Ionicons name="happy-outline" size={28} color="#666" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Options Menu Modal */}
            <Modal
                visible={showMenu}
                transparent
                animationType="fade"
                onRequestClose={() => setShowMenu(false)}
            >
                <TouchableOpacity
                    className="flex-1 bg-black/50"
                    activeOpacity={1}
                    onPress={() => setShowMenu(false)}
                >
                    <View className="absolute top-16 right-4 bg-white rounded-lg shadow-lg overflow-hidden" style={{ width: 250 }}>
                        {OPTIONS_MENU.map((option, index) => (
                            <TouchableOpacity
                                key={option.id}
                                className={`flex-row items-center px-4 py-3 ${index < OPTIONS_MENU.length - 1 ? "border-b border-gray-100" : ""
                                    }`}
                                onPress={() => {
                                    setShowMenu(false);
                                    console.log(option.label);
                                }}
                            >
                                <Ionicons name={option.icon as any} size={20} color="#666" />
                                <Text className="text-sm text-gray-800 ml-3">{option.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </TouchableOpacity>
            </Modal>
        </KeyboardAvoidingView>
    );
}
