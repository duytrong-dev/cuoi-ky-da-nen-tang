import { Colors } from "@/constants/theme";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import HeaderBackButton from "./header-back-button";
import HeaderIconButton from "./header-icon-button";

interface CreateScreenOptionsParams {
    goBack: () => void;
    router: Router;
}

export const createStandardScreenOptions = (
    title: string,
    { goBack }: CreateScreenOptionsParams
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
    headerStyle: { backgroundColor: "#fff" },
    headerTitleStyle: {
        fontWeight: "500",
        fontSize: 18,
        color: "black",
    },
});

export const createCartScreenOptions = ({
    goBack,
    router,
}: CreateScreenOptionsParams): NativeStackNavigationOptions => ({
    headerShown: true,
    headerLeft: () => <HeaderBackButton onPress={goBack} color="black" />,
    headerRight: () => (
        <View className="flex-row items-center gap-4">
            <TouchableOpacity>
                <Text className="text-base text-gray-800">Sửa</Text>
            </TouchableOpacity>
            <HeaderIconButton
                iconName="chatbubble-ellipses-outline"
                onPress={() => router.push("/chats")}
                color="black"
            />
        </View>
    ),
    headerTitleAlign: "left",
    headerStyle: {
        backgroundColor: Colors.light.background,
    },
    headerShadowVisible: false,
});

export const createSettingsScreenOptions = ({
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
            onPress={() => router.push("/chats")}
            color="black"
        />
    ),
    headerStyle: {
        backgroundColor: Colors.light.background,
    },
    headerTitleStyle: {
        fontWeight: "500",
        fontSize: 18,
        color: "black",
    },
});

export const createMyOrdersScreenOptions = ({
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
                onPress={() => router.push("/chats")}
                color="black"
            />
        </View>
    ),
    headerStyle: {
        backgroundColor: Colors.light.background,
    },
    headerTitleStyle: {
        fontWeight: "500",
        fontSize: 18,
        color: "black",
    },
});


export const createChatDetailScreenOptions = ({
    goBack,
}: CreateScreenOptionsParams): NativeStackNavigationOptions => ({
    headerShown: true,
    headerLeft: () => <HeaderBackButton onPress={goBack} color="black" />,
    headerStyle: {
        backgroundColor: Colors.light.background,
    },
    headerShadowVisible: true,
});

export const createOrderSuccessScreenOptions = ({
    goBack,
    router,
}: CreateScreenOptionsParams): NativeStackNavigationOptions => ({
    headerShown: true,
    headerLeft: () => <HeaderBackButton onPress={goBack} color="#fff" />,
    headerRight: () => (
        <HeaderIconButton
            iconName="cart-outline"
            onPress={() => router.push("/orders/cart")}
            color="#fff"
        />
    ),
    headerTitle: "",
    headerTitleAlign: "center",
    headerStyle: {
        backgroundColor: Colors.light.secondary,
    },
    headerShadowVisible: false,
});

export const createSellerRegisterScreenOptions = ({
    goBack,
}: CreateScreenOptionsParams): NativeStackNavigationOptions => ({
    headerShown: true,
    headerTitle: "Đăng ký bán hàng",
    headerTitleAlign: "center",
    headerLeft: () => <HeaderBackButton onPress={goBack} color="#fff" />,
    headerStyle: {
        backgroundColor: Colors.light.secondary,
    },
    headerTitleStyle: {
        fontWeight: "600",
        fontSize: 18,
        color: "#fff",
    },
    headerShadowVisible: false,
});
