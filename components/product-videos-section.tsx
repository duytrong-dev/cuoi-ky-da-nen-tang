import VideoThumbnail from "@/components/video-thumbnail";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

interface ProductVideo {
    thumbnail: string;
    title: string;
    duration?: string;
}

interface ProductVideosSectionProps {
    videos?: ProductVideo[];
}

const DEFAULT_VIDEOS: ProductVideo[] = [
    {
        thumbnail: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp",
        title: "Máy mẫn nhân đức hộp cuối cùng hè...",
    },
    {
        thumbnail: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp",
        title: "Tuổi thơ ai đã từng xem Đấu sĩ LBX k...",
    },
    {
        thumbnail: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp",
        title: "#ShopeeVideo #ShopeeCreator...",
    },
];

export default function ProductVideosSection({ videos = DEFAULT_VIDEOS }: ProductVideosSectionProps) {
    return (
        <View className="py-3 bg-white border-t-2 border-gray-100">
            <TouchableOpacity className="flex-row items-center justify-between px-4 mb-3">
                <Text className="text-sm font-medium text-gray-800">Video về sản phẩm</Text>
                <Ionicons name="chevron-forward" size={16} color="#999" />
            </TouchableOpacity>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
                {videos.map((video, index) => (
                    <VideoThumbnail
                        key={index}
                        thumbnail={video.thumbnail}
                        title={video.title}
                        duration={video.duration}
                    />
                ))}
            </ScrollView>
        </View>
    );
}
