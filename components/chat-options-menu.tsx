import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

interface MenuOption {
    id: string;
    icon: string;
    label: string;
}

interface ChatOptionsMenuProps {
    visible: boolean;
    onClose: () => void;
    options: MenuOption[];
    onSelectOption?: (optionId: string) => void;
}

export default function ChatOptionsMenu({
    visible,
    onClose,
    options,
    onSelectOption,
}: ChatOptionsMenuProps) {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <TouchableOpacity
                className="flex-1 bg-black/50"
                activeOpacity={1}
                onPress={onClose}
            >
                <View className="absolute top-24 right-6 bg-white rounded-lg shadow-lg overflow-hidden" style={{ width: 250 }}>
                    {options.map((option, index) => (
                        <TouchableOpacity
                            key={option.id}
                            className={`flex-row items-center px-4 py-3 ${index < options.length - 1 ? "border-b border-gray-100" : ""
                                }`}
                            onPress={() => {
                                onClose();
                                onSelectOption?.(option.id);
                            }}
                        >
                            <Ionicons name={option.icon as any} size={20} color="#666" />
                            <Text className="text-sm text-gray-800 ml-3">{option.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </TouchableOpacity>
        </Modal>
    );
}
