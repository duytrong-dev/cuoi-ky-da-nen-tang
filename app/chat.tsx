import ConversationItem, { Conversation } from "@/components/conversation-item";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  View,
} from "react-native";

// Sample data
const CONVERSATIONS: Conversation[] = [
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

  return (
    <View className="flex-1">
      {/* Conversation List */}
      <FlatList
        data={CONVERSATIONS}
        renderItem={({ item, index }) => (
          <ConversationItem
            conversation={item}
            onPress={() => router.push({
              pathname: "/chat/[id]",
              params: { id: index.toString() },
            })}
          />
        )}
        keyExtractor={(item) => item.id}
        className="flex-1"
      />
    </View>
  )
}
