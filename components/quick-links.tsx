import { quickLinks } from "@/constants/quick-links";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function QuickLinks() {

    const handleOnPress = (index: number) => {
        console.log(`Quick link ${index} pressed`);
    };

    return (
        <View className="flex p-2 px-0">
            <View className="flex-row flex-wrap bg-white py-6">
                {quickLinks.map((link) => (
                    <View
                        key={link.id}
                        className="w-[20%] items-center mb-4"
                    >
                        <TouchableOpacity className="flex-col items-center" onPress={() => handleOnPress(link.id)}>
                            <View className="w-10 h-10 rounded-xl items-center justify-center mb-1 bg-white shadow-sm">
                                {/* Using Icons as placeholders for the actual images */}
                                <MaterialCommunityIcons name={link.icon as any} size={24} color={link.color} />
                            </View>
                            <Text className="text-[10px] text-center leading-3 text-gray-600">
                                {link.title}
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>
    );
}
