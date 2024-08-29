import { View } from 'react-native';

import { useSession } from '@entities/authentication';
import { Page, tw } from '@shared/ui';
import { router } from 'expo-router';
import { Button } from 'react-native-paper';

export default function SignIn() {
  const { signIn } = useSession();

  const handleSignIn = () => {
    signIn();
    router.replace('/');
  };

  return (
    <Page
      edges={['top', 'bottom']}
      style={tw`flex-1 bg-background dark:bg-dark-background`}
    >
      <View style={tw`flex-1 justify-end`}>
        <Button mode="contained" onPress={handleSignIn} style={tw`m-4`}>
          Sign In
        </Button>
      </View>
    </Page>
  );
}
