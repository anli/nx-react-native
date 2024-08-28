import { Stack } from 'expo-router/stack';

export default () => (
  <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  </Stack>
);
