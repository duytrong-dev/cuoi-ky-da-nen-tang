import ChatInputArea from "@/components/chat-input-area";
import ChatMessage, { Message } from "@/components/chat-message";
import ChatOptionsMenu from "@/components/chat-options-menu";
import ChatRatingPrompt from "@/components/chat-rating-prompt";
import HeaderIconButton from "@/components/header-icon-button";
import { useTheme } from "@/store/ThemeContext";
import { Stack, useLocalSearchParams } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
    FlatList,
    Image,
    KeyboardAvoidingView,
    Text,
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
    const { isDark } = useTheme();
    const insets = useSafeAreaInsets();
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

    const shopName = "Kho Công Nghệ Online";
    const shopAvatar = "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp";
    const badge = "Yêu thích";
    const isOnline = true;
    return (
        <View className="flex-1">
            <Stack.Screen options={{
                headerTitle: () => (
                    <View className="flex-row items-center flex-1">
                        <Image
                            source={{ uri: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp" }}
                            className="w-10 h-10 rounded-full"
                        />
                        <View className="ml-3 flex-1">
                            <View className="flex-row items-center">
                                <Text
                                    className="text-base font-medium text-gray-800 dark:text-white"
                                    numberOfLines={1}
                                >
                                    {shopName}
                                </Text>
                                {badge && (
                                    <View className="bg-primary px-2 py-0.5 rounded-sm ml-2">
                                        <Text className="text-white text-xs font-medium">{badge}</Text>
                                    </View>
                                )}
                            </View>
                            {isOnline && (
                                <View className="flex-row items-center mt-0.5">
                                    <View className="w-2 h-2 rounded-full bg-green-500 mr-1" />
                                    <Text className="text-xs text-green-600">Trực tuyến</Text>
                                </View>
                            )}
                        </View>
                    </View>
                ),
                headerRight: () => (
                    <View className="flex-row items-center gap-2">
                        <HeaderIconButton
                            iconName="storefront-outline"
                            color={isDark ? '#fff' : '#666'}
                            onPress={() => { }}
                        />
                        <HeaderIconButton
                            iconName="ellipsis-vertical"
                            color={isDark ? '#fff' : '#666'}
                            onPress={() => setShowMenu(true)}
                        />
                    </View>
                ),
            }} />
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
                    <ChatRatingPrompt
                        onClose={() => setShowRating(false)}
                        onRate={(rating) => {
                            console.log("Rating:", rating);
                            setShowRating(false);
                        }}
                    />
                )}

                {/* Input Area */}
                <ChatInputArea
                    message={message}
                    onChangeMessage={setMessage}
                    onSend={() => {
                        console.log("Send:", message);
                        setMessage("");
                    }}
                />

                {/* Options Menu Modal */}
                <ChatOptionsMenu
                    visible={showMenu}
                    onClose={() => setShowMenu(false)}
                    options={OPTIONS_MENU}
                    onSelectOption={(optionId) => {
                        console.log("Selected option:", optionId);
                    }}
                />
            </KeyboardAvoidingView>
        </View>
    );
}

