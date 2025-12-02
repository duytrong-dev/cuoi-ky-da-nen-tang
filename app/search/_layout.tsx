import { Stack } from 'expo-router';

export default function ProductLayout() {

    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="results/index" options={{ headerShown: false }} />
        </Stack>
    );
}
