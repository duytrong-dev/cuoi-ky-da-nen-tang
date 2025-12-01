import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    Text,
    TouchableOpacity
} from "react-native";

interface DeliveryDateInfoProps {
    deliveryDate: string;
}

export default function DeliveryDateInfo({ deliveryDate }: DeliveryDateInfoProps) {
    return (
        <TouchableOpacity className="mx-4 my-3 bg-teal-50 border border-teal-200 rounded-lg px-4 py-3 flex-row items-center justify-between">
            <Text className="text-teal-600 text-sm flex-1">
                Thời gian đảm bảo nhận hàng: {deliveryDate}
            </Text>
            <Ionicons name="chevron-forward" size={16} color="#14b8a6" />
        </TouchableOpacity>
    );
}
