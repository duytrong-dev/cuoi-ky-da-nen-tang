import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface TextLinkProps {
    text: string;
    onPress: () => void;
    className?: string;
}

export default function TextLink({ text, onPress, className = "text-primary" }: TextLinkProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text className={className}>{text}</Text>
        </TouchableOpacity>
    );
}
