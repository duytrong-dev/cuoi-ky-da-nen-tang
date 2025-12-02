import { createStandardScreenOptions } from '@/components/screen-options';
import { Stack, useRouter } from 'expo-router';

export default function VoucherLayout() {

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
            <Stack.Screen name="index" options={createStandardScreenOptions("Chọn Voucher", screenOptionsParams)} />
        </Stack>
    );
}
