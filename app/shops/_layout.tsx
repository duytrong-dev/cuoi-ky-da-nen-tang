import { createStandardScreenOptions } from '@/components/screen-options';
import { Stack, useRouter } from 'expo-router';

export default function ShopLayout() {

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
            <Stack.Screen name="[id]/index" options={{ headerShown: false }} />
            <Stack.Screen name="[id]/infomation" options={createStandardScreenOptions("Chi tiết Shop", screenOptionsParams)} />
        </Stack>
    );
}
