import { Colors } from "@/constants/theme";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import HeaderBackButton from "./header-back-button";
import HeaderIconButton from "./header-icon-button";

interface CreateScreenOptionsParams {
    isDark: boolean;
    goBack: () => void;
    router: Router;
}

export const createStandardScreenOptions = (
    title: string,
    { isDark, goBack }: CreateScreenOptionsParams
): NativeStackNavigationOptions => ({
    headerShown: true,
    headerTitle: title,
    headerLeft: () => <HeaderBackButton onPress={goBack} color="black" />,
    headerRight: () => (
        <HeaderIconButton
            iconName="help-circle-outline"
            onPress={() => console.log("Help")}
            color="black"
        />
    ),
    headerTitleAlign: "center",
    headerStyle: { backgroundColor: isDark ? "#111" : "#fff" },
    headerTitleStyle: {
        fontWeight: "500",
        fontSize: 18,
        color: isDark ? "black" : "black",
    },
});

export const createCartScreenOptions = ({
    isDark,
    goBack,
    router,
}: CreateScreenOptionsParams): NativeStackNavigationOptions => ({
    headerShown: true,
    headerLeft: () => <HeaderBackButton onPress={goBack} color="black" />,
    headerRight: () => (
        <View className="flex-row items-center gap-4">
            <TouchableOpacity>
                <Text className="text-base text-gray-800 dark:text-white">Sửa</Text>
            </TouchableOpacity>
            <HeaderIconButton
                iconName="chatbubble-ellipses-outline"
                onPress={() => router.push("/chat")}
                color="black"
            />
        </View>
    ),
    headerTitleAlign: "left",
    headerStyle: {
        backgroundColor: isDark ? Colors.dark.background : Colors.light.background,
    },
    headerShadowVisible: false,
});

export const createSettingsScreenOptions = ({
    isDark,
    goBack,
    router,
}: CreateScreenOptionsParams): NativeStackNavigationOptions => ({
    headerShown: true,
    headerTitle: "Thiết lập tài khoản",
    headerTitleAlign: "center",
    headerLeft: () => <HeaderBackButton onPress={goBack} color="black" />,
    headerRight: () => (
        <HeaderIconButton
            iconName="chatbubble-ellipses-outline"
            onPress={() => router.push("/chat")}
            color="black"
        />
    ),
    headerStyle: {
        backgroundColor: isDark ? Colors.dark.background : Colors.light.background,
    },
    headerTitleStyle: {
        fontWeight: "500",
        fontSize: 18,
        color: "black",
    },
});

export const createMyOrdersScreenOptions = ({
    isDark,
    goBack,
    router,
}: CreateScreenOptionsParams): NativeStackNavigationOptions => ({
    headerShown: true,
    headerTitle: "Đơn hàng của tôi",
    headerTitleAlign: "center",
    headerLeft: () => <HeaderBackButton onPress={goBack} color="black" />,
    headerRight: () => (
        <View className="flex-row items-center gap-4">
            <HeaderIconButton iconName="search-outline" onPress={() => { }} color="black" />
            <HeaderIconButton
                iconName="chatbubble-ellipses-outline"
                onPress={() => router.push("/chat")}
                color="black"
            />
        </View>
    ),
    headerStyle: {
        backgroundColor: isDark ? Colors.dark.background : Colors.light.background,
    },
    headerTitleStyle: {
        fontWeight: "500",
        fontSize: 18,
        color: "black",
    },
});


export const createChatDetailScreenOptions = ({
    isDark,
    goBack,
}: CreateScreenOptionsParams): NativeStackNavigationOptions => ({
    headerShown: true,
    headerLeft: () => <HeaderBackButton onPress={goBack} color="black" />,
    headerStyle: {
        backgroundColor: isDark ? Colors.dark.background : Colors.light.background,
    },
    headerShadowVisible: true,
});

export const createOrderSuccessScreenOptions = ({
    isDark,
    goBack,
    router,
}: CreateScreenOptionsParams): NativeStackNavigationOptions => ({
    headerShown: true,
    headerLeft: () => <HeaderBackButton onPress={goBack} color="#fff" />,
    headerRight: () => (
        <HeaderIconButton
            iconName="cart-outline"
            onPress={() => router.push("/cart")}
            color="#fff"
        />
    ),
    headerTitle: "",
    headerTitleAlign: "center",
    headerStyle: {
        backgroundColor: isDark ? Colors.dark.primary : Colors.light.primary,
    },
    headerShadowVisible: false,
});
