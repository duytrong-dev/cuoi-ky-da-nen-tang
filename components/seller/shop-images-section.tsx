import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface ShopImagesSectionProps {
    banner: string;
    logo: string;
    onPickImage: (type: 'logo' | 'banner') => void;
}

export function ShopImagesSection({ banner, logo, onPickImage }: ShopImagesSectionProps) {
    return (
        <View className="bg-white rounded-lg overflow-hidden mb-4 shadow-md">
            {/* Banner with Avatar Inside */}
            <View className="relative">
                <Image
                    source={{ uri: banner }}
                    style={{ width: '100%', height: 220 }}
                    resizeMode="cover"
                />
                <TouchableOpacity
                    onPress={() => onPickImage('banner')}
                    className="absolute top-2 right-2 bg-black/50 p-2 rounded-full"
                    style={{ elevation: 2 }}
                >
                    <Ionicons name="camera" size={20} color="white" />
                </TouchableOpacity>
                <Text className="absolute top-2 left-2 bg-black/40 px-3 py-2 rounded text-md text-white">
                    Banner Shop
                </Text>

                {/* Avatar positioned at bottom center of banner */}
                <View className="absolute bottom-4 left-0 right-0 items-center">
                    <View className="relative">
                        <Image
                            source={{ uri: logo }}
                            style={{ width: 100, height: 100 }}
                            className="rounded-full bg-white border-2 border-gray-300"
                        />
                        <TouchableOpacity
                            onPress={() => onPickImage('logo')}
                            className="absolute bottom-0 right-0 bg-secondary p-2 rounded-full border-2 border-white"
                            style={{ elevation: 2 }}
                        >
                            <Ionicons name="camera" size={16} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
