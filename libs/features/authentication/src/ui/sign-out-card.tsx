import { useSession } from '@entities/authentication';
import { tw } from '@shared/ui';
import { Card, CardProps } from 'react-native-paper';

type SignOutCardProps = Omit<CardProps, 'children' | 'elevation'>;

export const SignOutCard = (props: SignOutCardProps) => {
  const { signOut } = useSession();
  const handleSignOut = () => {
    // show confirmation dialog and log out user
    signOut();
  };

  return (
    <Card mode="contained" {...props} onPress={handleSignOut}>
      <Card.Title title="Sign Out" titleStyle={tw`py-1`} />
    </Card>
  );
};
