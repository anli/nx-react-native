import { Text, View } from 'react-native';

import { useAuthentication } from '@shared/ui';
import { router } from 'expo-router';

const SignIn = () => {
  const { signIn } = useAuthentication();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace('/');
        }}>
        Sign In
      </Text>
    </View>
  );
};


export default SignIn;
