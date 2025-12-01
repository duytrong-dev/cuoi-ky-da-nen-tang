import LiveCard from "@/components/live-card";
import SectionHeader from "@/components/section-header";
import VideoCard from "@/components/video-card";
import { useVideoPlayer } from "expo-video";
import { View } from "react-native";

export default function LiveAndVideoSection() {
    const player1 = useVideoPlayer(require("@/assets/video/video1.mp4"), (player) => {
        player.loop = true;
        player.muted = true;
        player.play();
    });

    const player2 = useVideoPlayer(require("@/assets/video/video2.mp4"), (player) => {
        player.loop = true;
        player.muted = true;
        player.play();
    });

    return (
        <View className="flex-row p-2 bg-transparent">
            {/* Shopee Live */}
            <View className="flex-1 bg-white rounded-lg overflow-hidden mr-1 py-2 border">
                <SectionHeader title="LIVE" />
                <View className="flex-row p-1">
                    <LiveCard
                        imageUrl="https://cf.shopee.vn/file/vn-11134258-820l4-mf10j24d1zpkdd"
                        label="Hỏi Đáp"
                    />
                    <LiveCard
                        imageUrl="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9.webp"
                        label="Săn Sale"
                    />
                </View>
            </View>

            {/* Shopee Video */}
            <View className="flex-1 bg-white rounded-lg overflow-hidden ml-1 py-2 border">
                <SectionHeader title="VIDEO" />
                <View className="flex-row p-1">
                    <VideoCard player={player1} viewCount="89" />
                    <VideoCard player={player2} viewCount="24k" />
                </View>
            </View>
        </View>
    );
}