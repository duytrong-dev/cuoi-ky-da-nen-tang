import { createStandardScreenOptions } from '@/components/screen-options';
import { Stack, useRouter } from 'expo-router';

export default function AuthLayout() {

    const goBack = () => {
        if (router.canGoBack()) {
            router.back();
        } else {
            router.replace("/");
        }
    };
    const router = useRouter();
    const screenOptionsParams = { goBack, router };

    return (
        <Stack>
            <Stack.Screen name="login/index" options={createStandardScreenOptions("Đăng nhập", screenOptionsParams)} />
            <Stack.Screen name="register/index" options={createStandardScreenOptions("Đăng ký", screenOptionsParams)} />
            <Stack.Screen name="forgot-password/index" options={createStandardScreenOptions("Đặt lại mật khẩu", screenOptionsParams)} />
            <Stack.Screen name="verify-code/index" options={createStandardScreenOptions("Nhập mã xác minh", screenOptionsParams)} />
        </Stack>
    );
}
