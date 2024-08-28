import { AuthenticationProvider, UiProvider } from '@shared/ui';
import { Slot } from 'expo-router';

const Root = () => (
  <AuthenticationProvider>
    <UiProvider>
      <Slot />
    </UiProvider>
  </AuthenticationProvider>
);

export default Root;
