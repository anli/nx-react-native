import { ThemeProvider } from '@shared/ui';
import { Stack } from 'expo-router/stack';

export default () => (
  <ThemeProvider>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  </ThemeProvider>
);
