import { SessionProvider } from '@entities/authentication';
import { UiProvider } from '@shared/ui';
import { Slot } from 'expo-router';

export default function Root() {
  return (
    <UiProvider>
      <SessionProvider>
        <Slot />
      </SessionProvider>
    </UiProvider>
  );
}
