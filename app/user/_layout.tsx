import { createSettingsScreenOptions } from '@/components/screen-options';
import { Stack, useRouter } from 'expo-router';

export default function UserLayout() {

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
            <Stack.Screen name="settings/index" options={createSettingsScreenOptions(screenOptionsParams)} />
        </Stack>
    );
}
