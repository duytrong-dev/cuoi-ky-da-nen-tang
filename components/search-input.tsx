import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

interface SearchInputProps {
    value: string;
    onChangeText: (text: string) => void;
    onBack: () => void;
    onClear: () => void;
    onSearch: () => void;
    onCamera?: () => void;
    onFocus?: () => void;
    placeholder?: string;
}

export default function SearchInput({
    value,
    onChangeText,
    onBack,
    onClear,
    onSearch,
    onCamera,
    onFocus,
    placeholder = "Samsung Galaxy Siêu Sale"
}: SearchInputProps) {
    return (
        <View className="bg-white border-b border-gray-200">
            <View className="flex-row items-center px-3 py-2">
                {/* Back Button */}
                <TouchableOpacity onPress={onBack} className="mr-2">
                    <Ionicons name="arrow-back" size={24} color="#EE4D2D" />
                </TouchableOpacity>

                {/* Search Input */}
                <View className="flex-1 flex-row items-center justify-center bg-white rounded-md px-3 py-2 border border-gray-300">
                    <TextInput
                        placeholder={placeholder}
                        placeholderTextColor="#999"
                        className="flex-1 text-lg text-gray-800"
                        style={{ fontSize: 16, lineHeight: 20 }}
                        value={value}
                        onChangeText={onChangeText}
                        onFocus={onFocus}
                        autoFocus={false}
                    />
                    {value.length > 0 && (
                        <TouchableOpacity onPress={onClear} className="mr-2">
                            <Ionicons name="close-circle" size={20} color="#999" />
                        </TouchableOpacity>
                    )}
                    <TouchableOpacity onPress={onCamera}>
                        <Ionicons name="camera-outline" size={22} color="#666" />
                    </TouchableOpacity>
                </View>

                {/* Search Button */}
                <TouchableOpacity
                    onPress={onSearch}
                    className="ml-2 bg-primary rounded-md p-2"
                >
                    <Ionicons name="search" size={22} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
