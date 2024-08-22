import { Stack } from 'expo-router/stack';
import { ThemeProvider } from '@shared/ui';

export default () => {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
};
