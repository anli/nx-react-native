import { SessionProvider } from '@entities/authentication';
import { UiProvider } from '@shared/ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot } from 'expo-router';

const queryClient = new QueryClient();

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <UiProvider>
        <SessionProvider>
          <Slot />
        </SessionProvider>
      </UiProvider>
    </QueryClientProvider>
  );
}
