import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, ImageSourcePropType, Text, TouchableOpacity } from "react-native";

type SocialProvider = "google" | "facebook" | "apple";

interface SocialLoginButtonProps {
    provider: SocialProvider;
    onPress?: () => void;
    customLabel?: string;
}

const SOCIAL_CONFIG: Record<SocialProvider, {
    label: string;
    icon: "image" | "ionicon";
    iconName?: keyof typeof Ionicons.glyphMap;
    iconColor?: string;
    imageSource?: ImageSourcePropType;
}> = {
    google: {
        label: "Đăng ký bằng Google",
        icon: "image",
        imageSource: require("@/assets/images/google-logo.png"),
    },
    facebook: {
        label: "Đăng ký bằng Facebook",
        icon: "ionicon",
        iconName: "logo-facebook",
        iconColor: "#1877F2",
    },
    apple: {
        label: "Đăng ký bằng Apple",
        icon: "ionicon",
        iconName: "logo-apple",
        iconColor: "#000",
    },
};

export default function SocialLoginButton({ provider, onPress, customLabel }: SocialLoginButtonProps) {
    const config = SOCIAL_CONFIG[provider];

    return (
        <TouchableOpacity
            className="flex-row items-center border border-gray-300 py-3 rounded-lg"
            onPress={onPress}
        >
            {config.icon === "image" && config.imageSource ? (
                <Image
                    source={config.imageSource}
                    style={{ width: 24, height: 20, marginLeft: 10 }}
                    resizeMode="contain"
                />
            ) : (
                <Ionicons
                    name={config.iconName!}
                    size={provider === "apple" ? 23 : 22}
                    color={config.iconColor}
                    style={{ marginLeft: 12 }}
                />
            )}
            <Text className="flex-1 text-center font-medium mr-5">
                {customLabel || config.label}
            </Text>
        </TouchableOpacity>
    );
}
