import {
  createCartScreenOptions,
  createChatDetailScreenOptions,
  createMyOrdersScreenOptions,
  createOrderSuccessScreenOptions,
  createSettingsScreenOptions,
  createStandardScreenOptions
} from '@/components/screen-options';
import { ThemeProvider, useTheme } from '@/store/ThemeContext';
import { queryClient } from '@/utils/query-client';
import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
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

  const screenOptionsParams = { isDark, goBack, router };

  return (
    <NavigationThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen name="login" options={createStandardScreenOptions("Đăng nhập", screenOptionsParams)} />
        <Stack.Screen name="register" options={createStandardScreenOptions("Đăng ký", screenOptionsParams)} />
        <Stack.Screen name="forgot-password" options={createStandardScreenOptions("Đặt lại mật khẩu", screenOptionsParams)} />
        <Stack.Screen name="verify-code" options={createStandardScreenOptions("Nhập mã xác minh", screenOptionsParams)} />
        <Stack.Screen name="app-voucher" options={createStandardScreenOptions("Chọn Voucher", screenOptionsParams)} />

        <Stack.Screen name="cart" options={createCartScreenOptions(screenOptionsParams)} />
        <Stack.Screen name="chat" options={createStandardScreenOptions("Chat", screenOptionsParams)} />
        <Stack.Screen name="chat/[id]" options={createChatDetailScreenOptions(screenOptionsParams)} />

        <Stack.Screen name="search" options={{ headerShown: false }} />
        <Stack.Screen name="search-results" options={{ headerShown: false }} />
        <Stack.Screen name="settings" options={createSettingsScreenOptions(screenOptionsParams)} />
        <Stack.Screen name="my-orders" options={createMyOrdersScreenOptions(screenOptionsParams)} />
        <Stack.Screen name="checkout" options={createStandardScreenOptions("Thanh toán", screenOptionsParams)} />
        <Stack.Screen name="order-success" options={createOrderSuccessScreenOptions(screenOptionsParams)} />

        <Stack.Screen name="products/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="shops/[id]" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style={isDark ? "light" : "dark"} />
    </NavigationThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RootLayoutNav />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

