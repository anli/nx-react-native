import { UiProvider } from '@shared/ui';
import { Stack } from 'expo-router/stack';

export default () => (
  <UiProvider>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  </UiProvider>
);
