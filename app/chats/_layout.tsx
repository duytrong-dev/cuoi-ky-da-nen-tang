import { createChatDetailScreenOptions, createStandardScreenOptions } from '@/components/screen-options';
import { Stack, useRouter } from 'expo-router';

export default function ChatLayout() {

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
            <Stack.Screen name="index" options={createStandardScreenOptions("Chat", screenOptionsParams)} />
            <Stack.Screen name="[id]/index" options={createChatDetailScreenOptions(screenOptionsParams)} />
        </Stack>
    );
}
