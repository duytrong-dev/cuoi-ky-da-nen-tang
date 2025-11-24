import { Ionicons } from "@expo/vector-icons";
import { useVideoPlayer, VideoView } from "expo-video";
import { Image, Text, TouchableOpacity, View } from "react-native";

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
        <View className="flex-row p-2 bg-gray-100">
            {/* Shopee Live */}
            <View className="flex-1 bg-white rounded-lg overflow-hidden mr-1 py-2">
                <View className="p-2 flex-row items-center">
                    <Text className="text-primary font-bold mr-1">LIVE</Text>
                    <Ionicons name="chevron-forward" size={12} color="#999" />
                </View>
                <View className="flex-row p-1">
                    <TouchableOpacity className="flex-1 h-40 bg-gray-200 rounded-md mr-1 relative overflow-hidden">
                        {/* Placeholder Image */}
                        <View className="absolute top-1 left-1 bg-red-500 px-1 rounded-sm z-10">
                            <Text className="text-white text-[8px] font-bold">LIVE</Text>
                        </View>
                        <Image source={{ uri: "https://cf.shopee.vn/file/vn-11134258-820l4-mf10j24d1zpkdd" }} className="w-full h-full" resizeMode="cover" />
                        <Text className="absolute bottom-1 left-1 text-white text-[10px] font-bold shadow-sm">Hỏi Đáp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 h-40 bg-gray-200 rounded-md relative overflow-hidden">
                        <View className="absolute top-1 left-1 bg-red-500 px-1 rounded-sm z-10">
                            <Text className="text-white text-[8px] font-bold">LIVE</Text>
                        </View>
                        <Image source={{ uri: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9.webp" }} className="w-full h-full" resizeMode="cover" />
                        <Text className="absolute bottom-1 left-1 text-white text-[10px] font-bold shadow-sm">Săn Sale</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Shopee Video */}
            <View className="flex-1 bg-white rounded-lg overflow-hidden ml-1 py-2">
                <View className="p-2 flex-row items-center">
                    <Text className="text-primary font-bold mr-1">VIDEO</Text>
                    <Ionicons name="chevron-forward" size={12} color="#999" />
                </View>
                <View className="flex-row p-1">
                    <TouchableOpacity className="flex-1 h-40 bg-gray-200 rounded-md mr-1 relative overflow-hidden">
                        <View className="absolute top-1 left-1 flex-row items-center z-10">
                            <Ionicons name="play" size={8} color="white" />
                            <Text className="text-white text-[8px] font-bold ml-0.5">89</Text>
                        </View>
                        <VideoView
                            player={player1}
                            style={{ width: "100%", height: "100%" }}
                            contentFit="cover"
                            nativeControls={false}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 h-40 bg-gray-200 rounded-md relative overflow-hidden">
                        <View className="absolute top-1 left-1 flex-row items-center z-10">
                            <Ionicons name="play" size={8} color="white" />
                            <Text className="text-white text-[8px] font-bold ml-0.5">24k</Text>
                        </View>
                        <VideoView
                            player={player2}
                            style={{ width: "100%", height: "100%" }}
                            contentFit="cover"
                            nativeControls={false}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}