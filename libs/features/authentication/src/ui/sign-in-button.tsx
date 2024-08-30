import { useSession } from '@entities/authentication';
import { router } from 'expo-router';
import { Button, ButtonProps } from 'react-native-paper';

type SignInButtonProps = Omit<ButtonProps, 'children'> & {
  children?: React.ReactNode;
};

export const SignInButton = ({
  children = 'Sign In',
  ...rest
}: SignInButtonProps) => {
  const { signIn } = useSession();

  const handleSignIn = async () => {
    await signIn();
    router.replace('/');
  };

  return (
    <Button mode="contained" onPress={() => void handleSignIn()} {...rest}>
      {children}
    </Button>
  );
};
