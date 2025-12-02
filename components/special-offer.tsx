
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function SpecialOffer() {
    return (
        <View className="my-2 bg-white">
            <TouchableOpacity activeOpacity={0.9}>
                <View
                    className="rounded-xl py-4 px-2 flex-row items-center"
                >
                    {/* Logo */}
                    <View className="mr-4">
                        <Image
                            source={require("@/assets/images/special-offer.png")}
                            className="w-24 h-24"
                            resizeMode="contain"
                        />
                    </View>

                    {/* Text Content */}
                    <View className="flex-1">
                        <Text className="text-xl font-bold text-gray-800 mb-1">
                            Siêu giảm giá 😱
                        </Text>
                        <Text className="text-md text-gray-700 leading-5">
                            Chúng tôi đảm bảo bạn nhận được dùng ưu đãi bạn cần với mức giá tốt nhất.
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}
