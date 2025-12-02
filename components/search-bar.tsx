import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

interface SearchBarProps {
    value: string;
    onChangeText: (text: string) => void;
    onBack: () => void;
    onFilter?: () => void;
    onCamera?: () => void;
    placeholder?: string;
}

export default function SearchBar({
    value,
    onChangeText,
    onBack,
    onFilter,
    onCamera,
    placeholder = "Tìm kiếm sản phẩm"
}: SearchBarProps) {
    return (
        <View className="flex-row items-center px-3 py-2">
            {/* Back Button */}
            <TouchableOpacity onPress={onBack} className="mr-2">
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            {/* Search Input */}
            <View className="flex-1 flex-row items-center bg-white rounded-md px-3 py-2 border border-gray-300">
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor="#999"
                    className="flex-1 text-base text-gray-800"
                    style={{ fontSize: 16, lineHeight: 20 }}
                    value={value}
                    onChangeText={onChangeText}
                />
                <TouchableOpacity className="mr-2" onPress={onCamera}>
                    <Ionicons name="camera-outline" size={22} color="#666" />
                </TouchableOpacity>
            </View>

            {/* Filter Button */}
            <TouchableOpacity className="ml-2" onPress={onFilter}>
                <Ionicons name="options-outline" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
}
