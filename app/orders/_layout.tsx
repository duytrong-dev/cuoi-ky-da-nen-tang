import { createCartScreenOptions, createMyOrdersScreenOptions, createOrderSuccessScreenOptions, createStandardScreenOptions } from '@/components/screen-options';
import { Stack, useRouter } from 'expo-router';

export default function OrderLayout() {

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
            <Stack.Screen name="index" options={createMyOrdersScreenOptions(screenOptionsParams)} />
            <Stack.Screen name="checkout/index" options={createStandardScreenOptions("Thanh toán", screenOptionsParams)} />
            <Stack.Screen name="success/index" options={createOrderSuccessScreenOptions(screenOptionsParams)} />
            <Stack.Screen name="cart/index" options={createCartScreenOptions(screenOptionsParams)} />
        </Stack>
    );
}
