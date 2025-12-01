import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    Text,
    TouchableOpacity,
    View
} from "react-native";

interface DeliveryAddressSectionProps {
    name: string;
    phone: string;
    address: string;
    onPress?: () => void;
}

export default function DeliveryAddressSection({ name, phone, address, onPress }: DeliveryAddressSectionProps) {
    return (
        <TouchableOpacity className="bg-white px-4 py-3 mb-2 flex-row items-center" onPress={onPress}>
            <Ionicons name="location" size={20} color="#ee4d2d" />
            <View className="flex-1 ml-3">
                <View className="flex-row items-center mb-1">
                    <Text className="font-medium text-base">{name}</Text>
                    <Text className="text-gray-500 ml-2">{phone}</Text>
                </View>
                <Text className="text-gray-600 text-sm">{address}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>
    );
}
