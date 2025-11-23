import { Colors } from '@/constants/theme';
import { ThemeProvider, useTheme } from '@/store/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import 'react-native-reanimated';
import "../global.css";

function RootLayoutNav() {
  const { isDark } = useTheme();
  const router = useRouter();

  const goBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/(tabs)");
    }
  };

  // Helper để gộp các options giống nhau
  const screenOptions = (title: string): NativeStackNavigationOptions => ({
    headerShown: true,
    headerTitle: title,
    headerLeft: ({ tintColor }) => (
      <TouchableOpacity onPress={goBack}>
        <Ionicons name="chevron-back" size={24} color={Colors.light.primary} />
      </TouchableOpacity>
    ),
    headerRight: ({ tintColor }) => (
      <TouchableOpacity onPress={() => console.log("Help")}>
        <Ionicons name="help-circle-outline" size={24} color={Colors.light.primary} />
      </TouchableOpacity>
    ),
    headerTitleAlign: "center",
    headerStyle: { backgroundColor: isDark ? "#111" : "#fff" },
    headerTitleStyle: { fontWeight: "500", fontSize: 18, color: isDark ? "#fff" : "#000" },
  });

  const cartScreenOptions = (title: string): NativeStackNavigationOptions => ({
    headerShown: true,
    headerTitle: () => (
      <View className="flex-row items-center">
        <Text className="text-lg font-medium text-black dark:text-white">Giỏ hàng</Text>
        <Text className="text-lg text-gray-500 ml-1">(5)</Text>
      </View>
    ),
    headerLeft: ({ tintColor }) => (
      <TouchableOpacity onPress={goBack} className="mr-4">
        <Ionicons name="arrow-back" size={24} color={Colors.light.primary} />
      </TouchableOpacity>
    ),
    headerRight: ({ tintColor }) => (
      <View className="flex-row items-center gap-4">
        <TouchableOpacity>
          <Text className="text-base text-gray-800 dark:text-white">Sửa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/chat')}>
          <Ionicons name="chatbubble-ellipses-outline" size={24} color={Colors.light.primary} />
        </TouchableOpacity>
      </View>
    ),
    headerTitleAlign: "left",
    headerStyle: { backgroundColor: isDark ? "#111" : "#fff" },
    headerShadowVisible: false,
  });

  return (
    <NavigationThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen name="login" options={screenOptions("Đăng nhập")} />
        <Stack.Screen name="register" options={screenOptions("Đăng ký")} />
        <Stack.Screen name="forgot-password" options={screenOptions("Đặt lại mật khẩu")} />
        <Stack.Screen name="verify-code" options={screenOptions("Nhập mã xác minh")} />

        <Stack.Screen name="cart" options={cartScreenOptions("Giở hàng (4)")} />
        <Stack.Screen name="chat" options={{ headerShown: false }} />
        <Stack.Screen name="search" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style={isDark ? "light" : "dark"} />
    </NavigationThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <RootLayoutNav />
    </ThemeProvider>
  );
}
