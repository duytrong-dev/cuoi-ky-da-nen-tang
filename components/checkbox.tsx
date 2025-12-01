import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface CheckboxProps {
    checked: boolean;
    onToggle: () => void;
    label: string;
}

export default function Checkbox({ checked, onToggle, label }: CheckboxProps) {
    return (
        <TouchableOpacity
            className="flex-row items-start mt-5"
            onPress={onToggle}
        >
            <View
                className={`w-5 h-5 rounded border ${checked ? "bg-primary border-primary" : "border-gray-400"
                    }`}
            />
            <Text className="flex-1 ml-3 text-gray-700">
                {label}
            </Text>
        </TouchableOpacity>
    );
}
