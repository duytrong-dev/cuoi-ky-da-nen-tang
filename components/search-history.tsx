import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from "react-native";

interface SearchHistoryProps {
    history: string[];
    onHistoryPress: (item: string) => void;
    onClearHistory?: () => void;
}

export default function SearchHistory({ history, onHistoryPress, onClearHistory }: SearchHistoryProps) {
    return (
        <View className="px-4 py-3">
            <View className="flex flex-row flex-wrap gap-3">
                {history.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => onHistoryPress(item)}
                        className="bg-gray-100 rounded-full px-3 py-2 mr-2 flex-row items-center"
                    >
                        <Text className="text-sm text-gray-700 mr-1">{item}</Text>
                        {index === 0 && (
                            <Image
                                source={{
                                    uri: "https://cf.shopee.vn/file/vn-50009109-c7a2e1ae720f9740552626c877d211c7_xxhdpi",
                                }}
                                className="w-4 h-4 rounded"
                            />
                        )}
                    </TouchableOpacity>
                ))}
                <TouchableOpacity
                    className="bg-gray-100 rounded-full px-3 py-1.5 flex-row items-center"
                    onPress={onClearHistory}
                >
                    <Ionicons name="trash-outline" size={14} color="#666" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
