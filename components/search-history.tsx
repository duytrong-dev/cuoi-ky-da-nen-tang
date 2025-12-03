import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
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
                        className="bg-gray-100 rounded-full px-3 py-2 m1-2 flex-row items-center"
                    >
                        <Text className="text-sm text-gray-700">{item}</Text>
                    </TouchableOpacity>
                ))}
                {
                    history.length > 0 && (
                        <TouchableOpacity
                            className="bg-gray-100 rounded-full px-3 py-1.5 flex-row items-center"
                            onPress={onClearHistory}
                        >
                            <Ionicons name="trash-outline" size={14} color="#666" />
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    );
}
