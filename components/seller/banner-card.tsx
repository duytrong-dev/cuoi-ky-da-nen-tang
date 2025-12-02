import { Ionicons } from '@expo/vector-icons';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export interface Banner {
    id: string;
    image: string;
    position: number;
    active: boolean;
}

interface BannerCardProps {
    banner: Banner;
    onToggleStatus: (id: string) => void;
    onDelete: (id: string) => void;
}

export function BannerCard({ banner, onToggleStatus, onDelete }: BannerCardProps) {
    return (
        <View className="bg-white rounded-lg overflow-hidden mb-4 shadow-sm">
            <Image
                source={{ uri: banner.image }}
                className="w-full h-40"
                resizeMode="cover"
            />
            <View className="p-4">
                <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center">
                        <Text className="text-sm text-gray-600 mr-3">Vị trí: {banner.position}</Text>
                        <View className={`px-2 py-1 rounded ${banner.active ? 'bg-green-100' : 'bg-gray-100'}`}>
                            <Text className={`text-xs ${banner.active ? 'text-green-600' : 'text-gray-600'}`}>
                                {banner.active ? 'Đang hiển thị' : 'Đã ẩn'}
                            </Text>
                        </View>
                    </View>
                    <View className="flex-row">
                        <TouchableOpacity
                            onPress={() => onToggleStatus(banner.id)}
                            className="p-2 mr-2"
                        >
                            <Ionicons
                                name={banner.active ? 'eye-off-outline' : 'eye-outline'}
                                size={20}
                                color="#6b7280"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onDelete(banner.id)}
                            className="p-2"
                        >
                            <Ionicons name="trash-outline" size={20} color="#ef4444" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
