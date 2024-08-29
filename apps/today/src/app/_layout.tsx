import { SessionProvider } from '@entities/authentication';
import { UiProvider } from '@shared/ui';
import { Slot } from 'expo-router';

export default () => (
  <SessionProvider>
    <UiProvider>
      <Slot />
    </UiProvider>
  </SessionProvider>
);
