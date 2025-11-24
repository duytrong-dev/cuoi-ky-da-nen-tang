import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Sample data
const CONVERSATIONS = [
  {
    id: "1",
    shopName: "Kho Công Nghệ Online",
    shopAvatar: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp",
    badge: "Yêu thích",
    lastMessage: "[Đánh giá mức độ hài lòng] Cho Shop biết ý kiến...",
    date: "08/11",
    isOnline: true,
  },
  {
    id: "2",
    shopName: "Tech Store Vietnam",
    shopAvatar: "https://down-vn.img.susercontent.com/file/vn-11134258-820l4-mha512nf4wei2f@resize_w796_nl.webp",
    badge: null,
    lastMessage: "Cảm ơn bạn đã mua hàng!",
    date: "07/11",
    isOnline: false,
  },
];

export default function ChatScreen() {
  const router = useRouter();

  const renderConversation = ({ item, index }: { item: typeof CONVERSATIONS[0]; index: number }) => (
    <TouchableOpacity
      onPress={() => router.push({
        pathname: "/chat/[id]",
        params: { id: index.toString() },
      })}
      className="flex-row items-center px-4 py-3 bg-white border-b border-gray-100"
    >
      {/* Avatar with Badge */}
      <View className="relative mr-3">
        <Image
          source={{ uri: item.shopAvatar }}
          className="w-16 aspect-square rounded-full"
        />
        {item.badge && (
          <View className="absolute -bottom-1 left-0 right-0 bg-primary px-1 py-0.5 rounded-sm">
            <Text className="text-white text-[8px] font-bold text-center">
              {item.badge}
            </Text>
          </View>
        )}
        {item.isOnline && (
          <View className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
        )}
      </View>

      {/* Content */}
      <View className="flex-1">
        <Text className="text-base font-medium text-gray-800 mb-1">
          {item.shopName}
        </Text>
        <Text className="text-sm text-gray-500" numberOfLines={1}>
          {item.lastMessage}
        </Text>
      </View>

      {/* Date */}
      <Text className="text-xs text-gray-400 ml-2">{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1">
      {/* Conversation List */}
      <FlatList
        data={CONVERSATIONS}
        renderItem={renderConversation}
        keyExtractor={(item) => item.id}
        className="flex-1"
      />
    </View>
  )
}
